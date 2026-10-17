import { test, expect } from '@playwright/test';

test.describe('Test de navegación entre páginas', () => {
  test('debe permitir navegar desde la página de inicio a la lista de propiedades', async ({ page }) => {
    await page.goto('/');
    
    // Encontrar el enlace a la lista de propiedades
    const propertiesLink = page.locator('a[href="/properties"]');
    await expect(propertiesLink).toBeVisible();
    
    // Hacer clic en el enlace
    await propertiesLink.click();
    
    // Verificar que se haya navegado a la página correcta
    await expect(page).toHaveURL('/properties');
    await expect(page.locator('h1')).toContainText('Nuestras Propiedades');
  });

  test('debe permitir navegar desde la página de inicio al mapa de propiedades', async ({ page }) => {
    await page.goto('/');
    
    // Encontrar el enlace al mapa de propiedades
    const mapLink = page.locator('a[href="/map"]');
    await expect(mapLink).toBeVisible();
    
    // Hacer clic en el enlace
    await mapLink.click();
    
    // Verificar que se haya navegado a la página correcta
    await expect(page).toHaveURL('/map');
    await expect(page.locator('h1')).toContainText('Propiedades en el Mapa');
  });

  test('debe permitir navegar desde la lista de propiedades al detalle de una propiedad', async ({ page }) => {
    await page.goto('/properties');
    
    // Encontrar un botón de "Ver detalles" en una propiedad
    const detailButton = page.locator('[data-testid="property-detail-button"]').first();
    await expect(detailButton).toBeVisible();
    
    // Hacer clic en el botón
    await detailButton.click();
    
    // Verificar que se haya navegado a la página de detalle
    await expect(page).toHaveURL(/\/property\//);
  });
});