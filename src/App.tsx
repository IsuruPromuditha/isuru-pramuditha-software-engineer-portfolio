import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Hero } from './components/Hero';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Navbar } from './components/Navbar';
import { ProfileSection } from './components/ProfileSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { PROFILE_INFO, ProjectItem } from './data/cvData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F4F0]">
      <Navbar />

      <main>
        <Hero onSelectProject={setSelectedProject} />
        <MarqueeDivider />
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-[#050505] py-7 sm:py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-4 text-xs text-[#8E8D8A] sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {PROFILE_INFO.name} · {PROFILE_INFO.location}
          </p>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[36px] items-center transition-colors hover:text-[#F5F4F0]"
            >
              GitHub
            </a>
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[36px] items-center transition-colors hover:text-[#F5F4F0]"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              className="inline-flex min-h-[36px] items-center gap-1 text-[#E5A93C] transition-colors hover:text-[#efc062]"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
