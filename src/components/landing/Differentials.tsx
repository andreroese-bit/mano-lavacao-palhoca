import { motion } from 'framer-motion';
import { Coffee, Droplets, ShieldCheck, Timer } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const DIFFERENTIALS = [
  {
    code: '01',
    icon: Timer,
    title: 'Agilidade na Entrega',
    description:
      'Processo organizado para entregar seu carro limpo e brilhando no prazo combinado — ideal para quem trabalha com aplicativo ou táxi.',
  },
  {
    code: '02',
    icon: Droplets,
    title: 'Produtos de Alta Performance',
    description:
      'Shampoos neutros, ceras líquidas e em pasta, e revitalizadores que protegem a pintura e o interior sem agredir o veículo.',
  },
  {
    code: '03',
    icon: ShieldCheck,
    title: 'Cuidado em Cada Detalhe',
    description:
      'Desde 2020 em Palhoça cuidando de carros particulares e profissionais com atenção total na aspiração, bancos e acabamento.',
  },
  {
    code: '04',
    icon: Coffee,
    title: 'Espaço Confortável',
    description:
      'Ambiente preparado para receber você com conforto e atendimento direto pelo WhatsApp para agendar sem espera.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="carbon scroll-mt-24 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-display text-sm font-semibold uppercase italic tracking-[0.25em] text-secondary-400">
              Por que escolher a Mano Lavação
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold italic uppercase leading-tight text-white sm:text-5xl">
              Nosso Padrão de Qualidade
            </h2>
          </div>
          <p className="max-w-md text-base text-white/75">
            Mais do que uma simples lavação: tratamos o seu carro com técnica, produtos certos e respeito ao seu tempo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.code}
                variants={fadeUp}
                className="group relative flex flex-col gap-4 border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-primary-400 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold tracking-widest text-secondary-400">
                    {item.code}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center bg-primary-500 text-white transition duration-300 group-hover:bg-secondary-500">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <h3 className="mt-2 font-display text-2xl font-extrabold italic uppercase leading-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}