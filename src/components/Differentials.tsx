import {
  Sparkles, Zap, Gem, Smartphone, TrendingUp,
  MessageCircle, LifeBuoy, ShieldCheck,
} from 'lucide-react';
import { DIFFERENTIALS } from '@/lib/site';

const ICONS = {
  Sparkles, Zap, Gem, Smartphone, TrendingUp,
  MessageCircle, LifeBuoy, ShieldCheck,
} as const;

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute right-1/4 top-0 h-[360px] w-[360px] rounded-full bg-navy-700/30 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
            Diferenciais
          </div>
          <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
            Por que escolher{' '}
            <span className="text-gradient">a PinaTech</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400" data-reveal-delay="140">
            Detalhes que fazem a diferença entre um site comum e uma ferramenta de
            crescimento real.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = ICONS[d.icon as keyof typeof ICONS];
            return (
              <div
                key={d.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-neon/30 hover:bg-neon/[0.06]"
                data-reveal-delay={(i % 4) * 80}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neon/20 to-neon-cyan/10 text-neon-bright transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-600 text-white">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {d.desc}
                    </p>
                  </div>
                </div>
                <span className="mt-4 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-neon/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
