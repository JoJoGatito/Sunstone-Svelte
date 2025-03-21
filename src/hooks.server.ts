import { createClient } from '$lib/supabase/server'
import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  // Create a Supabase client using the server implementation
  event.locals.supabase = createClient(event.cookies)

  // Get the session from the server
  const {
    data: { session },
  } = await event.locals.supabase.auth.getSession()

  // Add session to locals for usage in routes
  event.locals.session = session
  event.locals.user = session?.user || null
  
  // Handle protected routes
  const requiresAuth = [
    '/profile',
    '/dashboard',
    '/settings',
  ]
  
  // Check if the current path requires authentication
  const currentPath = event.url.pathname
  const needsAuth = requiresAuth.some(path => currentPath.startsWith(path))
  
  // If the page requires authentication and user is not authenticated, redirect to login
  if (needsAuth && !session) {
    throw redirect(303, `/login?redirectTo=${encodeURIComponent(currentPath)}`)
  }

  return resolve(event, {
    /**
     * Ensure that page options (like CSP) are carried over to error responses.
     */
    filterSerializedResponseHeaders(name) {
      return name === 'content-type'
    },
  })
}