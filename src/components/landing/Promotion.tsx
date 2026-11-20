import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buttonStyles } from '@/lib/buttonStyles';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { buildWhatsappUrl } from '@/lib/site';

const CHECKUP_ITEMS = [
  'Motor e vazamentos',
  'Freios e discos',
  'Suspensão e direção',
  'Bateria e alternador',
  'Pneus e calibragem',
  'Fluidos e filtros',
  'Luzes e sinalização',
  'Ar-condicionado',
  'Diagnóstico digital',
];

export default function Promotion() {
  return (
    <section id="promocao" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="clip-slant relative mx-auto max-w-7xl overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-navy-800 px-6 py-14 text-white shadow-[0_30px_70px_-24px_rgba(225,6,0,0.55)] sm:px-12 lg:px-16 lg:py-20"
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 -skew-x-12 bg-secondary-500/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-6 bottom-10 h-2 w-1/3 -skew-x-12 bg-white/70"
          aria-hidden
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-3 border border-white/60 px-4 py-2 font-display text-sm font-semibold uppercase italic tracking-[0.25em]">
              Promoção de entrada
            </span>
            <h2 className="font-display text-4xl font-extrabold italic uppercase leading-[1.02] sm:text-6xl">
              Check-up de 30 itens <span className="text-accent-400">+ Diagnóstico Digital</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/90">
              Uma revisão completa de ponta a ponta para conhecer a saúde do seu carro e planejar a próxima temporada com segurança.
            </p>

            <motion.ul variants={stagger} className="flex flex-wrap gap-2">
              {CHECKUP_ITEMS.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="bg-navy-900/60 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsappUrl('Olá! Quero garantir a minha vaga no Check-up de 30 Itens + Diagnóstico Digital.')}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles('light')}
              >
                <MessageCircle className="h-5 w-5 text-primary-500" aria-hidden />
                Garantir minha vaga no WhatsApp
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="clip-slant-sm border-2 border-white/40 bg-navy-900/50 p-8 backdrop-blur-sm">
              <p className="font-display text-7xl font-extrabold italic leading-none text-white">30</p>
              <p className="mt-2 font-display text-2xl font-extrabold italic uppercase">Itens verificados</p>
              <div className="mt-6 h-1 w-full bg-white/20">
                <div className="h-full w-full bg-accent-400" />
              </div>
              <p className="mt-4 text-sm text-white/80">Relatório digital enviado direto no seu WhatsApp.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
