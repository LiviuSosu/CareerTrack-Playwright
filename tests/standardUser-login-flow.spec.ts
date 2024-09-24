import { test, expect } from '@playwright/test';
import { ProfilePageUrl, LoginPageUrl, HomePageUrl, UserManagementUrl } from './utils/urls';
import { EmailLabel, PasswordLabel, StandardUserEmail, StandardUserPassword, LoginButtonName } from './utils/constants';

test('when succesfull login the profile page is displayed', async ({ page }) => {

    await page.goto(ProfilePageUrl);
    await page.waitForURL(LoginPageUrl);
    await expect(page.getByRole('button', { name: LoginButtonName })).toBeVisible();

    await page.goto(LoginPageUrl);

    await page.getByLabel(EmailLabel).fill(StandardUserEmail);
    await page.getByLabel(PasswordLabel).fill(StandardUserPassword);
    await page.getByRole('button', { name: LoginButtonName }).click();

    await page.waitForURL(HomePageUrl);

    await expect(page.getByRole('paragraph')).toContainText("home page");

    await page.goto(ProfilePageUrl);

    await expect(page.getByRole('heading')).toContainText("profile Page");

    await page.goto(UserManagementUrl);
    await expect(page.getByRole('button', { name: LoginButtonName })).toBeVisible()
})