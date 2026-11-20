import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

const CYCLE_MS = 6000;

function formatLapTime(elapsedMs: number) {
  const seconds = (elapsedMs % CYCLE_MS) / 1000;
  return seconds.toFixed(2).padStart(5, '0');
}

export default function PitTimer() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(() => setElapsed(Date.now() - start), 50);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="clip-slant-sm inline-flex flex-wrap items-center gap-4 border border-secondary-400/70 bg-navy-900/70 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-3 border-r border-white/15 pr-4">
        <Timer className="h-5 w-5 text-secondary-300" aria-hidden />
        <span className="font-display text-2xl font-extrabold tabular-nums text-accent-400" aria-label="Cronômetro de pit stop">
          00:{formatLapTime(elapsed)}
        </span>
      </div>
      <p className="font-display text-base font-semibold uppercase italic tracking-wide text-white">
        Atendimento Rápido <span className="text-secondary-300">|</span> Diagnóstico em Tempo Recorde
      </p>
    </div>
  );
}
