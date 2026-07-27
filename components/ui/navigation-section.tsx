import { useState } from 'react';
import LogoIcon from '@/assets/logo-icon';
import {
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';

interface NavLink {
  label: string;
  badge?: string;
}

interface SolutionColumn {
  heading?: string;
  links: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: 'Features' },
  { label: 'Developers', badge: 'API' },
  { label: 'Customers' },
  { label: 'Enterprise' },
];

const solutionColumns: SolutionColumn[] = [
  {
    links: [
      { label: 'Compute Engine', href: '#' },
      { label: 'Pipelines', href: '#' },
      { label: 'Webhooks', href: '#' },
      { label: 'CLI Tool', href: '#' },
    ],
  },
  {
    heading: 'Use Cases',
    links: [
      { label: 'Fraud Detection', href: '#' },
      { label: 'Personalized Search', href: '#' },
      { label: 'Predictive Analytics', href: '#' },
      { label: 'LLM Gateways', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'System Status', href: '#' },
    ],
  },
];

export interface NavigationSectionProps {
  logoText?: string;
  signInText?: string;
  getStartedText?: string;
}

export default function NavigationSection({
  logoText = 'Startuper.io',
  signInText = 'Sign in',
  getStartedText = 'Get started',
}: NavigationSectionProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
              {logoText}
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
                {link.badge && (
                  <span className="rounded-full bg-white/15 px-2 text-[10px] font-medium text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                Solutions
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 top-full w-[640px] pt-3">
                  <div className="grid grid-cols-4 gap-6 rounded-lg border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
                    {/* Column 1 — featured card */}
                    <div className="flex flex-col">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                        <Cpu className="h-5 w-5 text-white/80" />
                      </div>
                      <h4 className="mb-1 text-sm font-medium text-white">
                        Compute Engine
                      </h4>
                      <p className="mb-3 text-sm text-white/50">
                        Train and deploy models with infinite scale
                        infrastructure.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-white/80">
                          <Layers className="h-3.5 w-3.5" />
                          Pipelines
                        </span>
                        <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-white/80">
                          <GitBranch className="h-3.5 w-3.5" />
                          Webhooks
                        </span>
                        <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-white/80">
                          <Terminal className="h-3.5 w-3.5" />
                          CLI Tool
                        </span>
                      </div>
                    </div>

                    {/* Columns 2-4 */}
                    {solutionColumns.slice(1).map((col) => (
                      <div key={col.heading} className="flex flex-col gap-3">
                        {col.heading && (
                          <h4 className="text-xs uppercase tracking-wide text-white/40">
                            {col.heading}
                          </h4>
                        )}
                        {col.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ))}

                    {/* Featured callout */}
                    <a
                      href="#"
                      className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6"
                    >
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div>
                        <span className="mb-3 inline-block rounded-full border border-white/20 px-2 py-0.5 text-[10px] font-medium text-white">
                          Upcoming Webinar
                        </span>
                        <h4 className="mb-2 text-sm font-semibold text-white">
                          Building scalable AI pipelines
                        </h4>
                        <p className="text-sm text-white/60">
                          Join our engineers for a live teardown of the new
                          Compute Engine architecture.
                        </p>
                      </div>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-white">
                        Register now
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white active:scale-[0.96]">
              {signInText}
            </button>
            <button className="rounded-md bg-[#FF4202] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
              {getStartedText}
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
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
                {link.badge && (
                  <span className="rounded-full bg-white/15 px-2 text-[10px] font-medium text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="flex flex-col gap-1">
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                Solutions
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="ml-2 flex flex-col gap-2 border-l border-white/10 pl-4">
                  {solutionColumns.flatMap((col) => col.links).map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <button className="w-full justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 active:scale-[0.96]">
                {signInText}
              </button>
              <button className="w-full justify-center rounded-md bg-[#FF4202] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] active:scale-[0.96]">
                {getStartedText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
