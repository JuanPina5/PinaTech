import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute right-[-8%] top-1/4 h-[360px] w-[360px] rounded-full bg-navy-700/30 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
            Depoimentos
          </div>
          <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
            O que dizem{' '}
            <span className="text-gradient">nossos clientes</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400" data-reveal-delay="140">
            Em breve, avaliações reais de quem confiou no nosso trabalho. Seu
            depoimento pode ser o próximo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { name: 'Em breve', role: 'Cliente verificado' },
            { name: 'Em breve', role: 'Cliente verificado' },
            { name: 'Em breve', role: 'Cliente verificado' },
          ].map((t, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center transition-colors hover:border-neon/25"
              data-reveal-delay={i * 100}
            >
              <Quote className="mx-auto h-8 w-8 text-neon/40" />
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 text-neon-bright/40"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-500">
                Aguardando a avaliação deste cliente. Assim que o projeto for
                concluído, o depoimento aparecerá aqui.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 font-display text-sm font-600 text-slate-400">
                  ?
                </div>
                <div className="text-left">
                  <div className="text-sm font-600 text-slate-300">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
