import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { waLink, WHATSAPP_DISPLAY } from '@/lib/site';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 1200);
    const tip = window.setTimeout(() => setTooltip(true), 2600);
    const tipHide = window.setTimeout(() => setTooltip(false), 8000);
    return () => {
      clearTimeout(t);
      clearTimeout(tip);
      clearTimeout(tipHide);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        className={`mb-1 hidden max-w-[230px] origin-bottom-right rounded-2xl border border-white/10 bg-ink-800/95 px-4 py-3 text-sm text-slate-200 shadow-xl backdrop-blur-md transition-all duration-400 sm:block ${
          tooltip ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        }`}
      >
        <button
          onClick={() => setTooltip(false)}
          className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-ink-700 text-slate-400 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <span className="font-600 text-white">Precisa de ajuda?</span>
        <br />
        Fale com a gente no WhatsApp.
      </div>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp ${WHATSAPP_DISPLAY}`}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-[#25D366]/30 transition-all hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.4s]" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
