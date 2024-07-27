import { type SupabaseClient, createClient } from '@supabase/supabase-js';
import config from '../config';

let db: SupabaseClient | undefined;

export async function initializeClient(): Promise<SupabaseClient> {
  if (!db) {
    db = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);
  }
  return db;
}

export default initializeClient();
