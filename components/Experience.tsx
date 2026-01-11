'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    company: 'Future Sportler',
    position: 'Full Stack Developer',
    period: '2025 - Present',
    description:
      'Built a complete CRM system with role-based access for Admin, Staff, and Users. Developed scalable backend using Node.js/NestJS and implemented Redis for caching and performance optimization. Integrated Easebuzz payment gateway for secure online payments. Designed responsive admin panel with dashboards, analytics, and management tools.',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Redis',
      'MongoDB',
      'Easebuzz',
      'TypeScript'
    ],
    image: '/images/fs.png',
    website: 'https://www.futuresportler.com'
  },
  {
    company: 'BITCS (Service-Based)',
    position: 'Full Stack Developer Intern',
    period: 'Oct 2024 - Present',
    description:
      'Built an AI-powered automation platform using Next.js, Unipile, and LinkedIn API to automate job applications. Created systems to analyze user messages and auto-engage with recruiters, significantly reducing manual effort and improving productivity.',
    technologies: ['Next.js', 'Node.js', 'LinkedIn API', 'Unipile', 'TypeScript'],
    image: '/images/bitcs.png',
    website: 'https://www.bitcs.in'
  },
  {
    company: 'LIFTU | KODIVA',
    position: 'Full Stack Developer Intern',
    period: 'Dec 2024 - Feb 2025',
    description:
      'Developed scalable REST APIs using Node.js and Express. Built dynamic and responsive admin dashboard using React, Next.js, and TypeScript. Contributed to AI-based interview platform and implemented AI-powered candidate shortlisting, reducing recruiter workload by 70%.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript'],
    image: '/images/kodiva.png',
    website: 'https://www.kodiva.ai'
  },
  {
    company: 'KRUNK.AI',
    position: 'Software Development Engineer',
    period: 'June 2024 - Nov 2024',
    description:
      'Built a fully customizable AI chatbot platform using React and TypeScript. Developed backend using Firebase for authentication and data storage. Created interactive UI with Framer Motion animations and delivered the entire product from scratch for organizations.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    image: '/images/krunk.png',
    website: 'https://www.krunk.ai'
  },
  {
    company: 'TRADLGO',
    position: 'Frontend Developer Intern',
    period: 'Jan 2024 - Apr 2024',
    description:
      'Worked on frontend features using React and Redux in a fast-paced startup environment. Integrated frontend with Golang-based backend APIs and delivered multiple UI enhancements.',
    technologies: ['React', 'Redux', 'Golang', 'GitHub'],
    image: '/images/tradlgo.png',
    website: 'https://www.tradlgo.com'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (website: string) => {
    window.open(website, '_blank');
  };

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <ParticleBackground />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            My professional journey in building exceptional digital products
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 md:left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-3 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 glow-blue" />

              {/* Content Card with Hover Image */}
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(exp.website)}
                className="relative group cursor-pointer"
              >
                {/* Image Preview on Hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-32 left-0 md:left-1/2 md:-translate-x-1/2 z-50 pointer-events-none"
                    >
                      <div className="relative w-80 h-48 rounded-xl overflow-hidden border-2 border-blue-500/50 shadow-2xl backdrop-blur-sm">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-violet-500/20" />
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          fill
                          className="object-cover"
                          priority
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                        {/* Project Label */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-white font-semibold text-sm">{exp.company}</span>
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-blue-400"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 hover:card-shadow-hover transition-all duration-300 group border border-slate-800/50 hover:border-blue-500/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-text-gray leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParticleBackground() {
  return <div className="absolute inset-0 opacity-20" />;
}