export const ACCESS_TOKEN = 'accessToken';
export const AUTHORIZATION_HEADER = 'Authorization';
export const BEARER = 'Bearer';

export const API_BASE_URL = 'http://localhost:8080/api/v1';
export const API_USERS_URL = '/users';
export const API_REVIEWS_URL = '/reviews';
export const API_AUTH_URL = '/auth';
export const API_SIGN_IN_URL = '/signin';
export const API_SIGN_UP_URL = '/signup';
export const API_MESSAGES_URL = '/messages';

export const API_BASE_URL_OAUTH2 = 'http://localhost:8080';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL = API_BASE_URL_OAUTH2 + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL_OAUTH2 + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL_OAUTH2 + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
