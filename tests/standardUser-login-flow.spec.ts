import { test, expect } from '@playwright/test';
import { ProfilePageUrl, LoginPageUrl, HomePageUrl, UserManagementUrl } from './helpers';

test('when succesfull login the profile page is displayed', async ({ page }) => {

    await page.goto(ProfilePageUrl);
    await page.waitForURL(LoginPageUrl);
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    await page.goto(LoginPageUrl);

    await page.getByLabel('Email').fill('stdandardUser@gmail.com');
    await page.getByLabel('Password').fill('StdPassword@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL(HomePageUrl);

    await expect(page.getByRole('paragraph')).toContainText("home Page");

    await page.goto(ProfilePageUrl);

    await expect(page.getByRole('heading')).toContainText("profile Page");

    await page.goto(UserManagementUrl);
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
})