import { test, expect } from '@playwright/test';

test('text visible', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await expect(page.locator('#root')).toContainText('Забыли пароль?');
  await expect(page.locator('#root')).toContainText('ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ');
  await expect(page.locator('#root')).toContainText('E-mailE-mail󰇮PasswordPassword󰌾󰈉Забыли пароль?ВХОДЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ');
  await expect(page.locator('#root')).toContainText('ВХОД');
  await page.screenshot({ fullPage: true });
});


test('is clickable', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('img').click();
  await page.getByText('Добро пожаловать в Beksar').click();
  await page.getByRole('button').filter({ hasText: '󰇮' }).click();
  await page.locator('input[type="email"]').click();
  await page.getByRole('button').filter({ hasText: '󰌾' }).click();
  await page.locator('input[type="password"]').click();
  await page.getByTestId('right-icon-adornment').click();
  await page.getByTestId('right-icon-adornment').click();
  await page.getByText('Забыли пароль?').click();
  await page.getByTestId('appbar-header').getByTestId('icon-button').click();
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await page.getByRole('link', { name: 'Login, back' }).click();
  await page.screenshot({ fullPage: true });
});

test('login', async ({ page }) => {
    await page.goto('https://beksar-yernar.web.app/');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('diastester1@gmail.com');
    await page.locator('input[type="password"]').click();
    await page.locator('input[type="password"]').fill('Qweasdzxcqw13d#');
    await page.getByRole('button', { name: 'ВХОД' }).click();
    await page.screenshot({ fullPage: true });

    await expect(page.locator('body')).toContainText('Successfully logged in', { timeout: 10000 });
    await expect(page.locator('#root')).toContainText('Главная', { timeout: 10000 });
    await page.screenshot({ fullPage: true });
  });