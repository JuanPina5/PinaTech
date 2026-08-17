import { MessageCircle, ArrowRight } from 'lucide-react';
import { waLink } from '@/lib/site';

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-neon/20 bg-gradient-to-br from-navy-800 via-ink-800 to-ink-900 p-10 sm:p-14 md:p-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-0 right-10 h-[240px] w-[240px] rounded-full bg-neon-cyan/15 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-5xl">
              Vamos criar o site ideal{' '}
              <span className="text-gradient">para o seu negócio?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Fale com a gente agora mesmo pelo WhatsApp e receba uma proposta
              personalizada para o seu projeto.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-neon to-neon-cyan px-8 py-4 text-sm font-700 text-ink-900 shadow-xl shadow-neon/30 transition-all hover:shadow-neon/50 hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar orçamento pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Resposta rápida, atendimento direto e sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
