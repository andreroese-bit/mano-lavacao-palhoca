import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/site';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
      className="group fixed bottom-5 right-5 z-40 flex items-center sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-success-500/40" aria-hidden />
      <span className="relative mr-3 hidden translate-x-2 whitespace-nowrap bg-navy-800 px-4 py-2 font-display text-base font-extrabold italic uppercase tracking-wide text-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Fale com a gente
      </span>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-success-600 text-white shadow-[0_14px_30px_-8px_rgba(21,128,61,0.8)] transition duration-300 group-hover:scale-110 group-hover:bg-success-500">
        <MessageCircle className="h-8 w-8" aria-hidden />
      </span>
    </motion.a>
  );
}
