import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/landing/SectionTitle';
import { buttonStyles } from '@/lib/buttonStyles';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const DIAGNOSTIC_IMAGE = 'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const CHECKS = [
  'Scanner que lê todos os módulos eletrônicos do veículo',
  'Leitura em tempo real de sensores, pressão e temperatura',
  'Relatório técnico digital com fotos e recomendações',
  'Relatório enviado direto no seu WhatsApp',
];

interface DiagnosticsProps {
  onBook: () => void;
}

export default function Diagnostics({ onBook }: DiagnosticsProps) {
  return (
    <section id="diagnostico" className="slant-top scroll-mt-24 bg-offwhite py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-3 -skew-x-3 border-2 border-secondary-500" aria-hidden />
          <div className="clip-slant-sm relative aspect-[4/3] overflow-hidden bg-navy-800">
            <img
              src={DIAGNOSTIC_IMAGE}
              alt="Mecânico utilizando tablet para diagnóstico computadorizado do veículo"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="clip-slant-sm absolute -bottom-6 right-6 bg-primary-500 px-5 py-3 text-white shadow-[0_16px_30px_-10px_rgba(225,6,0,0.6)]">
            <p className="font-display text-3xl font-extrabold italic leading-none">100%</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Diagnóstico digital</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="order-1 flex flex-col gap-8 lg:order-2"
        >
          <motion.div variants={fadeUp}>
            <SectionTitle
              eyebrow="Tecnologia de precisão"
              title="Diagnóstico Computadorizado"
              description="Antes de qualquer troca, a gente mede. Nosso scanner identifica falhas ocultas e mostra exatamente o que o seu carro precisa, sem achismos."
            />
          </motion.div>

          <motion.ul variants={stagger} className="flex flex-col gap-4">
            {CHECKS.map((check) => (
              <motion.li key={check} variants={fadeUp} className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-500" aria-hidden />
                <span className="text-base font-semibold text-navy-800 sm:text-lg">{check}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp}>
            <button type="button" onClick={onBook} className={buttonStyles('primary')}>
              Quero meu diagnóstico
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
