'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, CreditCard } from 'lucide-react';

const stackWords = ['React', 'Next.js', 'Node.js', 'NestJS', 'MongoDB', 'AWS'];

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Frontend Development',
    description:
      'React, Next.js and TypeScript interfaces that feel fast and stay maintainable — animated with Framer Motion where it earns its keep.',
  },
  {
    icon: Server,
    number: '02',
    title: 'Backend & APIs',
    description:
      'Scalable REST APIs and services in Node.js, NestJS and Spring Boot, built as clean microservices that hold up under real traffic.',
  },
  {
    icon: Database,
    number: '03',
    title: 'Database & DevOps',
    description:
      'MongoDB and PostgreSQL data layers, Docker containers and AWS deploys — the plumbing that keeps a product running quietly.',
  },
  {
    icon: CreditCard,
    number: '04',
    title: 'Payments & Integrations',
    description:
      'Stripe, Razorpay and Easebuzz payment flows, plus real-time features over WebSockets — wired up correctly the first time.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref}>
      {/* Mission banner */}
      <div className="px-5 sm:px-8 md:px-10 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-310 mx-auto rounded-panel bg-teal p-7 sm:p-10 lg:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white max-w-205 leading-snug tracking-tight mb-7">
            My mission is to help startups and product teams turn ambitious ideas into fast,
            reliable software their users actually trust.
          </h2>
          <div className="flex items-center gap-8 flex-wrap pt-5 border-t border-white/25">
            {stackWords.map((word) => (
              <span key={word} className="font-extrabold text-[15px] text-white/80">
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div id="services" className="section-container pt-18">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight">
            How Can I
            <br />
            Assist You?
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-surface card-hover card-shadow p-6.5 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9.5 h-9.5 rounded-full bg-lavender-tint flex items-center justify-center text-[#7C6FE0]">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.6} />
                    </div>
                    <span className="text-[13px] font-bold text-[#B8B7BC]">
                      {service.number}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                  <div className="text-[17px] font-extrabold">{service.title}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
