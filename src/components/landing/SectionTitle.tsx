interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

export default function SectionTitle({ eyebrow, title, description, tone = 'light', align = 'left' }: SectionTitleProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span
        className={`inline-flex items-center gap-3 font-display text-sm font-semibold uppercase italic tracking-[0.25em] ${
          isDark ? 'text-secondary-300' : 'text-secondary-500'
        }`}
      >
        <span className="h-3 w-8 -skew-x-12 bg-primary-500" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl font-extrabold italic uppercase leading-[1.05] sm:text-5xl lg:text-6xl ${
          isDark ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${isDark ? 'text-white/75' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
