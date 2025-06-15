import { test, expect } from '@playwright/test';

test.describe('beksar-yernar Website Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://beksar-yernar.web.app/');
    await page.waitForLoadState('networkidle');
  });

  test('should have correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Login');
  });

  test('should have all headings', async ({ page }) => {
    
  });

  test('should have working navigation links', async ({ page }) => {
    
  });

  test('should have all buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: '󰖙' })).toBeVisible();
    await expect(page.getByRole('button', { name: '󰇮' })).toBeVisible();
    await expect(page.getByRole('button', { name: '󰌾' })).toBeVisible();
    await expect(page.getByRole('button', { name: '󰈉' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'ВХОД' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' })).toBeVisible();
  });

  test('should have all images', async ({ page }) => {
    await expect(page.locator('img[alt=""]')).toBeVisible();
  });

  test('should have all forms', async ({ page }) => {
    
  });

  test('should have all inputs', async ({ page }) => {
    await expect(page.locator('input[name="null"]')).toBeVisible();
    await expect(page.locator('input[name="null"]')).toBeVisible();
  });
});