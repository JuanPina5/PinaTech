import { MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';
import { NAV_LINKS, waLink, WHATSAPP_DISPLAY, INSTAGRAM_URL, EMAIL } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-900">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 neon-divider" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon to-neon-cyan text-ink-900 shadow-lg shadow-neon/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18 L9 7 L12 13 L15 7 L20 18" />
                </svg>
              </span>
              <span className="font-display text-lg font-700 text-white">
                Pina<span className="text-neon-bright">Tech</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Desenvolvimento de sites modernos, rápidos e personalizados para
              empresas que desejam crescer no mercado digital.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon-bright"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-neon-bright transition-colors group-hover:border-neon/40">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-neon-bright transition-colors group-hover:border-neon/40">
                    <Instagram className="h-4 w-4" />
                  </span>
                  @pinatech
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-neon-bright transition-colors group-hover:border-neon/40">
                    <Mail className="h-4 w-4" />
                  </span>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-600 uppercase tracking-wider text-white">
              Redes sociais
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-neon/40 hover:text-neon-bright"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-neon/40 hover:text-neon-bright"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="E-mail"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-neon/40 hover:text-neon-bright"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="#inicio"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-neon-bright"
            >
              Voltar ao topo
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} PinaTech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Desenvolvido com atenção a cada detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}
