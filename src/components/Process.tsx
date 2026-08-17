import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import { PROCESS } from '@/lib/site';

const ICONS = { MessageSquare, PenTool, Code2, Rocket } as const;

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/3 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-neon/8 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
            Como funciona
          </div>
          <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
            Um processo claro{' '}
            <span className="text-gradient">do início ao fim</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400" data-reveal-delay="140">
            Transparência em cada etapa. Você acompanha tudo de perto, sem surpresas.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[p.icon as keyof typeof ICONS];
              return (
                <div
                  key={p.step}
                  className="reveal relative"
                  data-reveal-delay={i * 120}
                >
                  <div className="relative z-10 mx-auto grid h-[88px] w-[88px] place-items-center rounded-2xl border border-neon/25 bg-ink-800 text-neon-bright shadow-lg shadow-neon/10 transition-all duration-300 hover:border-neon/50 hover:shadow-neon/25 lg:mx-0">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-neon to-neon-cyan text-xs font-700 text-ink-900">
                      {i + 1}
                    </span>
                  </div>

                  <div className="mt-6 text-center lg:text-left">
                    <span className="font-display text-xs font-700 uppercase tracking-widest text-neon-bright/70">
                      Etapa {p.step}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-600 text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
