import {
  Building2, Rocket, UserSquare, HeartPulse, ShoppingBag,
  Bot, MessageCircle, Search, ArrowUpRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/site';

const ICONS = {
  Building2, Rocket, UserSquare, HeartPulse, ShoppingBag,
  Bot, MessageCircle, Search,
} as const;

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute right-[-8%] top-10 h-[360px] w-[360px] rounded-full bg-neon/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
            Serviços
          </div>
          <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
            Tudo o que seu negócio precisa{' '}
            <span className="text-gradient">para crescer online</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400" data-reveal-delay="140">
            Soluções completas em desenvolvimento web, do site institucional à
            automação de atendimento — sempre com foco em resultado.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-300 hover:border-neon/30 hover:shadow-lg hover:shadow-neon/10"
                data-reveal-delay={(i % 4) * 80}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neon/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-neon/20 bg-neon/10 text-neon-bright transition-all duration-300 group-hover:scale-110 group-hover:border-neon/40">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-600 text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                  <ArrowUpRight className="mt-4 h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon-bright" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
