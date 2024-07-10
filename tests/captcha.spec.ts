import { test, expect } from '@playwright/test';
import { LoginPageUrl } from './helpers';

test('when login fails 5 times in a row, captcha button is being shown', async ({ page }) => {
    await page.goto(LoginPageUrl);

    await failLogion({ page });
    await failLogion({ page });
    await failLogion({ page });
    await failLogion({ page });
    await failLogion({ page });

    await expect(page.getByRole('button', { name: 'Submit captcha' })).toBeVisible();
});

async function failLogion({ page }) {
    await page.getByLabel('Email').fill('stdandardUser@gmail.com');
    await page.getByLabel('Password').fill('wrong password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL(LoginPageUrl);
}