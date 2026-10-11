import React from 'react';
import { Award, Trophy, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, achievements } = portfolioData;

  return (
    <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
            Credentials
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Certifications & Honors
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
            Verified course completions, competitive programming milestones, and academic awards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between shadow-xs hover:border-sky-300 dark:hover:border-sky-800 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Issued by {cert.issuer}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Notable Achievements Row */}
        <div className="mt-12 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Notable Achievements & Coding Stats</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs"
              >
                <div className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </div>
                <div className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
