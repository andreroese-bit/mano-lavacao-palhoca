import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Menu, X } from 'lucide-react';
const buildWhatsAppUrl = (msg: string) =>
  `https://wa.me/5548988498094?text=${encodeURIComponent(msg)}`;

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 bg-navy-800 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]' : 'py-5'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-primary-500 via-primary-500 to-secondary-500" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Manu Lavação Palhoça - Estética Automotiva"
        >
          <span className="clip-slant-sm flex h-11 w-11 items-center justify-center bg-primary-500 shadow-[0_0_22px_rgba(225,6,0,0.5)]">
            <Droplets className="h-6 w-6 text-white" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-extrabold italic tracking-wide text-white">
              MANO LAVAÇÃO
            </span>
            <span className="font-display text-[11px] font-semibold italic tracking-[0.25em] text-secondary-300">
              PALHOÇA • ESTÉTICA AUTOMOTIVA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de agendar uma lavagem na Mano Lavação Palhoça.')}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-slant-sm bg-primary-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-primary-600"
          >
            Agendar Agora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10 lg:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-800 px-5 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-neutral-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de agendar uma lavagem na Manu Lavação Palhoça.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 bg-primary-500 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}