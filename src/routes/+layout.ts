import { createClient } from '$lib/supabase/client';
import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';

// Create a client-side Supabase client for use in components
export const supabaseClient = createClient();

export const load: LayoutLoad = async ({ data, depends }) => {
  // This depends on 'supabase:auth' so it will be re-run whenever authentication changes
  depends('supabase:auth');
  
  // Don't return the client directly in the data
  // Components will import the client from this module instead
  return {
    ...data
  };
};