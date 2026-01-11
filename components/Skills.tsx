'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ReactNode } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiNestjs, SiSpringboot, SiGraphql, SiMongodb,
  SiPostgresql, SiDocker, SiAmazon, SiGit, SiPython,
  SiTensorflow, SiOpenai
} from 'react-icons/si';

interface TechIcon {
  name: string;
  icon: ReactNode;
  color: string;
}

const technologies: TechIcon[] = [
  { name: 'React', icon: <SiReact className="w-12 h-12" />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, color: '#ffffff' },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" />, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, color: '#06B6D4' },
  { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" />, color: '#339933' },
  { name: 'NestJS', icon: <SiNestjs className="w-12 h-12" />, color: '#EA2845' },
  { name: 'Spring Boot', icon: <SiSpringboot className="w-12 h-12" />, color: '#6DB33F' },
  { name: 'Java', icon: <div className="w-12 h-12 flex items-center justify-center text-sm font-semibold">Java</div>, color: '#007396' },
  { name: 'GraphQL', icon: <SiGraphql className="w-12 h-12" />, color: '#E535AB' },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: '#13AA52' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12" />, color: '#336791' },
  { name: 'Docker', icon: <SiDocker className="w-12 h-12" />, color: '#2496ED' },
  { name: 'AWS', icon: <SiAmazon className="w-12 h-12" />, color: '#FF9900' },
  { name: 'Git', icon: <SiGit className="w-12 h-12" />, color: '#F05032' },
  // { name: 'Python', icon: <SiPython className="w-12 h-12" />, color: '#3776AB' },
  // { name: 'TensorFlow', icon: <SiTensorflow className="w-12 h-12" />, color: '#FF6F00' },
  { name: 'OpenAI', icon: <SiOpenai className="w-12 h-12" />, color: '#412991' },
];

// Duplicate array for seamless infinite scroll
const duplicatedTech = [...technologies, ...technologies];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Technologies and tools I master and work with daily
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Mask */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex items-center gap-8 flex-none pr-8"
              animate={{
                translateX: "-50%"
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
                repeatType: "loop"
              }}
            >
              {duplicatedTech.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-none group"
                >
                  {/* Tech Card */}
                  <div className="relative w-32 h-40 flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/50 transition-all duration-300 overflow-hidden cursor-pointer">

                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    {/* Icon Container */}
                    <div className="relative z-10 flex items-center justify-center mb-3 p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-all">
                      <div style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                    </div>

                    {/* Tech Name */}
                    <h3 className="relative z-10 text-sm font-semibold text-white text-center leading-tight">
                      {tech.name}
                    </h3>

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}