'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="tel:+919999999999"
            className="text-xl md:text-2xl font-bold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            <span className="gradient-text">+91 8076821409</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-gray hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <Link href={'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1OSbpKV4SsoI-WsXAhRwa-THKiXwS7BsbCBeThZ7D1oo3hBvReFK7kb2p7mEKgTn94HKWJrVnr'} className="btn-primary text-sm">
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-text-gray hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">
              Hire Me
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}