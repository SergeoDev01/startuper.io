import { useState } from 'react';
import LogoIcon from '@/assets/logo-icon';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation, type Locale } from '@/lib/i18n';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'nav.method', href: '#method' },
  { label: 'nav.testimonials', href: '#testimonials' },
  { label: 'nav.faq', href: '#faq' },
];

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function NavigationSection() {
  const { t, locale, setLocale } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center text-white">
              <LogoIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              {t("nav.logo")}
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                onMouseEnter={() => setLangOpen(true)}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="text-xs">{locale === 'en' ? 'EN' : 'FR'}</span>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full pt-1"
                  onMouseLeave={() => setLangOpen(false)}
                >
                  <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl">
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLocale(l.code); setLangOpen(false); }}
                        className={`px-4 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                          locale === l.code ? 'text-white font-medium' : 'text-white/60'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white active:scale-[0.96]">
              {t("nav.signIn")}
            </button>
            <button className="rounded-md bg-[#FF4202] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
              {t("nav.applyNow")}
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/60 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {t(link.label)}
              </a>
            ))}

            {/* Language switcher mobile */}
            <div className="flex gap-2 px-3 py-2">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLocale(l.code); setMobileOpen(false); }}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    locale === l.code
                      ? 'bg-white/15 text-white'
                      : 'text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <button className="w-full justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 active:scale-[0.96]">
                {t("nav.signIn")}
              </button>
              <button className="w-full justify-center rounded-md bg-[#FF4202] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] active:scale-[0.96]">
                {t("nav.applyNow")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
