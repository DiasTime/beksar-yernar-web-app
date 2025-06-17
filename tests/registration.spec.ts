import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

function getNextCounter(): number {
  const counterFile = path.join(__dirname, 'email-counter.json');
  let counter = 1;
    try {
    if (fs.existsSync(counterFile)) {
      const data = JSON.parse(fs.readFileSync(counterFile, 'utf8'));
      counter = data.counter || 1;
    }
  } catch (error) {
    console.log('Counter file not found or invalid, starting from 1');
  }
    const nextCounter = counter + 1;
    try {
    fs.writeFileSync(counterFile, JSON.stringify({ counter: nextCounter }));
  } catch (error) {
    console.log('Could not save counter file');
  }
    return counter;
}
function generateUniqueEmail(browserName: string): string {
  const counter = getNextCounter();
  const emails = {
    'chromium': `dias.u.tester${counter}@gmail.com`,
    'firefox': `dias.u.tester${counter}@gmail.com`, 
    'webkit': `dias.u.tester${counter}@gmail.com`
  };
  return emails[browserName as keyof typeof emails] || `dias.u.tester${counter}@gmail.com`;
}

test('text vidimost', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.screenshot({ fullPage: true });  
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await page.screenshot({ fullPage: true });
    await expect(page.locator('#root')).toContainText('Данные руководителя');
  await expect(page.locator('#root')).toContainText('Данные организации');
  await expect(page.locator('#root')).toContainText('ЗАРЕГИСТРИРОВАТЬСЯ');
  await expect(page.locator('#root')).toContainText('ГородГород󰅆󰅀');
  await expect(page.locator('#root')).toContainText('НишаНиша󰃖󰅀');
    await page.screenshot({ fullPage: true });
});

test('is clickable', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.screenshot({ fullPage: true });
    await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await page.screenshot({ fullPage: true });
    await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ИмяИмя󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ОтчествоОтчество󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('input[type="email"]').nth(1).click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^Повторите парольПовторите пароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^НишаНиша󰃖󰅀$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Обувь$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^ГородГород󰅆󰅀$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Актау$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Название организацииНазвание организации󰦑$/ }).getByTestId('text-input-outlined').click();
  
  await page.screenshot({ fullPage: true });
    await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬСЯ' }).click();
  await page.getByRole('button').filter({ hasText: '󰦑' }).click();
  await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('left-icon-adornment').click();
  await page.locator('div').filter({ hasText: /^ИмяИмя󰀄$/ }).getByTestId('left-icon-adornment').click();
  await page.locator('div').filter({ hasText: /^ОтчествоОтчество󰀄$/ }).getByTestId('left-icon-adornment').click();
  await page.getByRole('button').filter({ hasText: '󰇮' }).click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('left-icon-adornment').click();
  await page.locator('div').filter({ hasText: /^Повторите парольПовторите пароль󰌾󰈉$/ }).getByTestId('left-icon-adornment').click();
  await page.getByRole('button').filter({ hasText: '󰃖' }).click();
  await page.getByRole('button').filter({ hasText: '󰅆' }).click();
  await page.getByRole('button').filter({ hasText: '󰦑' }).click();
    await page.screenshot({ fullPage: true });
});

test('registration', async ({ page, browserName }) => {
  // Генерируем уникальный email для текущего браузера
  const uniqueEmail = generateUniqueEmail(browserName);
  console.log(`Using email for ${browserName}: ${uniqueEmail}`);
  
  await page.goto('https://beksar-yernar.web.app/');
  await page.screenshot({ fullPage: true });
    await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await page.screenshot({ fullPage: true });
    await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('text-input-outlined').fill('');
  await page.locator('.css-175oi2r.r-13awgt0.r-e65kyq').click();
  await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ФамилияФамилия󰀄$/ }).getByTestId('text-input-outlined').fill('тестовая фамилия');
  await page.locator('div').filter({ hasText: /^ИмяИмя󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ИмяИмя󰀄$/ }).getByTestId('text-input-outlined').fill('тестовое имя');
  await page.locator('div').filter({ hasText: /^ОтчествоОтчество󰀄$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ОтчествоОтчество󰀄$/ }).getByTestId('text-input-outlined').fill('тестовое отчество');
  await page.locator('input[type="email"]').nth(1).click();
  await page.locator('input[type="email"]').nth(1).fill(uniqueEmail);
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').fill('Qweasd');
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').fill('Qweasdzxc');
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('text-input-outlined').fill('Qweasdzxcqw13d#');
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈉$/ }).getByTestId('right-icon-adornment').click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈈$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈈$/ }).getByTestId('text-input-outlined').press('ControlOrMeta+a');
  await page.locator('div').filter({ hasText: /^ПарольПароль󰌾󰈈$/ }).getByTestId('text-input-outlined').press('ControlOrMeta+c');
  await page.locator('div').filter({ hasText: /^Повторите парольПовторите пароль󰌾󰈉$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^Повторите парольПовторите пароль󰌾󰈉$/ }).getByTestId('text-input-outlined').fill('Qweasdzxcqw13d#');
  await page.locator('div').filter({ hasText: /^Название организацииНазвание организации󰦑$/ }).getByTestId('text-input-outlined').click();
  await page.locator('div').filter({ hasText: /^Название организацииНазвание организации󰦑$/ }).getByTestId('text-input-outlined').fill('testing comp');
  await page.locator('div').filter({ hasText: /^ГородГород󰅆󰅀$/ }).first().click();
  await page.getByText('Астана').click();
  await page.locator('div').filter({ hasText: /^НишаНиша󰃖󰅀$/ }).first().click();
  await page.getByText('Фастфуд и кафе').click();
    await page.screenshot({ fullPage: true });
    await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬСЯ' }).click();
  
  // Проверка на успешную регистрацию по всему DOM
  await expect(page.locator('body')).toContainText('Регистрация успешно завершена', { timeout: 10000 });
    await page.screenshot({ fullPage: true });
    try {
    await expect(page.locator('.Toastify')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.Toastify')).toContainText('Регистрация успешно завершена');
  } catch (error) {
    console.log('Toastify container not visible, but success message found');
  }
    await page.screenshot({ fullPage: true });
});
