import { createServerClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import type { Cookies } from '@sveltejs/kit'

export function createClient(cookies: Cookies) {
  return createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => cookies.get(key),
        set: (key, value, options) => {
          cookies.set(key, value, {
            path: '/',
            ...options
          })
        },
        remove: (key, options) => {
          cookies.delete(key, {
            path: '/',
            ...options
          })
        }
      }
    }
  )
}