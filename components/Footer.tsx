'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-gray text-sm">
            © 2026 Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-text-gray text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-blue-500 fill-blue-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-text-gray hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-text-gray hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}