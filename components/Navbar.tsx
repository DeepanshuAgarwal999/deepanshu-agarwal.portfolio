'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '/#projects' },
  { name: 'Services', href: '/#services' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const BOOK_A_CALL_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1OSbpKV4SsoI-WsXAhRwa-THKiXwS7BsbCBeThZ7D1oo3hBvReFK7kb2p7mEKgTn94HKWJrVnr';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-line">
      <div className="section-container flex items-center justify-between gap-4 h-17">
        <a href="/" className="flex items-center gap-2.5">
          <span className="w-8.5 h-8.5 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-sm">
            D
          </span>
          <span className="font-extrabold text-sm tracking-wide uppercase hidden sm:inline">
            Deepanshu Agarwal
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-ink-soft hover:text-teal-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOK_A_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark hidden sm:inline-flex"
          >
            Book a Call
          </a>
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-line"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-semibold text-ink-soft"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={BOOK_A_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-dark w-full mt-2"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
