import { test, expect } from '@playwright/test';

test.describe('Test del formulario de contacto', () => {
  test('debe mostrar el formulario de contacto correctamente', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que el formulario esté presente
    const contactForm = page.locator('[data-testid="contact-form"]');
    await expect(contactForm).toBeVisible();
    
    // Verificar que los campos estén presentes
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('debe permitir enviar el formulario de contacto con datos válidos', async ({ page }) => {
    await page.goto('/');
    
    // Rellenar el formulario
    await page.locator('#name').fill('Juan Pérez');
    await page.locator('#email').fill('juan.perez@example.com');
    await page.locator('#phone').fill('654321987');
    await page.locator('#message').fill('Consulta sobre propiedad en Vigo');
    
    // Enviar el formulario
    await page.locator('button[type="submit"]').click();
    
    // Verificar que se muestre el mensaje de éxito
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  });

  test('debe mostrar errores para campos requeridos vacíos', async ({ page }) => {
    await page.goto('/');
    
    // Enviar el formulario sin completar los campos
    await page.locator('button[type="submit"]').click();
    
    // Verificar que se muestren mensajes de error
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
  });
});