import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_supabase_url, import.meta.env.VITE_supabase_key)

export { supabase }