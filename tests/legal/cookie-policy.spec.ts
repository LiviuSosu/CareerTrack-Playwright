import { test, expect } from '@playwright/test';
import { CookiePolicyUrl } from '../utils/urls';

test('Cookie policy displays the correct content', async ({ page }) => {
    await page.goto(CookiePolicyUrl);
    await expect(page.getByRole('heading', { name: 'Cookie management overview' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What is a cookie?' })).toBeVisible();
})