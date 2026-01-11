'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Zap,
  Shield,
  BarChart3,
  Layers,
  Package,
  Search,
  CreditCard,
  Gauge
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const features = [
  {
    icon: Database,
    title: 'Production-Grade Backends',
    description: 'Design and build scalable backend applications with microservices architecture, handling millions of concurrent requests with zero downtime'
  },
  {
    icon: Zap,
    title: 'Distributed Systems',
    description: 'Expert knowledge in Kafka for event streaming, Redis for caching & real-time data, and comprehensive monitoring with Prometheus'
  },
  {
    icon: Shield,
    title: 'Containerization & DevOps',
    description: 'Master Docker containerization, orchestration, and CI/CD pipelines for seamless deployment and infrastructure management'
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Build SEO-optimized applications with meta tags, structured data, server-side rendering, and performance optimization techniques'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Integrate multiple payment gateways (Stripe, PayPal, Razorpay, Easebuzz) with secure PCI compliance and advanced fraud detection'
  },
  {
    icon: Layers,
    title: 'Modern SPAs',
    description: 'Create responsive Single Page Applications with smooth animations using React, Next.js, Framer Motion, and TailwindCSS'
  },
  {
    icon: Gauge,
    title: 'Complex User Flows',
    description: 'Design sophisticated booking systems, multi-step forms, and workflows handling concurrent user interactions with real-time synchronization'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Implement real-time dashboards, live notifications, and data visualization with WebSockets and server-sent events'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const colorGradients = [
    'from-blue-500 to-blue-600',
    'from-cyan-500 to-cyan-600',
    'from-indigo-500 to-indigo-600',
    'from-violet-500 to-violet-600',
    'from-blue-400 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-cyan-400 to-blue-500',
    'from-indigo-400 to-violet-500',
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What I <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Building production-ready, scalable applications with enterprise-grade architecture.
            From complex backend systems to beautiful, animated frontends with seamless user experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradient = colorGradients[index % colorGradients.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700/50 transition-all duration-300 overflow-hidden">

                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-all duration-300 pointer-events-none rounded-2xl" />

                  {/* Icon Container */}
                  <div className={`w-14 h-14 mb-4 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all relative z-10">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Subtle Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none -z-10 blur-xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Projects Built', value: '50+' },
            { label: 'Concurrent Users', value: '10K+' },
            { label: 'Payment Processed', value: '₹100L+' },
            { label: 'Code Quality', value: '99%' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-slate-800/50 bg-slate-900/30 hover:border-blue-500/30 transition-all">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}