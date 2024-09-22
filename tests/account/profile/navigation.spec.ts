import { test, expect } from '@playwright/test';
import { ProfilePageUrl, AccountProfileMe, AccountProfileChnagePassword, LoginPageUrl, HomePageUrl } from '../../helpers';

test('navigation words', async ({ page }) => {

    await page.goto(LoginPageUrl);

    await page.getByLabel('Email').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('Password@123');
    await page.getByRole('button', { name: 'Login' }).click();
  
    await page.waitForURL(HomePageUrl);
  
    await expect(page.getByRole('paragraph')).toContainText("home page");


    await page.goto(ProfilePageUrl);

    const locator = await page.getByTestId("profileMeLink") //get('profileMeLink');
    await expect(locator).toHaveClass('nav-link active');
})