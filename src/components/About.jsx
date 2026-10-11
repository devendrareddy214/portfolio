import React from 'react';
import { GraduationCap, Code, Award, Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;

  const focusPoints = [
    {
      title: "Full-Stack Development",
      desc: "Delivering end-to-end applications from responsive React frontends to robust Node.js/Express and Django backends.",
    },
    {
      title: "Relational & NoSQL Databases",
      desc: "Designing and managing structured schemas and performant queries across MongoDB, MySQL, and PostgreSQL.",
    },
    {
      title: "Cloud & DevOps Pipelines",
      desc: "Deploying applications with AWS, containerizing environments with Docker, and automating workflows with CI/CD.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
            About Me
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Building software with curiosity and purpose.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            <p>
              {personal.longBio}
            </p>
            <p>
              Throughout my academic journey, I have prioritized practical application alongside theoretical fundamentals. Whether architecting database schemas, crafting responsive UI components, or profiling sorting algorithms, I strive for clean, maintainable, and well-documented code.
            </p>

            {/* Core Focus Areas */}
            <div className="pt-4 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                Core Strengths & Focus
              </h3>
              <div className="grid gap-3">
                {focusPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education Highlight Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                    Current Degree
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {education[0]?.period}
                  </p>
                </div>
              </div>

              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {education[0]?.degree}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {education[0]?.institution}
              </div>

              <div className="mt-4 inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                {education[0]?.score}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Relevant Coursework:
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {education[0]?.courses.slice(0, 5).map((course, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm text-sm space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Location</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{personal.location}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Availability</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Immediate</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 dark:text-zinc-400">Preferred Roles</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Full-Stack Developer / SDE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
