import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deepanshu Agarwal | Full Stack Developer & AI Enthusiast',
  description: 'Full Stack Developer with 3+ years of experience in backend and frontend development. Proficient in React.js, Next.js, NestJS, Spring Boot, Java, Docker, AWS, Node.js, MongoDB, PostgreSQL, AI/ML, LLMs, and modern web technologies. 10+ internships completed with freelance experience.',
  keywords: [
    'Full Stack Developer',
    'React.js',
    'Next.js',
    'NestJS',
    'Spring Boot',
    'Java',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'AWS',
    'TanStack',
    'Web Developer',
    'Backend Developer',
    'Frontend Developer',
    'AI Developer',
    'LLMs',
    'OpenAI',
    'AI Integration',
  ],
  authors: [{ name: 'Deepanshu Agarwal' }],
  creator: 'Deepanshu Agarwal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepanshuagarwal.dev',
    siteName: 'Deepanshu Agarwal Portfolio',
    title: 'Deepanshu Agarwal | Full Stack Developer & AI Enthusiast',
    description: 'Full Stack Developer with 3+ years of experience in backend and frontend development. Also experienced in AI/ML and LLM integration.',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </main>
      <Chatbot />
    </>
  );
}