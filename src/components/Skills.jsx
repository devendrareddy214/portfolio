import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Coffee,
  FileCode,
  FileType,
  Database,
  Atom,
  Palette,
  Layout,
  Globe,
  Layers,
  Smartphone,
  Server,
  Workflow,
  Network,
  Table,
  ShieldCheck,
  GitBranch,
  Box,
  Send,
  Terminal,
  Binary,
  BookOpen,
  Cloud,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Cloud,
  Coffee,
  Code2,
  Cpu,
  FileCode,
  FileType,
  Database,
  Atom,
  Palette,
  Layout,
  Globe,
  Layers,
  Smartphone,
  Server,
  Workflow,
  Network,
  Table,
  ShieldCheck,
  GitBranch,
  Box,
  Send,
  Terminal,
  Binary,
  BookOpen,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    ...skills.categories.map((c) => ({ id: c.id, name: c.name })),
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skills.categories
      : skills.categories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
            Technical Stack
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
            Languages, libraries, and tools I leverage to engineer performant and maintainable applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="mt-10 space-y-10">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200 border-l-2 border-sky-500 pl-3">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, idx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-sky-300 dark:hover:border-sky-700/60 transition-all hover:-translate-y-0.5 shadow-xs group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:bg-sky-50 dark:group-hover:bg-sky-950/40 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                          {skill.level}
                        </span>
                      </div>
                      <div className="mt-3 font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
