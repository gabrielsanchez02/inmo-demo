---
name: raxo-lar-conventions
description: "Project-specific conventions for Raxo-Lar 2.0 SaaS inmobiliaria. Use this skill when modifying any part of the codebase to ensure consistency with the established architecture, multitenancy, roles, and deployment patterns."
---

# Raxo-Lar 2.0 — Project Conventions

> Conventions and patterns specific to this project. Always check before making architectural decisions.

## Architecture Overview

```
inmobiliaria-inmoGeneral/
├── packages/
│   ├── api/          # Express 5 + Prisma + TypeScript (Port 4000)
│   └── client/       # Next.js 15 + App Router + Tailwind v4 (Port 3000)
├── docker-compose.yml  # Local: PostgreSQL + Redis + API + Client + Nginx
└── .agents/skills/     # AI agent skill files
```

### Deployment Model
| Environment | API | Client | DB |
|------------|-----|--------|-----|
| **Local** | Docker (`raxo-api:4000`) | Docker (`raxo-client:3000`) | PostGIS container |
| **Production** | Vercel Serverless (`api/index.ts`) | Vercel (Next.js) | Neon PostgreSQL |

### Critical Vercel Constraints
- **NO Redis** in production — never statically import `queue.service.ts` from routes
- **NO TensorFlow** at module level — use dynamic `await import()` for heavy deps
- **Prisma binary**: `rhel-openssl-3.0.x` target required for Vercel Lambda
- **Build script**: Must run `npx prisma generate && tsc`

---

## Multitenancy (SaaS)

### Tenant Isolation
- Every tenant is an **Agency** (`Agency` model in Prisma)
- Data isolation via `prisma-tenant.ts` extension (`withTenant(agencyId)`)
- Every model with `agencyId` is automatically scoped per-tenant
- **Tenant-scoped models**: `Property`, `Inquiry`, `Agent`, `User`, `SearchLog`

### URL Structure
```
/{tenantSlug}/            → Public storefront
/{tenantSlug}/admin       → Agency admin panel
/{tenantSlug}/login       → Agency login
/super                    → SuperAdmin global panel
```

---

## Role Hierarchy

| Role | Scope | Access |
|------|-------|--------|
| `SUPERADMIN` | Global | Everything, all agencies, `/super` panel |
| `AGENCY_ADMIN` | Per-agency | Agency settings, users, theme, properties |
| `AGENT` | Per-agency | Properties, inquiries (read/write) |

### Seed Users
- **SuperAdmin**: `gaby` / `1234`
- **Agency Admin**: `raxogaby` / `1234` (agency: `raxo-lar`)

---

## Design System

### CSS Variables (Tailwind v4 `@theme`)
The project uses **Tailwind CSS v4** with `@theme` in `globals.css`. NOT shadcn/ui, NOT Radix.

```css
@theme {
  --color-primary: #71C5EE;
  --color-secondary: #A7C4B5;
  --color-accent: #D4A853;
  --color-surface: #FFFFFF;
  --color-bg-light: #f6f7f7;
  --radius-base: 16px;
  --font-display: "Inter", system-ui, sans-serif;
}
```

### Theme Engine (Whitelabel)
- Each `Agency` has a `theme Json?` field in Prisma
- `ThemeConfig` type and `DEFAULT_THEME` in `lib/theme.config.ts`
- SSR injection via `generateThemeCSS()` in `[tenantSlug]/layout.tsx`
- Live preview via `ThemePreviewListener.tsx` (postMessage to iframe)
- Fonts: Whitelist of 8 Google Fonts, loaded conditionally via `next/font/google`

---

## Prisma Patterns

### Singleton
```typescript
// Always import from @/lib/prisma or ../lib/prisma.js
import { prisma } from "../lib/prisma.js";
```
Never instantiate `new PrismaClient()` directly.

### Tenant-Scoped Queries
```typescript
import { withTenant } from "../lib/prisma-tenant.js";
const tenantPrisma = prisma.$extends(withTenant(agencyId));
// All queries auto-scoped to this agency
```

---

## API Conventions

- **Framework**: Express 5 (async route handlers natively supported)
- **Validation**: Zod schemas for request bodies
- **Error format**: `{ error: string, details?: string }`
- **CORS**: Regex-based (`/\.vercel\.app$/`) for Vercel previews
- **Image processing**: Sharp for resizing, TensorFlow for moderation (lazy-loaded)
- **Background jobs**: BullMQ + Redis (Docker only, not production)

---

## Testing

| Type | Tool | Location |
|------|------|----------|
| Unit | Vitest | `__tests__/unit/` |
| Integration | Vitest + Supertest + Testcontainers | `__tests__/integration/` |
| E2E | Playwright | `packages/client/` |

### Test Infrastructure
- `globalSetup.ts` starts PostGIS and Redis containers via Testcontainers
- `DATABASE_URL` and `REDIS_URL` set dynamically per test run
- Coverage target: **90%** (statements)

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `api/src/index.ts` | Express app entry, CORS, middleware |
| `api/src/lib/prisma.ts` | PrismaClient singleton |
| `api/src/lib/prisma-tenant.ts` | Tenant isolation extension |
| `api/api/index.ts` | Vercel serverless entry point |
| `client/lib/theme.config.ts` | ThemeConfig type, Zod schema, CSS generator |
| `client/app/globals.css` | Tailwind v4 @theme tokens |
| `client/app/[tenantSlug]/layout.tsx` | Tenant layout with SSR theme injection |
