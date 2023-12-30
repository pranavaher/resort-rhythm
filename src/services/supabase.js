import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rioepbdzduftydxugeac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpb2VwYmR6ZHVmdHlkeHVnZWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NjY3MTYsImV4cCI6MjAxNjI0MjcxNn0.Zz3eiWmbcFX4mJifWEcERixsd_F2uXC2_1B_dO7OQVg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
