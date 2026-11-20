import { motion } from 'framer-motion';
import { ArrowUpRight, Car, Droplets, Sparkles, ShieldCheck, Armchair } from 'lucide-react';
import SectionTitle from '@/components/landing/SectionTitle';
import { fadeUp, stagger, viewport } from '@/lib/motion';

interface ServicesProps {
  onBook: () => void;
}

const APP_TAXI_SERVICES = [
  {
    title: 'Lavação Simples',
    description: 'Lavação externa, aspiração interna e pretinho nos pneus. Agilidade para você voltar logo às corridas.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lavação Completa com Cera Líquida',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e acabamento com cera líquida.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lavação Completa com Cera Pasta',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e enceramento com cera em pasta.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Higienização Interna & Bancos',
    description: 'Higienização interna completa e lavação profunda de bancos para manter o conforto dos passageiros.',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
];

const PARTICULAR_SERVICES = [
  {
    title: 'Lavação Simples',
    description: 'Lavação externa detalhada, aspiração interna completa e pretinho nos pneus.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lavação Completa com Cera Líquida',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e proteção com cera líquida.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lavação Completa com Cera Pasta',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e brilho intenso com cera em pasta.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Higienização Interna & Bancos',
    description: 'Higienização interna completa e lavação profunda de bancos para renovar o interior do seu veículo.',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="servicos" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionTitle eyebrow="Nossos serviços" title="Pacotes de Lavação" />
          <p className="max-w-md text-base text-gray-600">
            Cuidado profissional para o seu carro com pacotes sob medida e tabela com preços diferenciados para motoristas de aplicativo e táxi.
          </p>
        </motion.div>

        <div className="mt-14">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b-2 border-navy-100 pb-3">
            <h3 className="font-display text-2xl font-extrabold italic uppercase text-navy-800 sm:text-3xl">
              Aplicativos e Táxi
            </h3>
            <span className="clip-slant-sm bg-secondary-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Preços Diferenciados para Aplicativos e Táxis
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {APP_TAXI_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={`app-${service.title}`}
                  variants={fadeUp}
                  className="group relative flex flex-col overflow-hidden border-2 border-secondary-500 bg-white shadow-[6px_6px_0_0_rgba(10,25,47,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-[0_20px_44px_-14px_rgba(0,149,255,0.35)]"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-navy-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center bg-secondary-500 text-white shadow-md transition duration-300 group-hover:bg-primary-500">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h4 className="font-display text-2xl font-extrabold italic uppercase leading-tight text-navy-800 transition duration-300 group-hover:text-primary-500">
                      {service.title}
                    </h4>
                    <p className="flex-1 text-base leading-relaxed text-gray-600">{service.description}</p>
                    <button
                      type="button"
                      onClick={onBook}
                      className="inline-flex items-center gap-2 self-start pt-2 font-semibold uppercase tracking-wide text-secondary-600 transition hover:text-primary-500"
                    >
                      Agendar este serviço
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </button>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary-500 transition duration-500 group-hover:scale-x-100" aria-hidden />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b-2 border-navy-100 pb-3">
            <h3 className="font-display text-2xl font-extrabold italic uppercase text-navy-800 sm:text-3xl">
              Carro Particular
            </h3>
            <span className="clip-slant-sm bg-primary-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Estética & Cuidado Completo
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PARTICULAR_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={`part-${service.title}`}
                  variants={fadeUp}
                  className="group relative flex flex-col overflow-hidden border-2 border-primary-500 bg-white shadow-[6px_6px_0_0_rgba(10,25,47,0.08)] transition duration-300 hover:-translate-y-1 hover:border-secondary-500 hover:shadow-[0_20px_44px_-14px_rgba(0,149,255,0.35)]"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-navy-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center bg-primary-500 text-white shadow-md transition duration-300 group-hover:bg-secondary-500">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h4 className="font-display text-2xl font-extrabold italic uppercase leading-tight text-navy-800 transition duration-300 group-hover:text-primary-500">
                      {service.title}
                    </h4>
                    <p className="flex-1 text-base leading-relaxed text-gray-600">{service.description}</p>
                    <button
                      type="button"
                      onClick={onBook}
                      className="inline-flex items-center gap-2 self-start pt-2 font-semibold uppercase tracking-wide text-primary-600 transition hover:text-secondary-600"
                    >
                      Agendar este serviço
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </button>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-secondary-500 transition duration-500 group-hover:scale-x-100" aria-hidden />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}