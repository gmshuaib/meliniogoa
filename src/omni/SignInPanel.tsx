/**
 * OmniStore SignInPanel — connects to Supabase auth when configured,
 * or allows preview authentication with local storage session.
 */

import React, { useState, useEffect } from 'react';
import { getSupabaseClient, signInWithEmail, signUpWithEmail } from '../utils/supabaseClient';
import { useStore } from './OmniStoreContext';
import { Database, ShieldCheck } from 'lucide-react';

export const SignInPanel: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useStore();

  const getActiveSupabaseConfig = () => {
    if (typeof window === 'undefined') return null;
    const authConfig = (window as any).__WEBGENY_AUTH_CONFIG__;
    if (authConfig?.provider === 'supabase' && authConfig?.supabase?.url && authConfig?.supabase?.anonKey) {
      return authConfig.supabase;
    }
    try {
      const stored = localStorage.getItem('webgeny_ecommerce_supabase');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.url && parsed?.anonKey) return parsed;
      }
      const authStored = localStorage.getItem('webgeny_auth_config');
      if (authStored) {
        const parsed = JSON.parse(authStored);
        if (parsed?.provider === 'supabase' && parsed?.supabase?.url && parsed?.supabase?.anonKey) {
          return parsed.supabase;
        }
      }
    } catch {}
    return null;
  };

  const [supabaseConfig, setSupabaseConfig] = useState<any>(getActiveSupabaseConfig);

  useEffect(() => {
    const handleAuthConnected = () => {
      setSupabaseConfig(getActiveSupabaseConfig());
    };
    window.addEventListener('webgeny-auth-connected', handleAuthConnected);
    return () => window.removeEventListener('webgeny-auth-connected', handleAuthConnected);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const activeConfig = getActiveSupabaseConfig();

      if (activeConfig?.url && activeConfig?.anonKey) {
        const client = getSupabaseClient(activeConfig);
        if (client) {
          if (isSignUp) {
            const { data, error: signUpErr } = await signUpWithEmail(client, email, password, { full_name: email.split('@')[0] });
            if (signUpErr) throw signUpErr;
            const userObj = {
              id: data?.user?.id || 'usr-' + Date.now(),
              name: email.split('@')[0],
              email: email,
              role: 'customer',
            };
            localStorage.setItem('webgeny_auth_user', JSON.stringify(userObj));
            window.dispatchEvent(new Event('webgeny_auth_change'));
            showToast('Account Created', 'Welcome! Account created successfully in Supabase.');
          } else {
            const { data, error: signInErr } = await signInWithEmail(client, email, password);
            if (signInErr) throw signInErr;
            const userObj = {
              id: data?.user?.id || 'usr-' + Date.now(),
              name: data?.user?.user_metadata?.full_name || email.split('@')[0],
              email: data?.user?.email || email,
              role: 'customer',
            };
            localStorage.setItem('webgeny_auth_user', JSON.stringify(userObj));
            window.dispatchEvent(new Event('webgeny_auth_change'));
            showToast('Signed In', `Welcome back, ${userObj.name}!`);
          }
        }
      } else {
        // Local preview session
        const userObj = {
          id: 'usr-' + Date.now(),
          name: email.split('@')[0].replace('.', ' '),
          email: email,
          role: 'customer',
        };
        localStorage.setItem('webgeny_auth_user', JSON.stringify(userObj));
        window.dispatchEvent(new Event('webgeny_auth_change'));
        showToast('Signed In', `Signed in as ${email}`);
      }

      onSuccess?.();
    } catch (err: any) {
      setError(err?.message || 'Authentication failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-3 w-72">
      <div>
        <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h3>
        <p className="text-[11px] text-zinc-500 mt-0.5">
          {isSignUp ? 'Sign up to manage orders and wishlist.' : 'Access your bag, wishlist, and orders.'}
        </p>
      </div>

      {error && (
        <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-[11px]">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50"
        >
          {loading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Sign In')}
        </button>
      </form>

      <div className="pt-1 text-center">
        <button
          type="button"
          onClick={() => { setIsSignUp(!isSignUp); setError(null); }}
          className="text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-white underline"
        >
          {isSignUp ? 'Already have an account? Sign In' : 'New here? Create an account'}
        </button>
      </div>

      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
        {supabaseConfig ? (
          <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-medium">
            <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
            <span>Connected to Supabase Database</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-zinc-100 hover:bg-emerald-50 dark:bg-zinc-800 dark:hover:bg-emerald-950/40 border border-zinc-200 hover:border-emerald-300 dark:border-zinc-700 text-zinc-700 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-400 text-[10px] font-semibold transition-colors"
            title="Connect your Supabase project credentials"
          >
            <Database className="w-3 h-3 text-emerald-500 shrink-0" />
            <span>Connect Supabase Database</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SignInPanel;
