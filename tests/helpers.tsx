import 'dotenv/config'

const apiUrl = process.env.API_URL;

if (apiUrl == null) {
    throw new Error('Api url is not being set.');
}

export const ProfilePageUrl = apiUrl + 'account/profile/me';
export const LoginPageUrl = apiUrl + 'account/login';
export const HomePageUrl = apiUrl;
export const UserManagementUrl = apiUrl + 'user-management';
export const PrivacyPolicyUrl = apiUrl + 'legal/privacy-policy';
export const CookiePolicyUrl = apiUrl + 'legal/cookie-policy';
export const TermsOfUseUrl = apiUrl + 'legal/terms-of-use';
export const ImprintUrl = apiUrl + 'legal/imprint';
export const AccountProfileMe = apiUrl +'account/profile/me';
export const AccountProfileChnagePassword ='account/profile/change-password';
export const NotFoundPageUrl = apiUrl + 'non-existing-url';