'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { company: 'Future Sportler', role: 'Software Engineer', period: 'Jan 2025 – Jan 2026', website: 'https://www.futuresportler.com' },
  { company: 'BITCS', role: 'Full Stack Engineer', period: 'Oct 2024 – Jan 2025', website: 'https://www.bitcs.in' },
  { company: 'KRUNK.AI', role: 'Intern', period: 'Apr 2024 – Aug 2024', website: 'https://www.krunk.ai' },
  { company: 'TRADLGO', role: 'Frontend Developer Intern', period: 'Feb 2024 – May 2024', website: 'https://www.tradlgo.com' },
];

const BOOK_A_CALL_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1OSbpKV4SsoI-WsXAhRwa-THKiXwS7BsbCBeThZ7D1oo3hBvReFK7kb2p7mEKgTn94HKWJrVnr';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>('.tl-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(2.4)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="section-container pt-22">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-panel-light rounded-panel p-6 sm:p-10"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-10">
          <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
            Wanna see
            <br />
            my experience?
          </div>
          <a href={BOOK_A_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark">
            Book a Call
          </a>
        </div>

        <div ref={timelineRef} className="relative max-w-205">
          <div className="absolute left-1.25 top-2.5 bottom-2.5 w-px bg-line" />
          <div
            ref={lineRef}
            className="absolute left-1.25 top-2.5 bottom-2.5 w-px bg-teal origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {experiences.map((exp, index) => (
            <motion.a
              key={exp.company}
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4 pl-10 pr-4.5 py-4 rounded-2xl hover:bg-surface hover:card-shadow transition-colors"
            >
              <span className="tl-dot absolute left-px top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal ring-4 ring-panel-light" />
              <div>
                <div className="eyebrow mb-1">{exp.company}</div>
                <div className="text-base font-extrabold">{exp.role}</div>
              </div>
              <div className="text-[13px] font-bold text-teal-dark whitespace-nowrap">{exp.period}</div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
