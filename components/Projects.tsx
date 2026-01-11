'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const projects = [
  {
    title: 'Future Sportler CRM',
    description: 'Complete CRM system with role-based access for Admin, Staff, and Users',
    longDescription: 'Built a complete CRM system with role-based access for Admin, Staff, and Users. Developed scalable backend using Node.js/NestJS and implemented Redis for caching and performance optimization. Integrated Easebuzz payment gateway for secure online payments. Designed responsive admin panel with dashboards, analytics, and management tools.',
    image: '/images/fs.png',
    tags: ['React', 'Next.js', 'Node.js', 'NestJS', 'Redis', 'MongoDB', 'Easebuzz', 'TypeScript'],
    category: 'Full Stack',
    link: 'https://www.futuresportler.com'
  },
  {
    title: 'Clarity Mentor Platform',
    description: 'Student-mentor platform with WebSocket real-time chat and Razorpay payment integration',
    longDescription: 'Developed a comprehensive student-mentor platform using Next.js with both website and admin panel. Implemented WebSocket for real-time chat communication between students and mentors. Integrated Razorpay for secure payment transactions. Built responsive UI with dynamic dashboards for student and mentor management.',
    image: '/images/clarity-mentor.png',
    tags: ['Next.js', 'WebSocket', 'Razorpay', 'TypeScript', 'Real-time Chat', 'Admin Panel'],
    category: 'EdTech/SaaS',
    link: 'https://claritymentor.vercel.app/'
  },
  {
    title: 'Aligner360 Dentist Website',
    description: 'Full-featured dentist website with dynamic content management and SEO optimization',
    longDescription: 'Developed a comprehensive website for Aligner360 dentist clinic with a powerful admin panel. Built full-stack solution allowing dentists to dynamically update website content, upload images and videos, and manage daily blogs. Implemented advanced SEO optimization for better search visibility. Created from scratch with modern architecture for scalability and performance.',
    image: '/images/aligner360.png',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'SEO Optimization', 'Admin Panel', 'CMS'],
    category: 'Full Stack',
    link: 'https://www.aligner360.in/'
  },
  {
    title: 'Executive Headlines News Website',
    description: 'Responsive news website with real-time updates and multimedia content',
    longDescription: 'Built a news aggregator website with real-time updates, multimedia content, blogs, magazines and social sharing features using React, Next.js, and Tailwind CSS.',
    image: '/images/news-site.png',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'SSR'],
    category: 'Digital Marketing',
    link: 'https://www.executiveheadlines.com'
  },
  {
    title: 'LIFTU | KODIVA Interview Platform',
    description: 'AI-based interview platform with candidate shortlisting and REST APIs',
    longDescription: 'Developed scalable REST APIs using Node.js and Express. Built dynamic and responsive admin dashboard using React, Next.js, and TypeScript. Contributed to AI-based interview platform and implemented AI-powered candidate shortlisting, reducing recruiter workload by 70%.',
    image: '/images/kodiva.png',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'AI'],
    category: 'AI/SaaS',
    link: 'https://www.kodiva.ai'
  },
  {
    title: 'KRUNK.AI Chatbot Platform',
    description: 'Fully customizable AI chatbot platform with Firebase backend',
    longDescription: 'Built a fully customizable AI chatbot platform using React and TypeScript. Developed backend using Firebase for authentication and data storage. Created interactive UI with Framer Motion animations and delivered the entire product from scratch for organizations.',
    image: '/images/krunk.png',
    tags: ['React', 'TypeScript', 'Firebase', 'Framer Motion', 'AI'],
    category: 'AI/SaaS',
    link: 'https://www.krunk.ai'
  },
 
 
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter()

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative glass-card overflow-hidden cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {project.category}
                </div>

                {/* Hover Overlay with Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <motion.button
                    onClick={() => { router.push(project.link) }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                  */}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-text-gray text-sm mb-4 leading-relaxed">
                  {hoveredIndex === index ? project.longDescription : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-slate-800 border border-slate-700 rounded-full text-text-muted group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}