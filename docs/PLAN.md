# PLAN DE MEJORA DEL PROYECTO INMO-DEMO

## 1. Análisis de Skills Disponibles

### 1.1 `frontend-design` Skill
- **Propósito**: Crear interfaces frontend distintivas y de producción con alta calidad de diseño
- **Aplicación**: Mejorar la estética general del sitio web, evitar estilos genéricos de IA
- **Enfoque**: Añadir detalles creativos, elecciones estilísticas audaces, y ejecución precisa

### 1.2 `ui-design-system` Skill
- **Propósito**: Sistemas de UI con TailwindCSS + Radix + shadcn/ui
- **Nota importante**: El proyecto actual NO usa shadcn/ui ni Radix UI, sino componentes personalizados con Tailwind CSS v4 `@theme`
- **Aplicación**: Aplicar principios de diseño de sistemas de UI con enfoque en componentes personalizados

## 2. Análisis de la Estructura Visual

Los mockups proporcionados indican una nueva estructura visual para:
1. **Formulario de Contacto** (serenity_inicio_v6_-_formulario_contacto)
2. **Listado de Propiedades** (serenity_v5_-_listado_(español))
3. **Vista de Mapa** (serenity_v5_-_mapa_(español))
4. **Detalles de Propiedad** (serenity_v7_-_detalles_(sin_descripciones_largas))

## 3. Plan de Acción por Fases

### Fase 1: Evaluación y Reestructuración de Componentes Existentes

**Tareas:**
1. Revisar el componente `ContactForm` actual y su integración en `ContactSection`
2. Revisar el componente `FeaturedProperties` y su estructura de listado de propiedades
3. Revisar el diseño del `Hero` y su formulario de búsqueda
4. Revisar el diseño del `WhyChooseUs` y `Footer`

**Aplicación de Skills:**
- Aplicar `frontend-design` para mejorar la estética y creatividad de los componentes
- Aplicar `ui-design-system` para mantener consistencia en el uso de Tailwind

### Fase 2: Implementación de Nuevas Estructuras Visuales

**Tareas:**
1. Crear nuevo componente de listado de propiedades basado en el mockup `serenity_v5_-_listado_(español)`
2. Crear nuevo componente de vista de mapa basado en el mockup `serenity_v5_-_mapa_(español)`
3. Crear nuevo componente de detalles de propiedad basado en el mockup `serenity_v7_-_detalles_(sin_descripciones_largas)`
4. Actualizar el formulario de contacto basado en el mockup `serenity_inicio_v6_-_formulario_contacto`

**Aplicación de Skills:**
- Aplicar `frontend-design` para crear interfaces visuales distintivas y atractivas
- Aplicar `ui-design-system` para mantener consistencia en el uso de componentes

### Fase 3: Integración y Optimización

**Tareas:**
1. Integrar los nuevos componentes con la estructura existente
2. Asegurar coherencia en el uso de colores, tipografía y espaciado
3. Optimizar el rendimiento y accesibilidad
4. Asegurar compatibilidad responsive

**Aplicación de Skills:**
- Aplicar `frontend-design` para optimizar la experiencia de usuario
- Aplicar `ui-design-system` para garantizar consistencia y accesibilidad

## 4. Dependencias y Impactos

### Componentes Existentes a Modificar:
1. `ContactForm` y `ContactSection` - Requieren actualización visual
2. `FeaturedProperties` - Requiere reestructuración para el nuevo diseño de listado
3. `Hero` - Puede necesitar ajustes en el formulario de búsqueda
4. `Layout` - Puede requerir ajustes para nuevas estructuras

### Componentes Nuevos a Crear:
1. `PropertyListPage` - Para el listado de propiedades
2. `PropertyMapPage` - Para la vista de mapa
3. `PropertyDetailPage` - Para detalles de propiedad
4. Componentes de navegación para las nuevas vistas

### Cambios en Rutas/Estado:
- Nuevas rutas para las vistas de listado, mapa y detalles
- Actualización del estado de navegación
- Posible reestructuración del menú de navegación

## 5. Próximos Pasos

1. **Fase 1**: Revisar y mejorar los componentes existentes con enfoque en diseño creativo
2. **Fase 2**: Crear nuevos componentes basados en los mockups proporcionados
3. **Fase 3**: Integrar todo y asegurar coherencia visual y funcional

Este plan asegura una transición progresiva hacia la nueva estructura visual mientras mantiene las mejores prácticas de arquitectura y código.