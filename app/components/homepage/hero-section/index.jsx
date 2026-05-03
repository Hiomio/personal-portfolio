'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const STATS = [
  { value: 10, suffix: '+', label: 'Projects\nCompleted',  color: 'text-pink-500'    },
  { value: 14, suffix: ' mo', label: 'Months of\nExperience', color: 'text-[#16f2b3]' },
  { value: 20, suffix: '+', label: 'Technologies\nUsed',   color: 'text-violet-400'  },
];

function useCountUp(ref, target, suffix = '', delay = 400) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      let start = 0;
      const step = target / 40;
      const interval = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.round(start) + suffix;
        if (start >= target) clearInterval(interval);
      }, 30);
    }, delay);
    return () => clearTimeout(timer);
  }, [ref, target, suffix, delay]);
}

function StatCard({ value, suffix, label, color }) {
  const ref = useRef(null);
  useCountUp(ref, value, suffix);
  return (
    <div className="flex flex-col items-center justify-center py-4 px-2 border-r border-indigo-900/30 last:border-r-0">
      <span ref={ref} className={`text-3xl font-bold leading-none mb-1 ${color}`}>0</span>
      <span className="text-[0.6rem] text-[#EFF3F4]/40 uppercase tracking-widest text-center whitespace-pre-line leading-relaxed">
        {label}
      </span>
    </div>
  );
}

function RightPanel() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['#ec4899', '#8b5cf6', '#16f2b3', '#6366f1', '#a78bfa'];
    const N = 55;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2.2 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    let animId;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;

      for (let i = 0; i < N; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;
        a.pulse += 0.03;

        for (let j = i + 1; j < N; j++) {
          const b = nodes[j];
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 100) * 0.32})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + Math.sin(n.pulse) * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.7 + Math.sin(n.pulse) * 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      const cx = canvas.width / 2, cy = canvas.height / 2;
      [50, 90, 135].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r + Math.sin(t * 0.7 + i) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139,92,246,${0.05 + Math.sin(t + i) * 0.03})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      [[70, t * 0.6, '#ec4899'], [115, -t * 0.38, '#16f2b3']].forEach(([r, angle, color]) => {
        const ox = cx + Math.cos(angle) * r;
        const oy = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(ox, oy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.9;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(ox, oy, 9, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.1;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
      </div>

      <div className="relative h-[260px] lg:h-[300px]">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[0.6rem] tracking-[0.2em] text-[#16f2b3]/45 uppercase pointer-events-none">
          full stack developer
        </div>
      </div>

      <div className="h-[1px] bg-indigo-900/40 mx-4" />

      <div className="grid grid-cols-3">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{' '}
            <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.leetcode} target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <SiLeetcode size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              role="button"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <RightPanel />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;