'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm } from '@formspree/react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_CODE as string || ''); // Replace with your Formspree ID
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setHasSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
          setHasSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.log('Form submission error:', error);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            {hasSubmitted ? (
              <div className="flex items-center justify-center h-64">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-text-muted">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={state.submitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none text-white disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-text-gray">deepanshuagarwal9999@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-text-gray">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Follow me on social media</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/DeepanshuAgarwal999"
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepanshuagarwal999/"
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-card p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-lg">Available for freelance work</span>
              </div>
              <p className="text-sm text-text-gray">
                Open to exciting new projects and collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}