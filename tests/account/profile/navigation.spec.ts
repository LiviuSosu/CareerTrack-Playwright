import { test, expect } from '@playwright/test';
import { ProfilePageUrl, LoginPageUrl, HomePageUrl, AccountProfileChnagePassword } from '../../utils/urls';
import { EmailLabel, PasswordLabel, AdminEmail, AdminPassword, LoginButtonName, ActiveTabSidebarId, InactiveTabSidebarId } from '../../utils/constants';

test('navigation styling works properly', async ({ page }) => {
    await page.goto(LoginPageUrl);

    await page.getByLabel(EmailLabel).fill(AdminEmail);
    await page.getByLabel(PasswordLabel).fill(AdminPassword);
    await page.getByRole('button', { name: LoginButtonName }).click();

    await page.waitForURL(HomePageUrl);

    await expect(page.getByRole('paragraph')).toContainText("home page");

    await page.goto(ProfilePageUrl);

    const locatorProfileMe = await page.getByTestId("profileMeNavigationItem");
    await expect(locatorProfileMe).toHaveClass(ActiveTabSidebarId);
    const locatorChangePassword = await page.getByTestId("changePasswordNavigationItem");
    await expect(locatorChangePassword).toHaveClass(InactiveTabSidebarId);

    await page.goto(AccountProfileChnagePassword);
    await expect(locatorProfileMe).toHaveClass(InactiveTabSidebarId);
    await expect(locatorChangePassword).toHaveClass(ActiveTabSidebarId);

    const navigationOptions = await page.getByRole('listitem').all();
    expect(navigationOptions.length).toEqual(2);
})