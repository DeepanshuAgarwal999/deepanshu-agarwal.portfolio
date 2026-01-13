'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated Particles */}
      <ParticleBackground />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="section-container relative z-10 py-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">Available for work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Deepanshu Agarwal</span>
              <br />
              <span className="text-text-gray text-3xl md:text-5xl">Full Stack Developer</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-gray max-w-2xl leading-relaxed mb-8"
          >
            I craft exceptional digital experiences with clean code and modern design.
            Specializing in building scalable web applications that make a real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/DeepanshuAgarwal999/" className="btn-primary inline-flex items-center gap-2 group">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="https://drive.google.com/file/d/1pVz07V4i04OW0TxRnVi5GE5cCMQcng-w/view?usp=sharing"
              download="Deepanshu_Agarwal_Resume.pdf"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-text-muted text-sm">Connect with me:</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/deepanshuagarwal999/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-text-gray group-hover:text-white transition-colors" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-text-gray group-hover:text-white transition-colors" />
              </a> */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-text-gray group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:deepanshuagarwal9999@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-text-gray group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">3+</div>
              <div className="text-text-muted text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">50+</div>
              <div className="text-text-muted text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">30+</div>
              <div className="text-text-muted text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}