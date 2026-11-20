import { Armchair, Car, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const WHATSAPP_NUMBER = '5548988498094';
export const PHONE_DISPLAY = '(48) 98849-8094';
export const PHONE_HREF = 'tel:+5548988498094';
export const MAP_LINK_URL =
  'https://www.google.com/maps/place/Mano+Lava%C3%A7%C3%A3o+Palho%C3%A7a/@-27.6433057,-48.6998708,13z/data=!4m10!1m2!2m1!1zbWFudSBsYXZhw6fDo28!3m6!1s0x9527359898254dd5:0x9b26f3b76b6280a9!8m2!3d-27.6405683!4d-48.6571104!15sCg5tYW51IGxhdmHDp8Ojb1oQIg5tYW51IGxhdmHDp8Ojb5IBCGNhcl93YXNomgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU0zYW1SSGQzSm5SUkFC4AEA-gEECAAQGw!16s%2Fg%2F11r9v_ll2x?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D';

export function buildWhatsappUrl(
  message = 'Olá! Gostaria de agendar uma lavação na Mano Lavação Palhoça.'
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Lavação Simples (Aplicativos e Táxi)',
    description: 'Lavação externa, aspiração interna e pretinho nos pneus com preço diferenciado.',
    icon: Car,
  },
  {
    title: 'Lavação Completa com Cera Líquida (Aplicativos e Táxi)',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e cera líquida.',
    icon: Droplets,
  },
  {
    title: 'Lavação Completa com Cera Pasta (Aplicativos e Táxi)',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e cera em pasta.',
    icon: Sparkles,
  },
  {
    title: 'Lavação Simples (Carro Particular)',
    description: 'Lavação externa detalhada, aspiração interna e pretinho nos pneus.',
    icon: Car,
  },
  {
    title: 'Lavação Completa com Cera Líquida (Carro Particular)',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e cera líquida.',
    icon: Droplets,
  },
  {
    title: 'Lavação Completa com Cera Pasta (Carro Particular)',
    description: 'Lavação externa, aspiração, silicone no painel, pretinho nos pneus e cera em pasta.',
    icon: ShieldCheck,
  },
  {
    title: 'Higienização Interna & Lavação de Bancos',
    description: 'Higienização interna completa e lavação profunda de bancos.',
    icon: Armchair,
  },
];

export const BOOKING_SERVICE_OPTIONS = SERVICES.map((service) => service.title);