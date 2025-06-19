import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://beksar-yernar.web.app/');
  await page.locator('input[type="email"]').click();   //нужно каждый раз менять здесь цифру
    await page.locator('input[type="email"]').fill('dias.u.tester7@gmail.com');
    await page.locator('input[type="password"]').click();
    await page.locator('input[type="password"]').fill('Qweasdzxcqw13d#');
    await page.getByRole('button', { name: 'ВХОД' }).click();
  await page.getByRole('button', { name: 'Администрирование' }).click();
  await page.locator('div').filter({ hasText: /^СотрудникиУправление сотрудниками$/ }).first().click();
  await page.getByRole('button', { name: 'Добавить сотрудника' }).click();
  await page.locator('.css-11aywtz').first().click();
  await page.locator('.css-11aywtz').first().fill('тестф');
  await page.locator('div:nth-child(3) > div > .css-175oi2r.r-16y2uox > .css-11aywtz').click();
  await page.locator('div:nth-child(3) > div > .css-175oi2r.r-16y2uox > .css-11aywtz').fill('тести');
  await page.locator('div:nth-child(4) > div > .css-175oi2r.r-16y2uox > .css-11aywtz').click();
  await page.locator('div:nth-child(4) > div > .css-175oi2r.r-16y2uox > .css-11aywtz').fill('тесто');
  await page.locator('div').filter({ hasText: /^ИИН \*ИИН \*Дата рождения \*Дата рождения \*󰃭$/ }).getByTestId('text-input-outlined').first().click();
  await page.locator('div').filter({ hasText: /^ИИН \*ИИН \*Дата рождения \*Дата рождения \*󰃭$/ }).getByTestId('text-input-outlined').first().fill('123456789446');
  await page.locator('div').filter({ hasText: /^Дата рождения \*Дата рождения \*󰃭$/ }).nth(1).click();
  await page.getByRole('button', { name: 'typeInDate' }).click();
  await page.getByTestId('text-input-flat').fill('05.06.1999');
  await page.getByTestId('react-native-paper-dates-save').click();
  await page.locator('div').filter({ hasText: /^Должность \*Должность \*󰅀$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Кассир$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Тип документа \*Тип документа \*󰅀$/ }).nth(1).click();
  await page.getByText('Водительское удостоверение').click();
  await page.locator('div:nth-child(8) > div:nth-child(2) > .css-175oi2r.r-1i6wzkk').click();
  await page.getByRole('button', { name: 'июнь' }).click();
  await page.getByRole('button', { name: '1998' }).click();
  await page.getByTestId('react-native-paper-dates-day-1998-5-9').click();
  await page.getByTestId('react-native-paper-dates-save').click();
  await page.locator('div').filter({ hasText: /^Номер документа \*Номер документа \*Орган выдачи \*Орган выдачи \*󰅀$/ }).getByTestId('text-input-outlined').first().click();
  await page.locator('div').filter({ hasText: /^Номер документа \*Номер документа \*Орган выдачи \*Орган выдачи \*󰅀$/ }).getByTestId('text-input-outlined').first().fill('987654321');
  await page.locator('div').filter({ hasText: /^Орган выдачи \*Орган выдачи \*󰅀$/ }).nth(1).click();
  await page.getByText('МЮ РК').click();
  await page.locator('div').filter({ hasText: /^Комиссия \(%\) \*Комиссия \(%\) \*Оклад \*Оклад \*$/ }).getByTestId('text-input-outlined').first().click();
  await page.locator('div').filter({ hasText: /^Комиссия \(%\) \*Комиссия \(%\) \*Оклад \*Оклад \*$/ }).getByTestId('text-input-outlined').first().fill('30');
  await page.locator('div').filter({ hasText: /^Комиссия \(%\) \*Комиссия \(%\) \*Оклад \*Оклад \*$/ }).getByTestId('text-input-outlined').nth(1).click();
  await page.locator('div').filter({ hasText: /^Комиссия \(%\) \*Комиссия \(%\) \*Оклад \*Оклад \*$/ }).getByTestId('text-input-outlined').nth(1).fill('150000');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('dias.tester85@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('684gg65s4#FFF2');
  await page.screenshot({ fullPage: true });
  await page.getByRole('button', { name: 'Далее' }).click();
  await page.getByRole('button', { name: 'Добавить роль' }).click();
  await page.locator('.css-175oi2r.r-1otgn73.r-1loqt21.r-bnwqim.r-ctqt5z.r-11f147o.r-11g3r6m.r-1qhn6m8').click();
  await page.getByRole('button', { name: 'Сохранить' }).click();
  await expect(page.locator('body')).toContainText('Сотрудник успешно создан', { timeout: 10000 });
  await expect(page.locator('#root')).toContainText('тестф тести тесто', { timeout: 10000 });
  await expect(page.locator('#root')).toContainText('Активен', { timeout: 10000 });

  
  await page.screenshot({ fullPage: true });
});
