import { Gauge, Search, Smartphone, Target } from 'lucide-react';

const PILLARS = [
  { icon: Smartphone, label: 'Experiência do usuário' },
  { icon: Gauge, label: 'Velocidade' },
  { icon: Search, label: 'Otimização SEO' },
  { icon: Target, label: 'Conversão de clientes' },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-navy-700/30 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 uppercase tracking-widest text-slate-400">
              Sobre o estúdio
            </div>
            <h2 className="reveal font-display text-3xl font-700 leading-tight text-white sm:text-4xl md:text-[2.75rem]" data-reveal-delay="80">
              Especialistas em sites que{' '}
              <span className="text-gradient">geram resultados</span>
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-slate-300 sm:text-lg" data-reveal-delay="140">
              Somos um estúdio especializado em desenvolvimento de sites modernos,
              rápidos, responsivos e personalizados. Cada projeto é construído com
              atenção minuciosa aos detalhes, unindo design sofisticado e tecnologia
              de ponta para entregar uma presença digital que transmite confiança e
              autoridade.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-slate-400" data-reveal-delay="200">
              Trabalhamos com foco em experiência do usuário, velocidade de
              carregamento, otimização para o Google (SEO) e conversão de clientes —
              para que seu site não seja apenas bonito, mas uma ferramenta real de
              crescimento para o seu negócio.
            </p>

            <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal-delay="260">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="group rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-neon/30 hover:bg-neon/5"
                >
                  <p.icon className="mb-3 h-5 w-5 text-neon-bright" />
                  <span className="text-xs font-500 leading-snug text-slate-300">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative" data-reveal-delay="120">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-ink-800 p-8 border-glow">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/20 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-5">
                {[
                  { n: '100%', l: 'Projetos personalizados' },
                  { n: '2s', l: 'Carregamento médio' },
                  { n: 'Top', l: 'Estrutura para SEO' },
                  { n: '24/7', l: 'Pronto para receber clientes' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/5 bg-ink-900/40 p-5"
                  >
                    <div className="font-display text-3xl font-700 text-gradient">
                      {s.n}
                    </div>
                    <div className="mt-1.5 text-xs leading-snug text-slate-400">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative mt-5 rounded-2xl border border-neon/15 bg-neon/5 p-5">
                <p className="text-sm leading-relaxed text-slate-300">
                  <span className="font-600 text-white">Do conceito à publicação</span> —
                  cuidamos de cada etapa para que seu site esteja pronto para crescer
                  no mercado digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
