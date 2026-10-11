import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, projects, education, certifications, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Modal Toolbar (hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Interactive Resume Preview
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-medium">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="p-8 sm:p-12 overflow-y-auto space-y-6 text-zinc-800 dark:text-zinc-200 print:text-black print:p-0 print:overflow-visible font-sans leading-normal">
          {/* Header */}
          <div className="text-center border-b border-zinc-200 dark:border-zinc-700 pb-6 print:border-zinc-400">
            <h1 className="text-3xl font-extrabold tracking-wide uppercase text-zinc-950 dark:text-white print:text-black">
              {personal.name}
            </h1>
            <p className="mt-1 text-base font-semibold text-sky-700 dark:text-sky-400 print:text-zinc-700">
              {personal.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 print:hidden" /> {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 print:hidden" /> {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 print:hidden" /> {personal.location}
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/devendra-reddy-bala-7bb416314
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/devendrareddy214
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 print:text-black leading-relaxed">
              {personal.bio} Demonstrated ability to deliver end-to-end solutions from responsive frontend interfaces to secure backend systems, with a strong foundation in Python, JavaScript, and SQL.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300 print:text-black">
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Programming Languages: </span>
                Python, JavaScript, SQL
              </div>
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Frontend Technologies: </span>
                React.js, HTML5, CSS3, Responsive Web Design
              </div>
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Backend Technologies: </span>
                Node.js, Express.js, Django, REST APIs
              </div>
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Databases: </span>
                MongoDB, MySQL, PostgreSQL
              </div>
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Cloud & DevOps: </span>
                AWS, Docker, CI/CD Pipelines
              </div>
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">Tools & Platforms: </span>
                Git, GitHub, Version Control
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>
                    {proj.title} <span className="font-normal text-zinc-500 print:text-zinc-700">| {proj.category}</span>
                  </span>
                  <span className="text-xs text-zinc-500 print:text-zinc-700 font-mono">{proj.period}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 print:text-black">
                  {proj.highlights.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                  <li>
                    <span className="font-semibold">Technologies: </span>
                    {proj.tech.join(', ')}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                    {edu.institution}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 print:text-black">
                    {edu.period}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 print:text-zinc-800 font-semibold">
                    {edu.score}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 print:text-black">
              {certifications.map((c, idx) => (
                <li key={idx}>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">{c.title}</span> – {c.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements & Leadership */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-400 print:text-black border-b border-zinc-200 dark:border-zinc-700 pb-1 print:border-zinc-400">
              Achievements & Leadership
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 print:text-black">
              {achievements.map((ach, idx) => (
                <li key={idx}>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 print:text-black">{ach.title}: </span>
                  {ach.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
