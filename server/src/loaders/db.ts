import type { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';
import config from '../config';

const supabase = createClient<Database>(
  config.SUPABASE_URL as string,
  config.SUPABASE_KEY as string,
);

export default supabase;
