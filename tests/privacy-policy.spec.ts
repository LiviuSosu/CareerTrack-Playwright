import { test, expect } from '@playwright/test';
import { HomePageUrl, PrivacyPolicyUrl } from './helpers';

test('when the "here" link from the cookies banner is clicked it is redirected to /privacy-policy', async ({ page }) => {
    await page.goto(HomePageUrl);
    await page.waitForURL(HomePageUrl);
    await expect(page.getByText('here')).toBeVisible();
    await page.getByText('here').click();

    await page.waitForURL(PrivacyPolicyUrl);
    await expect(page.getByText('Cookie management overview')).toBeVisible();
})

test('when the "Consent" button is being clicked the banner dissapears', async ({ page }) => {
    let bannerText = 'only essential cookies';

    await page.goto(HomePageUrl);
    await page.waitForURL(HomePageUrl);
    await expect(page.getByText(bannerText)).toBeVisible();
    await page.getByText('Consent').click();
    await expect(page.getByText(bannerText)).not.toBeVisible();
})