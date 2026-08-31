'use client';

import { useActionState } from 'react';
import { loginAction, LoginState } from '@/lib/actions/auth';

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3.5">
      <input
        type="password"
        name="password"
        required
        autoFocus
        placeholder="Password"
        disabled={isPending}
        className="w-full px-4.5 py-4 rounded-2xl border border-line bg-surface text-sm text-ink placeholder-faint focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-50"
      />
      {state.error && <p className="text-sm font-semibold text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-2xl bg-ink text-white text-[15px] font-bold hover:bg-ink-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
