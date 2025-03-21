import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
  // Get session from server context
  const session = locals.session;
  
  // If user is already logged in, redirect to the intended destination or home page
  if (session) {
    const redirectTo = url.searchParams.get('redirectTo') || '/';
    throw redirect(303, redirectTo);
  }
  
  // If not logged in, continue to the login page
  return {};
};