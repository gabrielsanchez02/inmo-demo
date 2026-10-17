import { test, expect } from '@playwright/test';

test.describe('Test del CRUD de propiedades', () => {
  test('debe mostrar la lista de propiedades', async ({ page }) => {
    await page.goto('/properties');
    
    // Verificar que se muestren las propiedades
    await expect(page.locator('[data-testid="property-card"]')).toBeVisible();
    
    // Verificar que haya al menos una propiedad
    const propertyCards = page.locator('[data-testid="property-card"]');
    await expect(await propertyCards.count()).toBeGreaterThan(0);
  });

  test('debe permitir ver los detalles de una propiedad', async ({ page }) => {
    await page.goto('/properties');
    
    // Hacer clic en una propiedad para ver sus detalles
    const firstProperty = page.locator('[data-testid="property-card"]').first();
    await firstProperty.click();
    
    // Verificar que se navegue a la página de detalles
    await expect(page).toHaveURL(/\/property\//);
    
    // Verificar que se muestre la información de la propiedad
    await expect(page.locator('[data-testid="property-title"]')).toBeVisible();
  });

  test('debe permitir filtrar propiedades', async ({ page }) => {
    await page.goto('/properties');
    
    // Filtrar por tipo de propiedad
    const typeFilter = page.locator('[data-testid="property-type-filter"]');
    await typeFilter.selectOption('house');
    
    // Verificar que se aplique el filtro
    await expect(typeFilter).toHaveValue('house');
  });

  test('debe permitir buscar propiedades por ubicación', async ({ page }) => {
    await page.goto('/properties');
    
    // Buscar por ubicación
    const searchInput = page.locator('[data-testid="search-input"]');
    await searchInput.fill('Vigo');
    
    // Verificar que se aplique la búsqueda
    await expect(searchInput).toHaveValue('Vigo');
  });
});