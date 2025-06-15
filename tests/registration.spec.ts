import { test, expect } from '@playwright/test';

test.describe('Тесты формы регистрации организации', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    
    console.log('Starting navigation to the main page...');
    await page.goto('https://beksar-yernar.web.app/', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    console.log('Main page loaded');
    
    await page.waitForLoadState('domcontentloaded');
    console.log('DOM content loaded');
    
    const registerButton = page.locator('button:has-text("ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ")');
    console.log('Waiting for register button...');
    await registerButton.waitFor({ state: 'visible', timeout: 30000 });
    console.log('Register button found, clicking...');
    
    await page.screenshot({ path: 'before-click.png' });
    await registerButton.click({ timeout: 10000 });
    console.log('Register button clicked');
    
    console.log('Waiting for registration form...');
    await page.waitForLoadState('networkidle');

    // Диагностика: вывести все найденные инпуты и их видимость
    const allInputs = await page.locator('input').all();
    for (const [i, input] of allInputs.entries()) {
      const visible = await input.isVisible();
      const html = await input.evaluate(el => el.outerHTML);
      console.log(`Input #${i}: visible=${visible}, html=${html}`);
    }
    
    // Ждем появления первого видимого поля ввода
    const firstVisibleInput = page.locator('input:visible').first();
    console.log('Waiting for first visible input field...');
    await firstVisibleInput.waitFor({ state: 'visible', timeout: 30000 });
    console.log('First visible input field found, test can proceed');
    
    await page.screenshot({ path: 'after-form-load.png' });
  });

  test('1. Проверка отображения формы регистрации', async ({ page }) => {
    await page.screenshot({ path: 'registration-form.png' });

    // Проверяем, что на форме есть ровно 9 видимых инпутов с data-testid
    const visibleInputs = page.locator('input[data-testid="text-input-outlined"]:visible');
    await expect(visibleInputs).toHaveCount(9, { timeout: 10000 });
    for (let i = 0; i < 9; i++) {
      await expect(visibleInputs.nth(i)).toBeVisible({ timeout: 10000 });
    }

    // Проверяем выпадающие списки через их <input> с нужным value
    await expect(page.locator('input[data-testid="text-input-outlined"][value="Выберите город"]')).toBeVisible();
    await expect(page.locator('input[data-testid="text-input-outlined"][value="Выберите нишу"]')).toBeVisible();

    // Проверяем кнопку регистрации
    await expect(page.locator('button:has-text("ЗАРЕГИСТРИРОВАТЬСЯ")')).toBeVisible();
  });

  test('Поиск поля "Фамилия" всеми способами', async ({ page }) => {
    // Все возможные варианты поиска поля
    const selectors = [
      'input[data-testid="text-input-outlined"]',
      'input[class*="css-11aywtz"]',
      'input[style*="height: 48px"]',
      'input[style*="font-family: Nunito-Bold"]',
      'input[style*="color: rgb(21, 26, 48)"]',
      'input[style*="min-width: 65px"]',
      'input[style*="margin-left: 56px"]',
      'input[style*="--placeholderTextColor: transparent"]'
    ];

    for (const selector of selectors) {
      console.log(`Пробуем селектор: ${selector}`);
      try {
        const fields = await page.locator(selector).all();
        for (const field of fields) {
          const placeholder = await field.evaluate(el => el.getAttribute('placeholder'));
          if (placeholder === 'Фамилия') {
            console.log(`Успех! Нашли поле с селектором: ${selector}`);
            await field.highlight();
            await page.screenshot({ path: `found-field-${selector.replace(/[^a-z]/gi, '')}.png` });
            await field.fill('ТестоваяФамилия');
            return;
          }
        }
        console.log(`Селектор ${selector} нашел поля, но не нашел placeholder "Фамилия"`);
      } catch (error) {
        console.log(`Селектор ${selector} не сработал`);
      }
    }

    // Если не нашли по селекторам, попробуем найти по тексту рядом
    try {
      const fields = await page.locator('input[data-testid="text-input-outlined"]').all();
      for (const field of fields) {
        const parent = await field.evaluateHandle(el => el.parentElement);
        const text = await parent.evaluate(el => el?.textContent || '');
        if (text && text.includes('Фамилия')) {
          console.log('Успех! Нашли поле по тексту рядом');
          await field.highlight();
          await page.screenshot({ path: 'found-field-by-text.png' });
          await field.fill('ТестоваяФамилия');
          return;
        }
      }
    } catch (error) {
      console.log('Поиск по тексту рядом не сработал');
    }

    throw new Error('Не удалось найти поле "Фамилия" ни одним из способов');
  });

  test('Визуальная проверка формы', async ({ page }) => {
    // Проверяем видимость формы через сравнение со скриншотом
    try {
      await expect(page.locator('body')).toHaveScreenshot('registration-form-visual.png', {
        maxDiffPixels: 100,
        threshold: 0.2,
        animations: 'disabled'
      });
    } catch (error) {
      if (error.message.includes("doesn't exist")) {
        console.log('Создан новый снапшот для визуальной проверки');
      } else {
        throw error;
      }
    }
  });
});