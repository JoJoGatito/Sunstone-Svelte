import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  // The session is already available in locals from the hooks.server.ts
  const { session, user } = locals;
  
  // For pages that require authentication
  const requiresAuth = [
    '/profile',
    '/dashboard',
    '/settings',
  ];
  
  // Check if the current path requires authentication
  const currentPath = url.pathname;
  const needsAuth = requiresAuth.some(path => currentPath.startsWith(path));
  
  // Return the session and user data for use in client components
  return {
    session,
    user,
    needsAuth,
    supabase: locals.supabase
  };
};