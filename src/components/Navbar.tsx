import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate?: () => void;
}

const NAV_LINKS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
    onNavigate?.();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line wordmark */}
        <a
          href="#top"
          onClick={handleLinkClick}
          className="font-serif text-lg font-medium tracking-tight text-[#F5F4F0] transition-colors hover:text-[#E5A93C] sm:text-xl whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-sm"
        >
          Isuru Pramuditha
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-5 text-sm font-medium text-[#A1A09A] lg:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="relative py-1 transition-colors duration-150 hover:text-[#F5F4F0] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#E5A93C] after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#E5A93C] px-4 py-2 text-xs font-semibold text-[#050505] transition-colors duration-150 hover:bg-[#efc062] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-[#F5F4F0] transition-colors hover:border-white/35 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#08080A] px-4 py-4 sm:px-6 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center justify-between border-b border-white/5 py-2 text-sm font-medium text-[#D1CFC8] transition-colors hover:text-[#E5A93C]"
              >
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E5A93C] px-4 py-2.5 text-sm font-semibold text-[#050505]"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
