/**
 * An array of routes that are public and do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/', '/auth/new-verification'];

/**
 * An array of routes that are private and require authentication.
 * Those routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

/**
 * The prefix for the API authentication routes.
 * Routes that start with this prefix will be handled by the API authentication middleware.
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * The default redirect path after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/settings';
