import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://kqzrwedybzkjmjcddzbo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxenJ3ZWR5Ynpram1qY2RkemJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MTI2NDYsImV4cCI6MjA5NjE4ODY0Nn0.5fA6M6PPO9WyZEmHfASKdr3LKQQWychVgbSxXnZGHA0"
const supabase = createClient(supabaseUrl, supabaseKey);

//Exporting supabase
export default supabase;