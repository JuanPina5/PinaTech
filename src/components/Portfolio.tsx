import { ExternalLink, Check, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/site';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-[-6%] bottom-10 h-[400px] w-[400px] rounded-full bg-neon-cyan/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
            Portfólio
          </div>
          <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
            Projetos que entregamos{' '}
            <span className="text-gradient">com excelência</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400" data-reveal-delay="140">
            Cada projeto é único e desenvolvido sob medida. Veja alguns dos sites
            que já ajudaram negócios a crescer no digital.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-navy-800/70 to-ink-800/70 backdrop-blur-sm transition-all duration-400 hover:border-neon/30 hover:shadow-2xl hover:shadow-neon/10"
              data-reveal-delay={i * 120}
            >
              <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70`} />

              <div className="relative p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-[11px] font-600 uppercase tracking-wider text-neon-bright">
                      {p.category}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-700 leading-snug text-white sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {p.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-neon/15 text-neon-bright">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-500 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-600 text-ink-900 transition-all hover:bg-neon-glow hover:shadow-lg hover:shadow-neon/30"
                  >
                    Visualizar Projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center sm:flex-row" data-reveal-delay="120">
          <p className="text-sm text-slate-400">
            Novos projetos em desenvolvimento — em breve mais cases por aqui.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-neon-bright transition-colors hover:text-white"
          >
            Quero ser o próximo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
