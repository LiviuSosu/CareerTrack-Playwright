import { test, expect } from '@playwright/test';
import { NotFoundPageUrl, HomePageUrl } from './helpers';

test('when unknown route is being accessed (page not found) it redirects to home page', async ({ page }) => {
    await page.goto(NotFoundPageUrl);
    await expect(page.getByRole('link', { name: 'Return to home page' })).toBeVisible();

    var returningLink = page.getByRole('link', { name: 'Return to home page' });
    returningLink.click();
    
    await page.waitForURL(HomePageUrl);
    await expect(page.getByText('home page')).toBeVisible();
})