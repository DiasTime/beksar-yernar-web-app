import { test, expect } from '@playwright/test';

test('text vidimost', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
  await expect(page.locator('#root')).toContainText('Данные руководителя');
  await expect(page.locator('#root')).toContainText('Данные организации');
  await expect(page.locator('#root')).toContainText('ЗАРЕГИСТРИРОВАТЬСЯ');
  await expect(page.locator('#root')).toContainText('ГородГород󰅆󰅀');
  await expect(page.locator('#root')).toContainText('НишаНиша󰃖󰅀');
});

test('is clickable', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
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
});

test('registration', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ' }).click();
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
  await page.locator('input[type="email"]').nth(1).fill('diastester@gmail.com');
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
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬСЯ' }).click();
  
  // Check for success popup message
  await expect(page.getByText('Регистрация успешно завершена')).toBeVisible();
});


  //                                            