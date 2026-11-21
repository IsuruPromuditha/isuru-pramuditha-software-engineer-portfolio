const MARQUEE_ITEMS = [
  'Selected Works',
  'Full-Stack Web Engineering',
  'Mobile Applications',
  'REST APIs & Microservices',
  'Generative AI Integration',
  'Database Architecture',
  'Sri Lanka',
];

export function MarqueeDivider() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-white/10 bg-[#08080A] py-3.5 select-none"
    >
      <div className="animate-marquee items-center gap-8 text-xs tracking-wide text-[#8E8D8A]">
        {repeated.map((item, idx) => (
          <span key={`${item}-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-[#E5A93C]/70">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
