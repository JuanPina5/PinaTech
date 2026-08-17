import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import ParticleField from '@/components/ParticleField';
import { waLink } from '@/lib/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/80 to-ink-900" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon/20 blur-[140px]" />
        <div className="absolute right-[-6%] top-[30%] h-[380px] w-[380px] rounded-full bg-neon-cyan/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-0">
          <ParticleField />
        </div>
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
        <div className="max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/10 px-4 py-1.5 text-xs font-500 tracking-wide text-neon-bright">
            <Sparkles className="h-3.5 w-3.5" />
            Desenvolvimento de sites premium
          </div>

          <h1 className="reveal font-display text-4xl font-700 leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]" data-reveal-delay="80">
            Transformamos ideias em{' '}
            <span className="text-gradient">sites inteligentes</span> que impulsionam seu negócio.
          </h1>

          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg" data-reveal-delay="160">
            Desenvolvemos sites modernos, rápidos e personalizados para empresas
            que desejam crescer no mercado digital.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal-delay="240">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-600 text-ink-900 transition-all hover:bg-neon-glow hover:text-ink-900 hover:shadow-lg hover:shadow-neon/30"
            >
              Ver Portfólio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-7 py-3.5 text-sm font-600 text-white transition-all hover:border-neon/60 hover:bg-neon/20"
            >
              <MessageCircle className="h-4 w-4 text-neon-bright" />
              Solicitar Orçamento
            </a>
          </div>

          <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400" data-reveal-delay="320">
            {[
              ['Design', 'Premium'],
              ['Performance', 'Veloz'],
              ['SEO', 'Otimizado'],
              ['WhatsApp', 'Integrado'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-bright shadow-neon" />
                <span className="text-slate-500">{k}</span>
                <span className="font-600 text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}
