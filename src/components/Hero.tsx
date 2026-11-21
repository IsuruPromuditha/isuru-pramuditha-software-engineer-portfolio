import { ArrowDownRight, ArrowUpRight, FileText, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { KEY_METRICS, PROFILE_INFO, PROJECTS, ProjectItem } from '../data/cvData';
import { ambientSound } from '../utils/ambientSound';

interface HeroProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CONSTELLATION_PROJECTS = PROJECTS.slice(0, 6);

export function Hero({ onSelectProject }: HeroProps) {
  const [soundOn, setSoundOn] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<ProjectItem>(CONSTELLATION_PROJECTS[0]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let phase = 0;

    const renderWave = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = soundOn ? '#E5A93C' : 'rgba(245, 244, 240, 0.25)';
      ctx.lineWidth = 1.5;

      const amplitude = soundOn ? 6.5 : 1.5;
      const freq = soundOn ? 0.14 : 0.08;

      for (let x = 0; x <= width; x += 2) {
        const envelope = Math.sin((x / width) * Math.PI);
        const y =
          height / 2 +
          Math.sin(x * freq + phase) * amplitude * envelope +
          Math.cos(x * freq * 0.5 - phase * 0.7) * (amplitude * 0.45) * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += soundOn ? 0.09 : 0.02;
      rafId = window.requestAnimationFrame(renderWave);
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(229, 169, 60, 0.5)';
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      return;
    }

    rafId = window.requestAnimationFrame(renderWave);
    return () => window.cancelAnimationFrame(rafId);
  }, [soundOn]);

  const handleToggleSound = () => {
    const active = ambientSound.toggle();
    setSoundOn(active);
  };

  return (
    <section id="top" className="relative border-b border-white/10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Editorial Typographic Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wide text-[#A1A09A]">
                <span>{PROFILE_INFO.role}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <span>Full-Stack &amp; Mobile</span>
              </div>

              <h1
                className="mt-4 font-sans text-3xl font-semibold tracking-tight text-[#F5F4F0] sm:mt-5 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                Crafting resilient{' '}
                <span className="font-serif font-normal italic text-[#E5A93C]">
                  digital systems
                </span>{' '}
                from database to interface.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#B6B4AE] sm:mt-6 sm:text-base lg:text-[17px]">
                {PROFILE_INFO.summary}
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#projects"
                  onClick={() => ambientSound.playSubtleCue(587.33)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#E5A93C] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-colors duration-150 hover:bg-[#efc062] sm:w-auto whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>

                <a
                  href={PROFILE_INFO.cvPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#0D0D10] px-5 py-2.5 text-sm font-medium text-[#F5F4F0] transition-colors duration-150 hover:border-[#E5A93C]/60 hover:text-[#E5A93C] sm:w-auto whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
                >
                  <FileText className="h-4 w-4" />
                  <span>View Resume PDF</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={handleToggleSound}
                  aria-pressed={soundOn}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-transparent px-4 py-2 text-xs font-medium text-[#B6B4AE] transition-colors duration-150 hover:border-white/25 hover:text-[#F5F4F0] sm:w-auto whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
                >
                  {soundOn ? (
                    <Volume2 className="h-4 w-4 text-[#E5A93C]" />
                  ) : (
                    <VolumeX className="h-4 w-4 text-[#8E8D8A]" />
                  )}
                  <span>{soundOn ? 'Ambient Sound On' : 'Turn On Sound'}</span>
                  <canvas
                    ref={canvasRef}
                    width={46}
                    height={18}
                    aria-hidden="true"
                    className="block"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Project Constellation Stage */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex h-full min-h-[340px] flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0B0E] p-4 sm:min-h-[380px] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#A1A09A]">
                  Selected Works Constellation
                </span>
                <span className="font-mono text-xs tabular-nums text-[#E5A93C]">
                  01 — 06
                </span>
              </div>

              {/* Interactive SVG Constellation inspired by michaelgatt.com */}
              <div className="relative my-3 h-52 w-full select-none sm:my-4 sm:h-60 lg:h-56">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="0.35"
                    strokeDasharray="1.5 1.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="21"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="0.35"
                  />
                  {CONSTELLATION_PROJECTS.map((proj, idx) => {
                    const next = CONSTELLATION_PROJECTS[(idx + 1) % CONSTELLATION_PROJECTS.length];
                    const isHighlighted =
                      hoveredProject.id === proj.id || hoveredProject.id === next.id;
                    return (
                      <line
                        key={`${proj.id}-${next.id}`}
                        x1={proj.constellationCoords.x}
                        y1={proj.constellationCoords.y}
                        x2={next.constellationCoords.x}
                        y2={next.constellationCoords.y}
                        stroke={
                          isHighlighted
                            ? 'rgba(229, 169, 60, 0.45)'
                            : 'rgba(255, 255, 255, 0.08)'
                        }
                        strokeWidth={isHighlighted ? '0.45' : '0.3'}
                      />
                    );
                  })}
                </svg>

                {CONSTELLATION_PROJECTS.map((project) => {
                  const isActive = hoveredProject.id === project.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onMouseEnter={() => {
                        setHoveredProject(project);
                        ambientSound.playSubtleCue(261.63 + Number(project.index) * 32);
                      }}
                      onFocus={() => setHoveredProject(project)}
                      onClick={() => onSelectProject(project)}
                      style={{
                        left: `${project.constellationCoords.x}%`,
                        top: `${project.constellationCoords.y}%`,
                      }}
                      aria-label={`Inspect ${project.title}`}
                      className={`group absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg px-2 py-1 text-left transition-transform duration-150 sm:gap-2 sm:px-2.5 sm:py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] ${
                        isActive
                          ? 'z-10 scale-105 border border-[#E5A93C]/70 bg-[#141418] text-[#F5F4F0]'
                          : 'border border-white/10 bg-[#0E0E12]/90 text-[#A1A09A] hover:border-white/30 hover:text-[#F5F4F0]'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] tabular-nums sm:text-[11px] ${
                          isActive ? 'text-[#E5A93C]' : 'text-[#73726E]'
                        }`}
                      >
                        {project.index}
                      </span>
                      <span className="max-w-[80px] truncate text-[11px] font-medium sm:max-w-[115px] sm:text-xs whitespace-nowrap">
                        {project.title.split(' — ')[0].split(' – ')[0].replace(' Web App', '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Constellation Inspector Footer */}
              <div className="border-t border-white/10 pt-3.5 sm:pt-4">
                <div className="flex items-center justify-between gap-3 sm:items-baseline sm:gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#F5F4F0]">
                      {hoveredProject.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-[#9D9C96]">
                      {hoveredProject.architectureFocus}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProject(hoveredProject)}
                    className="inline-flex min-h-[36px] items-center gap-1 text-xs font-medium text-[#E5A93C] transition-colors hover:text-[#efc062] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-sm"
                  >
                    <span>Open Case</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Row Below Split */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:mt-14 sm:grid-cols-2 sm:gap-6 sm:pt-8 lg:grid-cols-4">
          {KEY_METRICS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs text-[#8E8D8A]">{item.label}</p>
              <p className="text-sm font-medium text-[#F5F4F0] tabular-nums">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
