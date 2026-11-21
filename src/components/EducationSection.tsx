import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '../data/cvData';

export function EducationSection() {
  return (
    <section id="education" className="border-b border-white/10 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">05.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Education &amp; Credentials
            </h2>
            <p className="mt-3 text-sm text-[#8E8D8A]">
              Academic degrees, specialized mobile training, and spoken languages.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 lg:col-span-8">
            {/* Academic Degrees */}
            <div>
              <h3 className="text-xs font-medium text-[#8E8D8A]">
                Academic Education
              </h3>
              <div className="mt-4 divide-y divide-white/10 border-t border-b border-white/10">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-baseline"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-[#F5F4F0]">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-sm text-[#A1A09A]">
                        {edu.institution} · {edu.detail}
                      </p>
                    </div>
                    <span className="font-mono text-sm tabular-nums text-[#E5A93C] shrink-0">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="rounded-2xl border border-white/10 bg-[#0A0A0D] p-5 sm:p-6">
                <h3 className="text-xs font-medium text-[#8E8D8A]">
                  Certifications
                </h3>
                <div className="mt-4 space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.title}>
                      <p className="text-base font-semibold text-[#F5F4F0]">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#E5A93C]">
                        {cert.issuer}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#A1A09A]">
                        {cert.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0A0A0D] p-5 sm:p-6">
                <h3 className="text-xs font-medium text-[#8E8D8A]">
                  Languages
                </h3>
                <div className="mt-4 divide-y divide-white/10">
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="text-base font-semibold text-[#F5F4F0]">
                        {lang.name}
                      </span>
                      <span className="text-xs text-[#9D9C96] sm:text-right">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
