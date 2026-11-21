import { EXPERIENCES } from '../data/cvData';

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-white/10 bg-[#08080A] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">02.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Experience
            </h2>
            <p className="mt-3 text-sm text-[#8E8D8A]">
              Production engineering across web, mobile, and API quality assurance.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 lg:col-span-8">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="rounded-2xl border border-white/10 bg-[#0D0D10] p-5 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-2.5 border-b border-white/10 pb-5 sm:flex-row sm:items-baseline sm:gap-3 sm:pb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F4F0] sm:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-[#B6B4AE]">
                      {exp.specialization} · {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-sm tabular-nums text-[#E5A93C] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-4 sm:mt-6">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-3 text-sm leading-relaxed text-[#C9C7C0] sm:gap-4 sm:text-[15px]"
                    >
                      <span className="font-mono text-xs tabular-nums text-[#8E8D8A] shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
