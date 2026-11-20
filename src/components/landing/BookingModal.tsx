import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Car, CheckCircle2, Loader2, MessageCircle, X } from 'lucide-react';
import { buttonStyles } from '@/lib/buttonStyles';
import { supabase } from '@/lib/supabase';
import { BOOKING_SERVICE_OPTIONS, buildWhatsappUrl } from '@/lib/site';

interface BookingForm {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  preferred_date: string;
  notes: string;
}

const EMPTY_FORM: BookingForm = {
  name: '',
  phone: '',
  vehicle: '',
  service: '',
  preferred_date: '',
  notes: '',
};

const INPUT_CLASS =
  'w-full border-2 border-navy-100 bg-white px-4 py-3 text-base text-graphite placeholder:text-gray-400 transition focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100';

const LABEL_CLASS = 'flex flex-col gap-2 text-sm font-semibold uppercase tracking-wide text-navy-700';

function validate(form: BookingForm): string | null {
  if (form.name.trim().length < 2) return 'Informe seu nome completo.';
  const digits = form.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) return 'Informe um telefone com DDD, por exemplo (48) 99999-9999.';
  if (form.vehicle.trim().length < 2) return 'Informe o modelo e o ano do seu veículo.';
  if (!BOOKING_SERVICE_OPTIONS.includes(form.service)) return 'Escolha o serviço desejado.';
  if (form.notes.length > 500) return 'As observações podem ter no máximo 500 caracteres.';
  return null;
}

function formatDateForMessage(isoDate: string) {
  if (!isoDate) return 'a combinar';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

function buildConfirmationMessage(form: BookingForm) {
  return `Olá! Meu nome é ${form.name.trim()}. Veículo: ${form.vehicle.trim()}. Serviço: ${form.service}. Data desejada: ${formatDateForMessage(form.preferred_date)}. Gostaria de confirmar o agendamento na Mano Lavação.`;
}

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [form, setForm] = useState<BookingForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!open) return;
    setForm(EMPTY_FORM);
    setSubmitting(false);
    setSucceeded(false);
    setErrorMessage('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const updateField = (field: keyof BookingForm) => (event: { target: { value: string } }) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmitting(true);
    setErrorMessage('');
    const { error } = await supabase.from('bookings').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      vehicle: form.vehicle.trim(),
      service: form.service,
      preferred_date: form.preferred_date || null,
      notes: form.notes.trim() || null,
    });
    setSubmitting(false);

    if (error) {
      setErrorMessage('Não conseguimos enviar seu agendamento agora. Tente novamente ou chame no WhatsApp.');
      return;
    }
    setSucceeded(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Fechar agendamento"
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative flex max-h-[92svh] w-full max-w-xl flex-col overflow-hidden bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="carbon relative flex items-center justify-between px-6 py-5 text-white sm:px-8">
              <div>
                <p className="font-display text-sm font-semibold uppercase italic tracking-[0.25em] text-secondary-400">
                  Mano Lavação • Palhoça
                </p>
                <h2 id="booking-title" className="font-display text-3xl font-extrabold italic uppercase leading-tight">
                  Agende sua lavação
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-primary-500 hover:bg-primary-500"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500" aria-hidden />
            </div>

            <div className="overflow-y-auto px-6 py-7 sm:px-8">
              {succeeded ? (
                <div className="flex flex-col items-center gap-5 py-6 text-center">
                  <div className="clip-slant-sm flex h-20 w-20 items-center justify-center bg-primary-500 text-white shadow-[0_0_28px_rgba(0,149,255,0.45)]">
                    <Car className="h-10 w-10" aria-hidden />
                  </div>
                  <CheckCircle2 className="h-12 w-12 text-success-600" aria-hidden />
                  <h3 className="font-display text-3xl font-extrabold italic uppercase text-navy-800">Pedido recebido!</h3>
                  <p className="max-w-sm text-base leading-relaxed text-gray-600">
                    Nossa equipe vai confirmar o melhor horário com você.
                  </p>
                  <a
                    href={buildWhatsappUrl(buildConfirmationMessage(form))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles('secondary')}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Toque para confirmar no WhatsApp
                  </a>
                  <button type="button" onClick={onClose} className="text-sm font-semibold uppercase tracking-wide text-gray-500 hover:text-navy-800">
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <label className={`${LABEL_CLASS} sm:col-span-2`}>
                    Nome completo
                    <input
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={updateField('name')}
                      placeholder="Como podemos te chamar?"
                      className={INPUT_CLASS}
                      maxLength={100}
                      required
                    />
                  </label>

                  <label className={LABEL_CLASS}>
                    WhatsApp
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={updateField('phone')}
                      placeholder="(48) 99999-9999"
                      className={INPUT_CLASS}
                      maxLength={20}
                      required
                    />
                  </label>

                  <label className={LABEL_CLASS}>
                    Veículo (modelo e ano)
                    <input
                      type="text"
                      value={form.vehicle}
                      onChange={updateField('vehicle')}
                      placeholder="Ex.: Onix 2022"
                      className={INPUT_CLASS}
                      maxLength={100}
                      required
                    />
                  </label>

                  <label className={`${LABEL_CLASS} sm:col-span-2`}>
                    Serviço
                    <select value={form.service} onChange={updateField('service')} className={INPUT_CLASS} required>
                      <option value="" disabled>
                        Selecione o pacote desejado
                      </option>
                      {BOOKING_SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className={LABEL_CLASS}>
                    Data preferida
                    <input
                      type="date"
                      value={form.preferred_date}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={updateField('preferred_date')}
                      className={INPUT_CLASS}
                    />
                  </label>

                  <label className={LABEL_CLASS}>
                    Observações
                    <input
                      type="text"
                      value={form.notes}
                      onChange={updateField('notes')}
                      placeholder="Ex.: Motorista de app, mancha no banco..."
                      className={INPUT_CLASS}
                      maxLength={500}
                    />
                  </label>

                  {errorMessage && (
                    <p role="alert" className="border-l-4 border-error-500 bg-red-50 px-4 py-3 text-sm font-semibold text-error-600 sm:col-span-2">
                      {errorMessage}
                    </p>
                  )}

                  <div className="sm:col-span-2">
                    <button type="submit" disabled={submitting} className={`${buttonStyles('primary')} w-full`}>
                      {submitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden />}
                      {submitting ? 'Enviando...' : 'Confirmar agendamento'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}