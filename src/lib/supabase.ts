import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Issue = {
  id: string;
  name: string;
  email: string;
  description: string;
  photo_url?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  status: 'pending' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  category: string;
  created_at: string;
  updated_at: string;
};