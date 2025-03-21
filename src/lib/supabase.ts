// Types for Supabase tables
export type Profile = {
  id: string;
  updated_at: string;
  username: string;
  full_name: string;
  avatar_url: string;
  website: string;
};

export type Resource = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
};

export type Event = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  is_virtual: boolean;
  meeting_url?: string;
};

// Helper functions for common database operations
/**
 * Fetch the profile for a user
 */
export async function fetchProfile(supabase, userId) {
  if (!userId) {
    return null;
  }
  
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
    
  return data as Profile | null;
}

/**
 * Update the profile for a user
 */
export async function updateProfile(supabase, profile, userId) {
  if (!userId) {
    throw new Error('User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', userId);
    
  if (error) throw error;
  return data;
}

/**
 * Fetch resources with optional filtering
 */
export async function fetchResources(supabase, category?: string, tags?: string[]) {
  let query = supabase.from('resources').select('*');
  
  if (category) {
    query = query.eq('category', category);
  }
  
  if (tags && tags.length > 0) {
    query = query.contains('tags', tags);
  }
  
  const { data, error } = await query.order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as Resource[];
}

/**
 * Fetch upcoming events
 */
export async function fetchUpcomingEvents(supabase) {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('start_date', now)
    .order('start_date', { ascending: true });
    
  if (error) throw error;
  return data as Event[];
}