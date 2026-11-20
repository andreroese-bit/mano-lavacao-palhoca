import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from '@/components/landing/SectionTitle';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo',
    role: 'Motorista de Aplicativo • Palhoça',
    text: 'Faço a lavação completa toda semana aqui. Preço justo pra quem roda de app, atendimento rápido e o carro sai cheiroso e brilhando.',
  },
  {
    name: 'Mariana Silveira',
    role: 'Carro Particular',
    text: 'Fiz a higienização interna com lavação completa dos bancos e parecia que eu tinha acabado de tirar o carro da concessionária. Recomendo muito!',
  },
  {
    name: 'Rafael Mendes',
    role: 'Carro Particular',
    text: 'A lavação completa com cera em pasta dá outro nível de brilho na pintura. Dá pra ver o capricho nos detalhes, nos pneus e no painel.',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionTitle
            eyebrow="Avaliações"
            title="Quem Lava Aqui Recomenda"
          />
          <p className="max-w-md text-base text-gray-600">
            A satisfação de motoristas particulares, de aplicativo e taxistas que confiam o carro à Mano Lavação desde 2020.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="flex flex-col justify-between gap-6 border border-navy-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-accent-500" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary-200" aria-hidden />
                </div>
                <p className="mt-5 text-base leading-relaxed text-gray-700">
                  “{item.text}”
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-display text-lg font-extrabold uppercase text-navy-800">
                  {item.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}