import { test, expect } from '@playwright/test';
import { LoginPageUrl } from './utils/urls';
import { EmailLabel, PasswordLabel, StandardUserEmail, LoginButtonName } from './utils/constants';

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
    await page.getByLabel(EmailLabel).fill(StandardUserEmail);
    await page.getByLabel(PasswordLabel).fill('wrong password');
    await page.getByRole('button', { name: LoginButtonName }).click();
    await page.waitForURL(LoginPageUrl);
}