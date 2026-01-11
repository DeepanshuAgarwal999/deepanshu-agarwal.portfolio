'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Smartphone, Layers, Zap, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications using React, Next.js, and TypeScript',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: Layers,
    title: '3D Web Experiences',
    description: 'Developing immersive 3D web experiences using Three.js and React Three Fiber',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, accessibility, and SEO',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring seamless experiences across all devices and screen sizes',
    gradient: 'from-fuchsia-500 to-pink-600'
  },
  {
    icon: Globe,
    title: 'Modern Web Applications',
    description: 'Building scalable and maintainable web applications with modern frameworks',
    gradient: 'from-indigo-500 to-purple-600'
  }
];

function Palette({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-cosmic-black to-deep-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Comprehensive web development and design services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-14 h-14 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-gray leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}