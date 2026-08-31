'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Smartphone, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  year: string;
  tagPrimary: string;
  tagSecondary: string;
  link: string;
}

const featured: Project = {
  title: 'Future Sportler CRM',
  image: '/images/fs.png',
  year: '2025',
  tagPrimary: 'FULL STACK',
  tagSecondary: 'NODE.JS',
  link: 'https://www.futuresportler.com',
};

const projects: Project[] = [
  {
    title: 'Clarity Mentor',
    image: '/images/clarity-mentor.png',
    year: '2024',
    tagPrimary: 'UI DESIGN',
    tagSecondary: 'REAL-TIME CHAT',
    link: 'https://claritymentor.io/',
  },
  {
    title: 'Aligner360',
    image: '/images/aligner360.png',
    year: '2024',
    tagPrimary: 'WEB DEV',
    tagSecondary: 'CMS',
    link: 'https://www.aligner360.in/',
  },
  {
    title: 'Kodiva Interviews',
    image: '/images/kodiva.png',
    year: '2024',
    tagPrimary: 'AI/ML',
    tagSecondary: 'WEB DEV',
    link: 'https://www.kodiva.ai',
  },
  {
    title: 'Krunk.AI Chatbot',
    image: '/images/krunk.png',
    year: '2024',
    tagPrimary: 'AI/ML',
    tagSecondary: 'FIREBASE',
    link: 'https://www.krunk.ai',
  },
  {
    title: 'Retreats of India',
    image: '/images/retreats-of-india.png',
    year: '2026',
    tagPrimary: 'WEB DEV',
    tagSecondary: 'NEXT.JS',
    link: 'https://retreatsofindia.com/',
  },
  {
    title: 'Executive Headlines',
    image: '/images/news-site.png',
    year: '2024',
    tagPrimary: 'WEB DEV',
    tagSecondary: 'SSR',
    link: 'https://www.executiveheadlines.com',
  },
];

const mobileApps = [
  {
    name: 'Future Sportler',
    url: 'https://play.google.com/store/apps/details?id=com.future_sportler',
  },
  {
    name: 'Partner App - Future Sportler',
    url: 'https://play.google.com/store/apps/details?id=com.partner_app_future_sportler',
  },
];

function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-surface card-hover card-shadow p-3.5 flex flex-col gap-3.5"
    >
      <div className="rounded-xl overflow-hidden relative aspect-video bg-line">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>
      <div className="px-2 pb-2.5">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="eyebrow">{project.title}</span>
          <span className="text-xs text-[#B8B7BC]">{project.year}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="tag-teal">{project.tagPrimary}</span>
          <span className="tag-neutral">{project.tagSecondary}</span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const gridRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 96px',
        end: 'bottom bottom',
        pin: pinRef.current,
        pinSpacing: false,
      });
      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-container pt-22">
      <div ref={gridRef} className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
        <div ref={pinRef}>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight mb-6">
            Selected
            <br />
            work
          </h2>
          <a
            href="https://github.com/DeepanshuAgarwal999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            See All
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface card-hover card-shadow p-3.5 flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[16/7.6] bg-line">
              <Image
                src={featured.image}
                alt={`${featured.title} dashboard`}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="px-2.5 pb-3 flex items-center justify-between flex-wrap gap-2.5">
              <div className="flex items-center gap-4">
                <span className="eyebrow">{featured.title}</span>
                <span className="text-xs text-[#B8B7BC]">{featured.year}</span>
              </div>
              <div className="flex gap-2">
                <span className="tag-teal">{featured.tagPrimary}</span>
                <span className="tag-neutral">{featured.tagSecondary}</span>
              </div>
            </div>
          </a>

          <div className="card-surface card-shadow p-5 sm:p-6">
            <div className="eyebrow mb-3.5">Also shipped as React Native apps</div>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {mobileApps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-line hover:border-teal transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-teal-tint flex items-center justify-center text-teal-dark shrink-0">
                    <Smartphone className="w-4.5 h-4.5" strokeWidth={1.6} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate">{app.name}</div>
                    <span className="tag-teal inline-block mt-1.5">REACT NATIVE</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-faint shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
