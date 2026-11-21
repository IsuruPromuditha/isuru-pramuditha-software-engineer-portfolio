import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/cvData';
import { ambientSound } from '../utils/ambientSound';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-realtime', label: 'AI & Creative' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'fullstack', label: 'Travel & Hospitality' },
  { id: 'enterprise', label: 'Enterprise & Inventory' },
];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="border-b border-white/10 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">03.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Selected Projects &amp; Repositories
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[#8E8D8A]">
              Thirteen full-stack web applications, AI tools, e-commerce platforms, and enterprise inventory systems hosted on GitHub.
            </p>
          </div>

          {/* Functional Segmented Filter Controls: 2-col grid on mobile, clean inline row on tablet/desktop */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-[#0B0B0E] p-1 sm:inline-flex sm:flex-wrap sm:items-center"
          >
            {FILTER_TABS.map((tab, idx) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    ambientSound.playSubtleCue(349.23);
                  }}
                  className={`min-h-[40px] sm:min-h-[36px] rounded-lg px-3 py-1.5 text-center text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] ${
                    idx === 0 ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    isSelected
                      ? 'bg-[#E5A93C] text-[#050505]'
                      : 'text-[#A1A09A] hover:text-[#F5F4F0]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Showcase Grid with 4:3 Editorial Images */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isFeatured = activeCategory === 'all' && index === 0;
            const imgFailed = Boolean(failedImages[project.id]);

            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0D] transition-colors duration-200 hover:border-[#E5A93C]/50 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* 4:3 / 16:9 Visual Preview Frame */}
                  <button
                    type="button"
                    onClick={() => {
                      ambientSound.playSubtleCue(440);
                      onSelectProject(project);
                    }}
                    aria-label={`Open details for ${project.title}`}
                    className={`relative block w-full overflow-hidden border-b border-white/10 bg-[#101015] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E5A93C] ${
                      isFeatured ? 'aspect-[4/3] sm:aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    {!imgFailed ? (
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#141418] to-[#08080A] p-6 text-center">
                        <Code2 className="h-7 w-7 text-[#E5A93C]" />
                        <span className="font-serif text-lg text-[#F5F4F0]">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/75 via-transparent to-transparent"
                    />
                  </button>

                  <div className="p-5 pb-0 sm:p-6 sm:pb-0">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-xs text-[#8E8D8A] min-w-0">
                        <span className="font-mono tabular-nums text-[#E5A93C] shrink-0">
                          {project.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{project.categoryLabel}</span>
                      </div>
                      <span className="font-mono text-xs tabular-nums text-[#73726E] shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#F5F4F0] transition-colors group-hover:text-[#E5A93C] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#9D9C96]">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#B6B4AE] sm:mt-3.5">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-4 sm:p-6 sm:pt-5">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-xs leading-relaxed text-[#8E8D8A]">
                      {project.stack.join(' · ')}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          ambientSound.playSubtleCue(440);
                          onSelectProject(project);
                        }}
                        className="inline-flex min-h-[44px] sm:min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#F5F4F0] transition-colors hover:text-[#E5A93C] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-sm"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] sm:min-h-[40px] items-center gap-1.5 text-xs font-medium text-[#A1A09A] transition-colors hover:text-[#E5A93C] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-sm"
                      >
                        <span>GitHub Repo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
