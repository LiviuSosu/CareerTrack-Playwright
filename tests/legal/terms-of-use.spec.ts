import { test, expect } from '@playwright/test';
import { TermsOfUseUrl } from '../helpers';

test('Terms of use displays the correct content', async ({ page }) => {
    await page.goto(TermsOfUseUrl);
    await expect(page.getByRole('heading', { name: 'Last updated' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Scope of These Terms of Use' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Your Privacy' })).toBeVisible();
})