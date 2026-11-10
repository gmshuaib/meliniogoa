import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

const clientCache = new Map<string, SupabaseClient>();

const DEFAULT_CONFIG: SupabaseConfig = {
  url: (import.meta as any).env?.VITE_SUPABASE_URL || '',
  anonKey: (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '',
};

export const getSupabaseClient = (config: SupabaseConfig = DEFAULT_CONFIG): SupabaseClient | null => {
  if (!config.url || !config.anonKey) return null;
  const cacheKey = config.url;
  if (clientCache.has(cacheKey)) return clientCache.get(cacheKey)!;
  try {
    const client = createClient(config.url, config.anonKey, {
      auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true },
    });
    clientCache.set(cacheKey, client);
    return client;
  } catch { return null; }
};

export const signUpWithEmail = async (client: SupabaseClient, email: string, password: string, metadata?: Record<string, any>) => {
  const { data, error } = await client.auth.signUp({ email, password, options: { data: metadata } });
  return { data, error };
};

export const signInWithEmail = async (client: SupabaseClient, email: string, password: string) => {
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const signInWithOAuth = async (client: SupabaseClient, provider: 'google' | 'github' | 'discord' | 'twitter') => {
  const { data, error } = await client.auth.signInWithOAuth({ provider, options: { redirectTo: window.location.origin } });
  return { data, error };
};

export const resetPassword = async (client: SupabaseClient, email: string) => {
  const { data, error } = await client.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
  return { data, error };
};

export const signOut = async (client: SupabaseClient) => {
  const { error } = await client.auth.signOut();
  return { error };
};

export const getSession = async (client: SupabaseClient) => {
  const { data, error } = await client.auth.getSession();
  return { data, error };
};

export const getUser = async (client: SupabaseClient) => {
  const { data, error } = await client.auth.getUser();
  return { data, error };
};

export default getSupabaseClient;
