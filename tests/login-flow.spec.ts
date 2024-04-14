import { test, expect } from '@playwright/test';

test('when accessing the profile page unautentificated then redirect to login', async ({ page }) => {
    await page.goto('http://localhost:3000/pages/profile');
  
    let loginButton = await page.getByRole('button', { name: 'Login2' });
    
    await expect(loginButton).toBeVisible();
  });