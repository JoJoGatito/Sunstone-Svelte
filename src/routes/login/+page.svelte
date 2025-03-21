<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { supabaseClient } from '../+layout';
  
  let email = $state('');
  let password = $state('');
  let loading = $state(false);
  let message = $state('');
  let error = $state('');
  let isLogin = $state(true); // Toggle between login and signup
  
  // Get redirect URL from query parameters
  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
  
  // Use the imported supabase client
  const supabase = supabaseClient;