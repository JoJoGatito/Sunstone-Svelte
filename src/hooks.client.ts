mport { createClient } from '$lib/supabase/client'
import { invalidate } from '$app/navigation'
import { browser } from '$app/environment'

// Only initialize in the browser
if (browser) {
  // Create a Supabase client for client-side usage
  const supabase = createClient()

  // Setup auth state listener for client-side navigation
  supabase.auth.onAuthStateChange((event, _session) => {
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
      // Invalidate all SvelteKit data when auth state changes
      invalidate('supabase:auth')
    }
  })
}