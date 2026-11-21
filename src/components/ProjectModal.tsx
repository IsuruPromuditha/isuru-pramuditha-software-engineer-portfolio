import { ArrowLeft, ArrowRight, Code2, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/cvData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectModal({
  project,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        const idx = PROJECTS.findIndex((p) => p.id === project.id);
        const next = PROJECTS[(idx + 1) % PROJECTS.length];
        onSelectProject(next);
      } else if (event.key === 'ArrowLeft') {
        const idx = PROJECTS.findIndex((p) => p.id === project.id);
        const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
        onSelectProject(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0A0A0D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Project Preview Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#101015]">
          {!imgFailed ? (
            <img
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#141418] to-[#08080A] p-6">
              <Code2 className="h-8 w-8 text-[#E5A93C]" />
              <span className="font-serif text-xl text-[#F5F4F0]">
                {project.title}
              </span>
            </div>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0D] via-black/25 to-transparent"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-[#0A0A0D]/85 text-[#F5F4F0] transition-colors hover:border-[#E5A93C] hover:text-[#E5A93C] sm:top-4 sm:right-4 sm:h-10 sm:w-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#9D9C96]">
                <span className="font-mono tabular-nums text-[#E5A93C]">
                  Project {project.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{project.year}</span>
              </div>
              <h2
                id="project-modal-title"
                className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl"
              >
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-[#A1A09A]">{project.subtitle}</p>
            </div>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#E5A93C] px-4 py-2 text-xs font-semibold text-[#050505] transition-colors hover:bg-[#efc062] sm:min-h-[40px] sm:w-auto whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
            >
              <span>View Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-6 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xs font-medium text-[#8E8D8A]">Overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D7D5CE] sm:mt-2.5 sm:text-base sm:leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <h3 className="text-xs font-medium text-[#8E8D8A]">
                Engineering Highlights
              </h3>
              <ul className="mt-3 space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 text-sm leading-relaxed text-[#C9C7C0]"
                  >
                    <span className="font-mono text-xs tabular-nums text-[#E5A93C] shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-5 border-t border-white/10 pt-5 sm:grid-cols-2 sm:gap-6 sm:pt-6">
              <div>
                <h3 className="text-xs font-medium text-[#8E8D8A]">
                  Architecture Focus
                </h3>
                <p className="mt-2 text-sm text-[#F5F4F0]">
                  {project.architectureFocus}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-[#8E8D8A]">
                  Technology Stack
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F5F4F0]">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-medium text-[#D1CFC8] transition-colors hover:border-white/30 hover:text-[#F5F4F0] sm:min-h-[40px] sm:px-4 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Previous ({prevProject.index})</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-medium text-[#D1CFC8] transition-colors hover:border-white/30 hover:text-[#F5F4F0] sm:min-h-[40px] sm:px-4 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
            >
              <span>Next ({nextProject.index})</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
