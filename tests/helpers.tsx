import 'dotenv/config'

const apiUrl = process.env.API_URL;

export const ProfilePageUrl = apiUrl + 'profile';
export const LoginPageUrl = apiUrl + 'login';
export const HomePageUrl = apiUrl + 'home';
export const UserManagementUrl = apiUrl + 'user-management';
export const PrivacyPolicyUrl = apiUrl + 'legal/privacy-policy';