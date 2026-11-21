import { Search } from 'lucide-react';
import { useState } from 'react';
import { SKILL_GROUPS } from '../data/cvData';

export function SkillsSection() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = SKILL_GROUPS.filter((group) => {
    if (!normalizedQuery) return true;
    return (
      group.category.toLowerCase().includes(normalizedQuery) ||
      group.items.some((item) => item.toLowerCase().includes(normalizedQuery))
    );
  });

  return (
    <section id="skills" className="border-b border-white/10 bg-[#08080A] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">04.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-3 text-sm text-[#8E8D8A]">
              Core languages, cloud platforms, data engines, QA automation suites, and engineering practices.
            </p>

            <div className="mt-5 sm:mt-6">
              <label htmlFor="skill-filter" className="sr-only">
                Filter technical skills
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#73726E]"
                />
                <input
                  id="skill-filter"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter stack (e.g. Flutter, AWS, Java)"
                  className="min-h-[44px] w-full rounded-lg border border-white/10 bg-[#0D0D10] py-2 pr-4 pl-10 text-sm text-[#F5F4F0] placeholder:text-[#6E6D68] focus:border-[#E5A93C] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {filteredGroups.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-[#0D0D10] p-6 text-center sm:p-8">
                <p className="text-sm text-[#A1A09A]">
                  No skills matched &ldquo;{query}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="mt-3 min-h-[40px] px-3 text-xs font-medium text-[#E5A93C] hover:underline"
                >
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {filteredGroups.map((group) => (
                  <div
                    key={group.category}
                    className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:py-6"
                  >
                    <div className="sm:col-span-4">
                      <h3 className="text-sm font-semibold text-[#F5F4F0]">
                        {group.category}
                      </h3>
                      <p className="mt-1 text-xs text-[#7E7D78]">{group.note}</p>
                    </div>

                    <div className="sm:col-span-8">
                      <p className="text-sm leading-relaxed text-[#D7D5CE]">
                        {group.items.map((item, idx) => {
                          const isMatch =
                            normalizedQuery.length > 0 &&
                            item.toLowerCase().includes(normalizedQuery);
                          return (
                            <span key={item}>
                              <span
                                className={
                                  isMatch
                                    ? 'font-semibold text-[#E5A93C]'
                                    : 'text-[#D7D5CE]'
                                }
                              >
                                {item}
                              </span>
                              {idx < group.items.length - 1 && (
                                <span aria-hidden="true" className="mx-1.5 text-[#5B5A56] sm:mx-2">
                                  ·
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
