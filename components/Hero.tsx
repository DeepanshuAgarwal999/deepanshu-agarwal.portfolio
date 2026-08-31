'use client';

import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RESUME_URL =
  'https://drive.google.com/file/d/19BPVrzLkMPmejLl2D1XrNtEiFRNGEOx4/view?usp=sharing';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tween = gsap.to(stackRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-5 px-5 sm:px-8 md:px-10">
      <div className="max-w-310 mx-auto panel p-6 sm:p-10 lg:p-14">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-start">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-tint px-4 py-2 rounded-full mb-7"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-teal" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-teal-dark">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[42px] sm:text-6xl lg:text-[68px] leading-[1.04] font-extrabold tracking-tight mb-6"
            >
              Hi, I&rsquo;m a full&#8209;stack developer
              {/* <sup className="text-2xl font-bold align-top ml-1">&copy;</sup> */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-muted max-w-120 mb-9"
            >
              I build scalable full-stack products &mdash; from Node.js and NestJS backends to
              polished React and Next.js frontends &mdash; for startups and growing teams. 1.6
              years across 10+ shipped projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-dark">
                Contact Us
              </a>
              <Link
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </motion.div>
          </div>

          <div ref={stackRef} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-surface card-hover card-shadow p-4.5 flex flex-col gap-3">
                <div>
                  <div className="font-extrabold text-base">Deepanshu Agarwal</div>
                  <div className="text-[13px] text-faint mt-0.5">Uttar Pradesh, India</div>
                </div>
                <div className="rounded-xl overflow-hidden h-23 relative bg-line">
                  <Image
                    src="/images/fs.png"
                    alt="Future Sportler CRM interface preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-ink text-white text-[10.5px] font-bold tracking-wide px-2.5 py-1.5 rounded-full self-start">
                  FULL-STACK EXPERT
                </div>
                <div className="text-sm font-extrabold text-teal-dark">
                  1.6 YEARS &middot; 10+ PROJECTS
                </div>
              </div>

              <div className="rounded-card overflow-hidden relative min-h-55 flex items-center justify-center bg-linear-to-br from-teal-dark via-teal to-[#0F3F3C]">
                <span className="text-5xl font-extrabold text-white/90 tracking-tight">DA</span>
                <span className="absolute bottom-3 left-3.5 text-[10.5px] font-bold tracking-wide uppercase text-white/70">
                  Photo placeholder
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[1.7fr_1fr] gap-4">
              <div className="rounded-card p-5.5 flex flex-col justify-between gap-4.5 min-h-30 bg-linear-to-br from-white to-lavender">
                <div className="text-[15px] font-bold text-[#1E1B33] leading-snug">
                  Recent companies &amp; stacks I&rsquo;ve shipped with
                </div>
                <div className="flex items-center gap-4.5 flex-wrap">
                  <span className="font-extrabold text-sm text-[#241F45]">Future Sportler</span>
                  <span className="font-extrabold text-sm text-[#241F45]">KODIVA</span>
                  <span className="font-extrabold text-sm text-[#241F45]">KRUNK.AI</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/deepanshuagarwal999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="card-surface border border-line rounded-full aspect-square flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/DeepanshuAgarwal999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="card-surface border border-line rounded-full aspect-square flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deepanshuagarwal9999@gmail.com"
                  aria-label="Email"
                  className="card-surface border border-line rounded-full aspect-square flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <Link
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                  className="card-surface border border-line rounded-full aspect-square flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
                >
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
