import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-teal-400/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500 dark:from-sky-400 dark:via-indigo-300 dark:to-cyan-400">{personal.name}</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300">
            {personal.title}
          </p>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <Download className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500">Connect:</span>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="p-2 rounded-lg hover:text-amber-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Code2 className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/70 dark:border-zinc-800/60 backdrop-blur-sm shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
