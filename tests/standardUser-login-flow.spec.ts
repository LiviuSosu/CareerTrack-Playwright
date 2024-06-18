import { test, expect } from '@playwright/test';
import 'dotenv/config'

//TODO: pull the url in a config file
test('when succesfull login the profile page is displayed', async ({ page }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(process.env) 
    console.log("aici vine numele mediului: "+apiUrl)

    await page.goto('http://localhost:3000/pages/profile');
    await page.waitForURL('http://localhost:3000/pages/login');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    await page.goto('http://localhost:3000/pages/login');

    await page.getByLabel('Email').fill('stdandardUser@gmail.com');
    await page.getByLabel('Password').fill('StdPassword@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL('http://localhost:3000/pages/home');

    await expect(page.getByRole('paragraph')).toContainText("home Page");

    await page.goto('http://localhost:3000/pages/profile');

    await expect(page.getByRole('heading')).toContainText("profile Page");

    await page.goto('http://localhost:3000/pages/user-management');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()

})