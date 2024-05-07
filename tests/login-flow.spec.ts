import { test, expect } from '@playwright/test';

test('when accessing the profile page unautentificated then redirect to login and to find the Login button', async ({ page }) => {
    await page.goto('http://localhost:3000/pages/profile');
  
    let loginButton = await page.getByRole('button', { name: 'Login' });
    
    await expect(loginButton).toBeVisible();
  });

  test('when succesfull login the profile page is displayed', async ({ page }) => {

    await page.goto('http://localhost:3000/pages/profile');
    await page.waitForURL('http://localhost:3000/pages/login');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    await page.goto('http://localhost:3000/pages/login');
  
    await page.getByLabel('User name').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('Password@123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.waitForURL('http://localhost:3000/pages/home');

    await expect(page.getByRole('paragraph')).toContainText("home Page");

    await page.goto('http://localhost:3000/pages/profile');

    await expect(page.getByRole('heading')).toContainText("profile Page");

    // await page.getByRole('link', { name: 'logout' }).click();

    // await page.waitForURL('http://localhost:3000/pages/home');
    //
  });