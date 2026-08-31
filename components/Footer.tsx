'use client';

import { ArrowUpRight } from 'lucide-react';

const BOOK_A_CALL_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1OSbpKV4SsoI-WsXAhRwa-THKiXwS7BsbCBeThZ7D1oo3hBvReFK7kb2p7mEKgTn94HKWJrVnr';
const RESUME_URL =
  'https://drive.google.com/file/d/19BPVrzLkMPmejLl2D1XrNtEiFRNGEOx4/view?usp=sharing';
export default function Footer() {
  return (
    <footer className="section-container pt-22 pb-10">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="card-surface p-6 sm:p-9 flex flex-col justify-between gap-6 min-h-52.5">
          <h2 className="text-2xl sm:text-[32px] font-extrabold leading-tight tracking-tight">
            Let&rsquo;s connect
            <br />
            and chat
          </h2>
          <a
            href="mailto:deepanshuagarwal9999@gmail.com"
            className="inline-flex items-center gap-3 text-[15px] font-bold self-start"
          >
            DEEPANSHUAGARWAL9999@GMAIL.COM
            <span className="w-8.5 h-8.5 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        <div className="rounded-card bg-teal p-6 sm:p-9 flex flex-wrap content-center gap-3.5 min-h-52.5">
          <span className="bg-white/15 text-white border border-white/40 text-[13px] font-bold px-5 py-2.5 rounded-full -rotate-3">
            FOLLOW ME!
          </span>
          <a
            href="https://www.linkedin.com/in/deepanshuagarwal999/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-ink text-[13px] font-bold px-5 py-2.5 rounded-full rotate-2"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/DeepanshuAgarwal999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 text-white border border-white/40 text-[13px] font-bold px-5 py-2.5 rounded-full -rotate-1"
          >
            GITHUB
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-ink text-[13px] font-bold px-5 py-2.5 rounded-full rotate-3"
          >
            RESUME
          </a>
          <a
            href="mailto:deepanshuagarwal9999@gmail.com"
            className="bg-white/15 text-white border border-white/40 text-[13px] font-bold px-5 py-2.5 rounded-full rotate-1"
          >
            EMAIL
          </a>
        </div>
      </div>

      <div className="card-surface px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-[13px]">
            D
          </span>
          <span className="font-extrabold text-[13px] tracking-wide uppercase">
            Deepanshu Agarwal
          </span>
        </div>
        <span className="text-[13px] text-faint">&copy;2026</span>
        <a href={BOOK_A_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark">
          Book a Call
        </a>
      </div>
    </footer>
  );
}
