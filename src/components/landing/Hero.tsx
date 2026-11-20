import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero({ onBook }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy-800 pt-28 pb-20 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 opacity-95" />
      <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute -bottom-32 left-10 h-[420px] w-[420px] rounded-full bg-secondary-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-300"
          >
            <Sparkles className="h-4 w-4 text-secondary-400" aria-hidden />
            Desde 2020 em Palhoça • Estética Automotiva
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold italic uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            O brilho de <span className="text-primary-400">carro zero</span> e proteção máxima para o seu veículo.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            Lavagem detalhada, higienização interna, polimento técnico e vitrificação com produtos de alta performance e cuidado em cada detalhe.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onBook}
              className="clip-slant-sm group inline-flex items-center justify-center gap-3 bg-secondary-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-secondary-600"
            >
              Agendar uma Estética Agora
              <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" aria-hidden />
            </button>
            <a
              href="#servicos"
              className="clip-slant-sm inline-flex items-center justify-center border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}