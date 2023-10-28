import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private'

const supabase = createClient(env.supabase_url, env.supabase_key)