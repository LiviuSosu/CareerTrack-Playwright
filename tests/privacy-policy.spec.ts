import { test, expect } from '@playwright/test';
import { HomePageUrl, PrivacyPolicyUrl } from './helpers';

test('when the "here" link from the cookies banner is clicked it is redirected to /privacy-policy', async ({ page }) => {
    await page.goto(HomePageUrl);
    await page.waitForURL(HomePageUrl);
    await expect(page.getByText('here')).toBeVisible();
    await page.getByText('here').click();

    await page.waitForURL(PrivacyPolicyUrl);
    await expect(page.getByText('privacy policy')).toBeVisible();
})