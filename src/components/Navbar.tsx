import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, waLink } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon to-neon-cyan text-ink-900 shadow-lg shadow-neon/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 18 L9 7 L12 13 L15 7 L20 18" />
            </svg>
          </span>
          <span className="font-display text-lg font-700 tracking-tight text-white">
            Pina<span className="text-neon-bright">Tech</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-500 text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-neon-cyan px-5 py-2.5 text-sm font-600 text-ink-900 shadow-lg shadow-neon/25 transition-all hover:shadow-neon/40 hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Orçamento
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-8">
          <ul className="flex flex-col gap-1 rounded-2xl glass border border-white/5 p-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-sm font-500 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-1">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-cyan px-4 py-3 text-sm font-600 text-ink-900"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
