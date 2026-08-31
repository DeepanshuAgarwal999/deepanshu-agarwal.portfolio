'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ReactNode } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiNestjs, SiSpringboot, SiGraphql, SiMongodb,
  SiPostgresql, SiDocker, SiAmazon, SiGit, SiOpenai
} from 'react-icons/si';

interface TechIcon {
  name: string;
  icon: ReactNode;
  color: string;
}

const technologies: TechIcon[] = [
  { name: 'React', icon: <SiReact className="w-9 h-9" />, color: '#149ECA' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-9 h-9" />, color: '#141414' },
  { name: 'TypeScript', icon: <SiTypescript className="w-9 h-9" />, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-9 h-9" />, color: '#0EA5B7' },
  { name: 'Node.js', icon: <SiNodedotjs className="w-9 h-9" />, color: '#3C873A' },
  { name: 'NestJS', icon: <SiNestjs className="w-9 h-9" />, color: '#CE2B4E' },
  { name: 'Spring Boot', icon: <SiSpringboot className="w-9 h-9" />, color: '#5FA746' },
  { name: 'GraphQL', icon: <SiGraphql className="w-9 h-9" />, color: '#C0269C' },
  { name: 'MongoDB', icon: <SiMongodb className="w-9 h-9" />, color: '#0E9645' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-9 h-9" />, color: '#336791' },
  { name: 'Docker', icon: <SiDocker className="w-9 h-9" />, color: '#1D7FC4' },
  { name: 'AWS', icon: <SiAmazon className="w-9 h-9" />, color: '#DD8B0A' },
  { name: 'Git', icon: <SiGit className="w-9 h-9" />, color: '#DD4B2A' },
  { name: 'OpenAI', icon: <SiOpenai className="w-9 h-9" />, color: '#141414' },
];

const duplicatedTech = [...technologies, ...technologies];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="section-container pt-22">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Full toolkit
        </h2>
        <p className="text-muted max-w-140 mx-auto">
          The languages, frameworks and infrastructure I reach for day to day
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-5 flex-none pr-5"
            animate={{ translateX: '-50%' }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-none w-30 h-35 flex flex-col items-center justify-center gap-3 rounded-card border border-line bg-surface"
              >
                <div style={{ color: tech.color }}>{tech.icon}</div>
                <span className="text-[13px] font-semibold text-center px-2">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
