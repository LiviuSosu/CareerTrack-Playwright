import { test, expect } from '@playwright/test';
import { ProfilePageUrl, LoginPageUrl, HomePageUrl, UserManagementUrl } from './utils/urls';

test('when accessing the profile page unautentificated then redirect to login and to find the Login button', async ({ page }) => {
  await page.goto(ProfilePageUrl);

  let loginButton = await page.getByRole('button', { name: 'Login' });

  await expect(loginButton).toBeVisible();
});

test('when succesfull login the profile page is displayed', async ({ page }) => {

  await page.goto(ProfilePageUrl);
  await page.waitForURL(LoginPageUrl);
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  await page.goto(LoginPageUrl);

  await page.getByLabel('Email').fill('admin@gmail.com');
  await page.getByLabel('Password').fill('Password@123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(HomePageUrl);

  await expect(page.getByRole('paragraph')).toContainText("home page");

  await page.goto(ProfilePageUrl);

  await expect(page.getByRole('heading')).toContainText("profile Page");

  await page.goto(UserManagementUrl);
  await expect(page.getByTestId('spinner')).toBeVisible();

  await page.waitForURL(UserManagementUrl);
  await expect(page.getByRole('table')).toBeVisible();
});