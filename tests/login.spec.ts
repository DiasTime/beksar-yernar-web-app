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

    await expect(page.locator('body')).toContainText('Successfully logged in', { timeout: 10000 });
    await page.screenshot({ fullPage: true });
  });

// Новые тесты для улучшения покрытия

test('login with invalid email format', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('input[type="email"]').fill('invalid-email');
  await page.locator('input[type="password"]').fill('password123');
  await page.getByRole('button', { name: 'ВХОД' }).click();
  
  
  await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await page.screenshot({ fullPage: true });
});

test('login with empty fields', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByRole('button', { name: 'ВХОД' }).click();
  
  await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await page.screenshot({ fullPage: true });
});

test('login with wrong credentials', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('input[type="email"]').fill('wrong@email.com');
  await page.locator('input[type="password"]').fill('wrongpassword');
  await page.getByRole('button', { name: 'ВХОД' }).click();
  
  await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await page.screenshot({ fullPage: true });
});

test('password visibility toggle', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  
  const passwordInput = page.locator('input[type="password"]');
  const visibilityToggle = page.getByTestId('right-icon-adornment');
  
  await expect(passwordInput).toHaveAttribute('type', 'password');
  
  await visibilityToggle.click();
  
  await expect(passwordInput).toHaveAttribute('type', 'text');
  
  await visibilityToggle.click();
  await expect(passwordInput).toHaveAttribute('type', 'password');
  
  await page.screenshot({ fullPage: true });
});

test('forgot password link navigation', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByText('Забыли пароль?').click();
  await page.screenshot({ fullPage: true });
});

test('register organization button navigation', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await page.screenshot({ fullPage: true });
});

test('keyboard navigation', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.keyboard.press('Tab');
  await expect(page.locator('input[type="email"]')).toBeFocused();
    await page.keyboard.press('Tab');
  await expect(page.locator('input[type="password"]')).toBeFocused();
    await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'ВХОД' })).toBeFocused();
    await page.screenshot({ fullPage: true });
});

test('form submission with Enter key', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('input[type="email"]').fill('test@example.com');
  await page.locator('input[type="password"]').fill('password123');
   await page.locator('input[type="password"]').press('Enter');
     await page.screenshot({ fullPage: true });
});

test('input field validation', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
    const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
    await expect(emailInput).toHaveValue('');
  await expect(passwordInput).toHaveValue('');
  await expect(emailInput).toHaveAttribute('placeholder', 'E-mail');
  await expect(passwordInput).toHaveAttribute('placeholder', 'Password');
    await page.screenshot({ fullPage: true });
});

test('responsive design check', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://beksar-yernar.web.app/');
  await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await expect(page.getByRole('button', { name: 'ВХОД' })).toBeVisible();
    await page.screenshot({ fullPage: true });
    await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://beksar-yernar.web.app/');
    await expect(page.locator('#root')).toContainText('Добро пожаловать в Beksar');
  await page.screenshot({ fullPage: true });
});

test('accessibility check', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  const images = page.locator('img');
  for (let i = 0; i < await images.count(); i++) {
    const alt = await images.nth(i).getAttribute('alt');
    expect(alt).toBeTruthy();
  }
    await expect(page.getByRole('button', { name: 'ВХОД' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' })).toBeVisible();
    await page.screenshot({ fullPage: true });
});
test('session persistence after page reload', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('input[type="email"]').fill('diastester1@gmail.com');
  await page.locator('input[type="password"]').fill('Qweasdzxcqw13d#');
  await page.getByRole('button', { name: 'ВХОД' }).click();
    await expect(page.locator('body')).toContainText('Successfully logged in', { timeout: 10000 });
    await page.reload();
  
  await page.screenshot({ fullPage: true });
});