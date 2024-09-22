import { test, expect } from '@playwright/test';
import { ProfilePageUrl, LoginPageUrl, HomePageUrl } from '../../utils/urls';

test('navigation words', async ({ page }) => {
    await page.goto(LoginPageUrl);

    await page.getByLabel('Email').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('Password@123');
    await page.getByRole('button', { name: 'Login' }).click();
  
    await page.waitForURL(HomePageUrl);
  
    await expect(page.getByRole('paragraph')).toContainText("home page");

    await page.goto(ProfilePageUrl);

    const locatorProfileMe = await page.getByTestId("profileMeNavigationItem");
    await expect(locatorProfileMe).toHaveClass('nav-link active');
    const locatorChangePassword = await page.getByTestId("changePasswordNavigationItem");
    await expect(locatorChangePassword).toHaveClass('nav-link link-dark');
})