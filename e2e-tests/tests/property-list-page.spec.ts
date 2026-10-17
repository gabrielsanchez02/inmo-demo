import { test, expect } from '@playwright/test';

test.describe('Test de la página de listado de propiedades', () => {
  test('debe cargar la página de listado de propiedades correctamente', async ({ page }) => {
    await page.goto('/properties');
    await expect(page).toHaveTitle(/InmoDemo/);
    
    // Verificar que se muestre el título de la página
    await expect(page.locator('h1')).toContainText('Nuestras Propiedades');
    
    // Verificar que se muestren las propiedades
    await expect(page.locator('[data-testid="property-card"]')).toBeVisible();
  });

  test('debe permitir filtrar propiedades por tipo', async ({ page }) => {
    await page.goto('/properties');
    
    // Verificar que el filtro de tipo esté presente
    const typeFilter = page.locator('[data-testid="property-type-filter"]');
    await expect(typeFilter).toBeVisible();
    
    // Probar selección de filtro
    await typeFilter.selectOption('house');
    await expect(typeFilter).toHaveValue('house');
  });

  test('debe permitir filtrar propiedades por operación', async ({ page }) => {
    await page.goto('/properties');
    
    // Verificar que el filtro de operación esté presente
    const operationFilter = page.locator('[data-testid="operation-filter"]');
    await expect(operationFilter).toBeVisible();
    
    // Probar selección de filtro
    await operationFilter.selectOption('sale');
    await expect(operationFilter).toHaveValue('sale');
  });

  test('debe permitir buscar propiedades por ubicación', async ({ page }) => {
    await page.goto('/properties');
    
    // Verificar que el campo de búsqueda esté presente
    const searchInput = page.locator('[data-testid="search-input"]');
    await expect(searchInput).toBeVisible();
    
    // Probar búsqueda con texto
    await searchInput.fill('Vigo');
    await expect(searchInput).toHaveValue('Vigo');
  });
});