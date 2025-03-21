<script>
  import { page } from '$app/stores';
  import { fetchProfile, updateProfile } from '$lib/supabase';
  
  // Get user data from the store
  const user = $page.data.user;
  const supabase = $page.data.supabase;
  
  // Profile state
  let profile = $state(null);
  let loading = $state(true);
  let saving = $state(false);
  let message = $state('');
  let error = $state('');
  
  // Form fields
  let username = $state('');
  let full_name = $state('');
  let website = $state('');
  let avatar_url = $state('');
  
  // Load profile data on component mount
  $effect(async () => {
    try {
      loading = true;
      profile = await fetchProfile(supabase, user?.id);
      
      if (profile) {
        username = profile.username || '';
        full_name = profile.full_name || '';
        website = profile.website || '';
        avatar_url = profile.avatar_url || '';
      }
    } catch (err) {
      console.error('Error loading profile:', err);
      error = 'Failed to load profile data.';
    } finally {
      loading = false;
    }
  });
  
  async function handleSubmit() {
    try {
      saving = true;
      error = '';
      message = '';
      
      const updates = {
        id: user.id,
        username,
        full_name,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };
      
      await updateProfile(supabase, updates, user.id);
      message = 'Profile updated successfully!';
      
      // Refresh profile data
      profile = await fetchProfile(supabase, user.id);
    } catch (err) {
      console.error('Error updating profile:', err);
      error = 'Failed to update profile.';
    } finally {
      saving = false;
    }
  }
  
  async function signOut() {
    try {
      await supabase.auth.signOut();
      // Redirect will be handled by the auth state change listener
    } catch (err) {
      console.error('Error signing out:', err);
      error = 'Failed to sign out.';
    }
  }
</script>

<!-- Rest of your profile component HTML remains the same -->
<svelte:head>
  <title>Your Profile - Sunstone Inclusivity Network</title>
</svelte:head>

<section class="profile-section">
  <div class="container">
    <div class="profile-header">
      <h1>Your Profile</h1>
      <p>Manage your account details and preferences.</p>
    </div>
    
    {#if loading}
      <div class="loading">
        <p>Loading your profile...</p>
      </div>
    {:else}
      {#if message}
        <div class="message success">
          {message}
        </div>
      {/if}
      
      {#if error}
        <div class="message error">
          {error}
        </div>
      {/if}
      
      <div class="profile-content">
        <div class="profile-sidebar">
          <div class="avatar-container">
            <div class="avatar">
              {#if avatar_url}
                <img src={avatar_url} alt="Profile avatar" />
              {:else}
                <div class="avatar-placeholder">
                  {full_name ? full_name.charAt(0).toUpperCase() : user?.email.charAt(0).toUpperCase()}
                </div>
              {/if}
            </div>
            <div class="account-info">
              <p class="email">{user?.email}</p>
              <button class="btn-signout" on:click={signOut}>Sign Out</button>
            </div>
          </div>
          
          <div class="profile-nav">
            <a href="/profile" class="active">Profile Details</a>
            <a href="/profile/preferences">Preferences</a>
            <a href="/profile/security">Security</a>
          </div>
        </div>
        
        <div class="profile-main">
          <h2>Profile Details</h2>
          
          <form on:submit|preventDefault={handleSubmit} class="profile-form">
            <div class="form-group">
              <label for="username">Username</label>
              <input 
                type="text" 
                id="username" 
                bind:value={username} 
                placeholder="Your username"
              />
            </div>
            
            <div class="form-group">
              <label for="full_name">Full Name</label>
              <input 
                type="text" 
                id="full_name" 
                bind:value={full_name} 
                placeholder="Your full name"
              />
            </div>
            
            <div class="form-group">
              <label for="website">Website</label>
              <input 
                type="url" 
                id="website" 
                bind:value={website} 
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <div class="form-group">
              <label for="avatar_url">Avatar URL</label>
              <input 
                type="url" 
                id="avatar_url" 
                bind:value={avatar_url} 
                placeholder="https://example.com/avatar.jpg"
              />
              <p class="hint">Enter a URL for your profile picture</p>
            </div>
            
            <button type="submit" class="btn-submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Your existing styles remain the same */
  .profile-section {
    padding: 3rem 0;
  }
  
  .profile-header {
    margin-bottom: 2rem;
  }
  
  .profile-header h1 {
    font-size: 2rem;
    color: #2c1752;
    margin-bottom: 0.5rem;
  }
  
  .profile-header p {
    color: #666;
  }
  
  .loading {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
  
  .message {
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
  }
  
  .success {
    background-color: #e6f7e6;
    color: #0d6d0d;
    border: 1px solid #c3e6c3;
  }
  
  .error {
    background-color: #fde8e8;
    color: #c81e1e;
    border: 1px solid #f5c2c2;
  }
  
  .profile-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }
  
  .profile-sidebar {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  
  .avatar-container {
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1rem;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background-color: #5b3e90;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .account-info {
    text-align: center;
  }
  
  .email {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    word-break: break-word;
  }
  
  .btn-signout {
    background: none;
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .btn-signout:hover {
    background-color: #f9f9f9;
    color: #333;
  }
  
  .profile-nav {
    padding: 0.5rem 0;
  }
  
  .profile-nav a {
    display: block;
    padding: 0.8rem 1.5rem;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .profile-nav a:hover {
    background-color: #f5f5f5;
  }
  
  .profile-nav a.active {
    background-color: #f0e6ff;
    color: #5b3e90;
    font-weight: 500;
    border-left: 3px solid #5b3e90;
  }
  
  .profile-main {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 2rem;
  }
  
  .profile-main h2 {
    font-size: 1.5rem;
    color: #2c1752;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  
  .profile-form {
    max-width: 600px;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #5b3e90;
    outline: none;
  }
  
  .hint {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #888;
  }
  
  .btn-submit {
    background-color: #5b3e90;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-submit:hover {
    background-color: #4a3275;
  }
  
  .btn-submit:disabled {
    background-color: #9d8cb3;
    cursor: not-allowed;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .profile-content {
      grid-template-columns: 1fr;
    }
    
    .profile-sidebar {
      margin-bottom: 1.5rem;
    }
    
    .avatar-container {
      display: flex;
      align-items: center;
      padding: 1rem;
    }
    
    .avatar {
      width: 60px;
      height: 60px;
      margin: 0 1rem 0 0;
    }
    
    .account-info {
      text-align: left;
      flex: 1;
    }
    
    .profile-nav {
      display: flex;
      overflow-x: auto;
      padding: 0;
    }
    
    .profile-nav a {
      padding: 0.8rem 1rem;
      white-space: nowrap;
    }
    
    .profile-nav a.active {
      border-left: none;
      border-bottom: 3px solid #5b3e90;
    }
  }
</style>