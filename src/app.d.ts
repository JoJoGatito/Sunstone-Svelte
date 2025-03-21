// See https://kit.svelte.dev/docs/types#app
import type { SupabaseClient, Session } from '@supabase/supabase-js'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient
			session: Session | null
			user: any | null
		}
		interface PageData {
			session: Session | null
			user: any | null
			supabase: SupabaseClient
		}
		// interface Platform {}
	}
}

export {};
