export type ButtonVariant = 'primary' | 'secondary' | 'light';

const base =
  'btn-sheen clip-slant group inline-flex items-center justify-center gap-2 px-7 py-4 font-display text-lg font-extrabold italic uppercase tracking-wide transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 text-white shadow-[0_10px_30px_-8px_rgba(225,6,0,0.7)] hover:bg-primary-600 hover:shadow-[0_0_34px_rgba(225,6,0,0.85)]',
  secondary:
    'bg-secondary-500 text-white shadow-[0_10px_30px_-8px_rgba(24,101,242,0.7)] hover:bg-secondary-600 hover:shadow-[0_0_34px_rgba(24,101,242,0.8)]',
  light: 'bg-white text-navy-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:bg-secondary-50',
};

export function buttonStyles(variant: ButtonVariant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`.trim();
}
