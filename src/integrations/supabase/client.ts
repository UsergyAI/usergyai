import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://lyjcffmjzgcfzkwjellp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5amNmZm1qemdjZnprd2plbGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4ODg5MzEsImV4cCI6MjA2NzQ2NDkzMX0.pSYrooMJ80e-lg9gFP_EZSVfr-WUgLukdkboy-B5zOI"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)