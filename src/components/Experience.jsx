import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Building, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
            Trajectory
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Experience & Education
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
            My academic foundation and hands-on professional experiences.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Work Experience & Roles
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h4>
                  <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.company}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-sky-500 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                      {edu.score}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mt-1">
                    {edu.institution}
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Key Coursework:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
