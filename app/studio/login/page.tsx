import type { Metadata } from 'next';
import LoginForm from '@/components/blog/LoginForm';

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
};

export default function StudioLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page px-5">
      <div className="w-full max-w-100 card-surface card-shadow p-8">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-8.5 h-8.5 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-sm">
            D
          </span>
          <span className="font-extrabold text-sm">Studio</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
