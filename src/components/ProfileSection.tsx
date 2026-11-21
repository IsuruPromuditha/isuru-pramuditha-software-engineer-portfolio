import { PROFILE_INFO } from '../data/cvData';

const DOMAIN_VERTICALS = [
  'Tourism Applications',
  'Vehicle Booking Systems',
  'Management Systems',
  'E-Commerce Platforms',
  'Healthcare Channeling Platforms',
];

export function ProfileSection() {
  return (
    <section id="profile" className="border-b border-white/10 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">01.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Profile &amp; Practice
            </h2>
            <p className="mt-3 text-sm text-[#8E8D8A]">
              Full-stack engineering grounded in clean architecture, database integrity, and responsive UI craft.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:col-span-8">
            <p className="text-base leading-relaxed text-[#E8E6DF] sm:text-xl sm:leading-relaxed">
              {PROFILE_INFO.summary}
            </p>
            <p className="text-sm leading-relaxed text-[#A1A09A] sm:text-base sm:leading-relaxed">
              {PROFILE_INFO.extendedSummary}
            </p>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs font-medium text-[#8E8D8A]">
                Domain Experience Across Individual &amp; Group Systems
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-[#D7D5CE] sm:gap-x-3">
                {DOMAIN_VERTICALS.map((domain, index) => (
                  <span key={domain} className="flex items-center gap-2.5 sm:gap-3">
                    <span>{domain}</span>
                    {index < DOMAIN_VERTICALS.length - 1 && (
                      <span aria-hidden="true" className="text-[#E5A93C]/70">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
