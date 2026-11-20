import { ArrowUpRight, MapPin, Clock, Phone, MessageCircle, Droplets } from 'lucide-react';
import { MAP_LINK_URL, PHONE_DISPLAY, PHONE_HREF, buildWhatsappUrl } from '@/lib/site';

const HOURS = [
  { days: 'Sábado', time: '08:00 às 12:00' },
  { days: 'Domingo', time: 'Fechado' },
];

export default function Footer() {
  return (
    <footer id="contato" className="carbon scroll-mt-24 text-white">
      <div className="h-[3px] bg-gradient-to-r from-primary-500 via-primary-500 to-secondary-500" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <div className="clip-slant-sm flex h-20 w-20 items-center justify-center bg-primary-500 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]">
            <Droplets className="h-10 w-10 text-white" aria-hidden />
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold italic uppercase">
              MANO LAVAÇÃO
            </p>
            <p className="font-display text-sm font-semibold italic tracking-[0.25em] text-secondary-300">
              PALHOÇA • ESTÉTICA AUTOMOTIVA
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Lavagem detalhada, higienização interna e estética automotiva completa com cuidado de alto padrão para o seu veículo.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-display text-xl font-extrabold italic uppercase text-accent-400">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-4 text-base">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 text-white/85 transition hover:text-white"
                >
                  <Phone className="h-5 w-5 text-primary-400" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsappUrl('Olá! Gostaria de agendar uma lavagem na Mano Lavação Palhoça.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/85 transition hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden />
                  Chamar no WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/85">
                <MapPin className="h-5 w-5 text-secondary-400" aria-hidden />
                Palhoça, Santa Catarina
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-extrabold italic uppercase text-accent-400">
              Horário
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              {HOURS.map((item) => (
                <li key={item.days} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/50" aria-hidden />
                    {item.days}
                  </span>
                  <span className="font-semibold text-white">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-white/5 p-8">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-secondary-300">
              Nosso Endereço
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold italic uppercase">
              Palhoça, Santa Catarina
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Fácil acesso e espaço preparado para receber seu carro com total segurança e agilidade.
            </p>
          </div>
          <a
            href={MAP_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-slant-sm inline-flex items-center justify-center gap-2 bg-primary-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-primary-600"
          >
            Clique aqui e veja nosso endereço
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 pt-6 pb-24 text-center text-xs text-white/50 sm:pb-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2">
          <p>
            © {new Date().getFullYear()} Mano Lavação Palhoça. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-white/40">
            <span>Desenvolvido por André Roese - Contato 48991642144</span>
            <a
              href="https://wa.me/5548991642144"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de André Roese"
              className="inline-flex items-center justify-center rounded-full bg-white/5 p-1.5 text-emerald-400/80 transition hover:bg-emerald-500/20 hover:text-emerald-400"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
          </footer>
  );
}