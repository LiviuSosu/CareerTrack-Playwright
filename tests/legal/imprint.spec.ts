import { test, expect } from '@playwright/test';
import { ImprintUrl } from '../utils/urls';

test('Terms of use displays the correct content', async ({ page }) => {
    await page.goto(ImprintUrl);
    await expect(page.getByRole('heading', { name: 'Imprint' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Career Track' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'contact@career-track.com' })).toBeVisible();
})