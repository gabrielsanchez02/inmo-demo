import { test, expect } from '@playwright/test';

test.describe('Test de navegación principal', () => {
  test('debe cargar la página de inicio correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/InmoDemo/);
  });

  test('debe mostrar el buscador principal', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('InmoDemo');
  });

  test('debe mostrar sección de destacados', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-testid="featured-properties"]')).toBeVisible();
  });
});

test.describe('Test de funcionalidad de búsqueda', () => {
  test('debe permitir buscar propiedades', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que el buscador esté presente
    const searchInput = page.locator('[data-testid="search-input"]');
    await expect(searchInput).toBeVisible();
    
    // Probar búsqueda con texto
    await searchInput.fill('casa');
    await expect(searchInput).toHaveValue('casa');
  });
});

test.describe('Test de formulario de contacto', () => {
  test('debe mostrar formulario de contacto', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que el formulario esté presente
    const contactForm = page.locator('[data-testid="contact-form"]');
    await expect(contactForm).toBeVisible();
  });
});