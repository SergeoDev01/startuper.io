import { useScrollReveal } from '@/lib/animations';
import { FaStar, FaBolt, FaServer, FaRocket } from 'react-icons/fa';
import { SiVercel, SiProducthunt } from 'react-icons/si';
import { CountUp } from '@/components/CountUp';
import { useTranslation } from '@/lib/i18n';

export default function ProofSection() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-secondary)] px-6 py-20 font-sans text-[var(--text-primary)] md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span data-anim className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
          {t("proof.eyebrow")}
        </span>
        <h2 data-anim className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl text-wrap balance">
          {t("proof.title")}
        </h2>

        <p data-anim className="mx-auto mt-3 max-w-lg text-base font-light leading-relaxed text-[var(--text-body)]">
          {t("proof.paragraph")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <div
            data-anim
            className="group relative flex cursor-default items-center gap-3 overflow-hidden rounded-lg bg-white/[0.04] px-7 py-4 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.4),0_2px_4px_0_rgba(0,0,0,0.3)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white/[0.06]"
          >
            <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1500 group-hover:translate-x-[200%]" />
            <FaServer className="relative size-6 text-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
            <CountUp
              to={24}
              stiffness={50}
              damping={18}
              className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-[letter-spacing] duration-500 ease-out group-hover:tracking-normal md:text-3xl"
            />
            <span className="relative text-sm font-medium text-[var(--text-tertiary)]">
              {t("proof.metric1.label")}
            </span>
          </div>
          <div
            data-anim
            className="group relative flex cursor-default items-center gap-3 overflow-hidden rounded-lg bg-white/[0.04] px-7 py-4 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.4),0_2px_4px_0_rgba(0,0,0,0.3)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white/[0.06]"
          >
            <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1500 group-hover:translate-x-[200%]" />
            <FaRocket className="relative size-6 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
            <CountUp
              to={83}
              suffix="%"
              decimals={0}
              stiffness={70}
              damping={18}
              className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-[letter-spacing] duration-500 ease-out group-hover:tracking-normal md:text-3xl"
            />
            <span className="relative text-sm font-medium text-[var(--text-tertiary)]">
              {t("proof.metric2.label")}
            </span>
          </div>
          <div
            data-anim
            className="group relative flex cursor-default items-center gap-3 overflow-hidden rounded-lg bg-white/[0.04] px-7 py-4 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.4),0_2px_4px_0_rgba(0,0,0,0.3)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white/[0.06]"
          >
            <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1500 group-hover:translate-x-[200%]" />
            <FaBolt className="relative size-6 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
            <CountUp
              to={96}
              stiffness={90}
              damping={18}
              className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-[letter-spacing] duration-500 ease-out group-hover:tracking-normal md:text-3xl"
            />
            <span className="relative text-sm font-medium text-[var(--text-tertiary)]">
              {t("proof.metric3.label")}
            </span>
          </div>
        </div>

        <div data-anim className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[var(--text-tertiary)]">
          <div className="group flex cursor-default items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-300 hover:bg-white/[0.06] hover:text-[var(--text-primary)]">
            <SiProducthunt className="relative size-4 shrink-0 text-orange-500 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
            <span className="font-medium">{t("proof.endorse1")}</span>
            <span>{t("proof.endorse1name")}</span>
          </div>
          <div className="mx-1 h-4 w-px bg-white/15" />
          <div className="group flex cursor-default items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-300 hover:bg-white/[0.06] hover:text-[var(--text-primary)]">
            <FaStar className="relative size-4 shrink-0 text-amber-400 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
            <CountUp to={4.9} decimals={1} stiffness={80} damping={18} />
            <span>{t("proof.endorse2name")}</span>
          </div>
          <div className="mx-1 h-4 w-px bg-white/15" />
          <div className="group flex cursor-default items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-300 hover:bg-white/[0.06] hover:text-[var(--text-primary)]">
            <SiVercel className="relative size-4 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
            <span className="font-medium">{t("proof.endorse3")}</span>
            <span>{t("proof.endorse3name")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
