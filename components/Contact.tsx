'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { useForm } from '@formspree/react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_CODE as string || '');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!state.succeeded) return;
    formRef.current?.reset();
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <section id="contact" ref={ref} className="section-container pt-22">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="panel p-2.5 sm:p-3"
      >
        <div className="rounded-[22px] p-7 sm:p-10 lg:p-14 bg-linear-to-br from-white to-lavender">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 max-w-140">
            Let&rsquo;s build your next product together
          </h2>
          <p className="text-[15px] text-[#5C5A6E] max-w-120 mb-8">
            Feel free to reach out with any questions &mdash; I&rsquo;m available for freelance
            work and full-time opportunities.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3.5 max-w-160">
            <div className="grid sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="name"
                required
                disabled={state.submitting}
                placeholder="Name"
                className="w-full px-4.5 py-4 rounded-2xl border-0 bg-white/65 text-sm text-ink placeholder-faint focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                required
                disabled={state.submitting}
                placeholder="Email"
                className="w-full px-4.5 py-4 rounded-2xl border-0 bg-white/65 text-sm text-ink placeholder-faint focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-50"
              />
            </div>
            <textarea
              name="message"
              required
              disabled={state.submitting}
              rows={4}
              placeholder="Work Description..."
              className="w-full px-4.5 py-4 rounded-2xl border-0 bg-white/50 text-sm text-ink placeholder-faint resize-y focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-4.5 rounded-2xl bg-ink text-white text-[15px] font-bold hover:bg-ink-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-60 flex items-center gap-3 bg-ink text-white rounded-2xl pl-3.5 pr-5 py-3.5 shadow-2xl max-w-[calc(100vw-2rem)]"
          >
            <span className="w-8 h-8 rounded-full bg-teal flex items-center justify-center shrink-0">
              <Check className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </span>
            <div className="text-sm">
              <div className="font-bold">Query submitted</div>
              <div className="text-white/70">I&rsquo;ll get back to you soon.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
