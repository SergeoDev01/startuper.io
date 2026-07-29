import { type ReactNode, useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { useTranslation } from '@/lib/i18n';

export interface Footer7Props {
  logo?: ReactNode;
  brandName?: string;
  backgroundImage?: string;
  brandWatermark?: string;
}

export function Footer7({
  logo,
  brandName = 'Startuper.io',
  backgroundImage,
  brandWatermark,
}: Footer7Props) {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-anim]');
    if (!targets.length) return;

    targets.forEach((child) => {
      const c = child as HTMLElement;
      c.style.opacity = '0';
      c.style.transform = 'translateY(24px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animate(
            el.querySelectorAll('[data-anim]'),
            {
              opacity: [0, 1],
              translateY: [24, 0],
              delay: stagger(80),
              duration: 700,
              ease: 'cubicBezier(0.16, 1, 0.3, 1)',
            } as never,
          );

          observer.disconnect();
        });
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const linkGroups = [
    {
      title: t("footer.column1.title"),
      links: [
        { label: t("footer.column1.link1"), href: '#' },
        { label: t("footer.column1.link2"), href: '#' },
        { label: t("footer.column1.link3"), href: '#' },
        { label: t("footer.column1.link4"), href: '#' },
      ],
    },
    {
      title: t("footer.column2.title"),
      links: [
        { label: t("footer.column2.link1"), href: '#method' },
        { label: t("footer.column2.link2"), href: '#' },
        { label: t("footer.column2.link3"), href: '#' },
        { label: t("footer.column2.link4"), href: '#' },
      ],
    },
    {
      title: t("footer.column3.title"),
      links: [
        { label: t("footer.column3.link1"), href: '#' },
        { label: t("footer.column3.link2"), href: '#' },
        { label: t("footer.column3.link3"), href: '#' },
      ],
    },
    {
      title: t("footer.column4.title"),
      links: [
        { label: t("footer.column4.link1"), href: '#' },
        { label: t("footer.column4.link2"), href: '#' },
        { label: t("footer.column4.link3"), href: '#' },
      ],
    },
  ];

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden ">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
        />
      )}

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div data-anim className="flex flex-col gap-8 pt-6 pb-10 lg:flex-row lg:items-end lg:justify-between lg:pt-10 lg:pb-14">
            <div className="flex max-w-xl flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF4202] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF4202]" />
                </span>
                <span className="text-sm font-medium text-white">
                  {t("footer.badge")}
                </span>
              </div>
              <h2 className="text-white text-3xl leading-tight font-light tracking-tight sm:text-4xl lg:text-5xl">
                {t("footer.headline")}
              </h2>
            </div>
            <form
              className="flex w-full max-w-md lg:w-[440px] shrink-0 items-center gap-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder={t("footer.inputPlaceholder")}
                className="border-white/15 bg-white/10 h-12 min-h-12 flex-1 rounded-l-md rounded-r-none border px-4 text-sm text-white placeholder:text-white/70 focus-visible:border-orange-600/50 focus-visible:ring-orange-600/30"
              />
              <Button
                type="submit"
                className="text-primary-foreground group flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-r-md rounded-l-none bg-[#FF4202] px-5 font-semibold shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-[background-color,transform]"
              >
                <span>{t("footer.buttonText")}</span>
              </Button>
            </form>
          </div>

          <div data-anim className="flex flex-col gap-10 pb-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex flex-1 items-center gap-3 lg:pt-1">
              {logo && (
                <div className="text-white flex h-6 w-6 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                  {logo}
                </div>
              )}
              <span className="text-white text-base font-medium tracking-tight">
                {brandName}
              </span>
            </div>

            {linkGroups.length > 0 && (
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4 lg:gap-x-16">
                {linkGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="flex flex-col gap-4">
                    <span className="text-sm font-medium tracking-wide text-white/90 uppercase">
                      {group.title}
                    </span>
                    <ul className="flex flex-col gap-3">
                      {group.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="hover:text-white text-sm text-white/70 transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {brandWatermark && (
          <div data-anim className="flex w-full items-center justify-center">
            <svg
              className="h-auto w-full transition-colors duration-300 select-none"
              viewBox={`0 0 ${Math.max(brandWatermark.length * 90, 400)} 110`}
              preserveAspectRatio="xMidYMid meet"
              aria-label={brandWatermark}
            >
              <text
                x="50%"
                y="105"
                dominantBaseline="alphabetic"
                textAnchor="middle"
                textLength="90%"
                lengthAdjust="spacing"
                className="fill-white/30 font-sans font-bold tracking-tighter"
                fontSize="160"
              >
                {brandWatermark}
              </text>
            </svg>
          </div>
        )}
      </div>
    </footer>
  );
}
