import { test, expect } from '@playwright/test';

test.describe('Test de la página de mapa de propiedades', () => {
  test('debe cargar la página de mapa de propiedades correctamente', async ({ page }) => {
    await page.goto('/map');
    await expect(page).toHaveTitle(/InmoDemo/);
    
    // Verificar que se muestre el título de la página
    await expect(page.locator('h1')).toContainText('Propiedades en el Mapa');
    
    // Verificar que se muestre el mapa
    await expect(page.locator('[data-testid="property-map"]')).toBeVisible();
    
    // Verificar que se muestren las propiedades en el listado
    await expect(page.locator('[data-testid="property-list-item"]')).toBeVisible();
  });

  test('debe permitir seleccionar una propiedad del mapa', async ({ page }) => {
    await page.goto('/map');
    
    // Verificar que haya marcadores de propiedad
    const markers = page.locator('[data-testid="property-marker"]');
    await expect(markers).toBeVisible();
    
    // Seleccionar la primera propiedad
    const firstMarker = markers.first();
    await firstMarker.click();
    
    // Verificar que se muestre la información de la propiedad seleccionada
    await expect(page.locator('[data-testid="selected-property-info"]')).toBeVisible();
  });

  test('debe permitir seleccionar una propiedad del listado', async ({ page }) => {
    await page.goto('/map');
    
    // Verificar que haya elementos en el listado
    const propertyItems = page.locator('[data-testid="property-list-item"]');
    await expect(propertyItems).toBeVisible();
    
    // Seleccionar la primera propiedad del listado
    const firstProperty = propertyItems.first();
    await firstProperty.click();
    
    // Verificar que se muestre la información de la propiedad seleccionada
    await expect(page.locator('[data-testid="selected-property-info"]')).toBeVisible();
  });
});