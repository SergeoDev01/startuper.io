/**
 * Design-system tokens for the Startuperio landing page.
 *
 * These mirror the raw CSS variables in src/index.css and the recurring
 * Tailwind class strings used across the section components, so new
 * components (forms, 404, etc.) stay visually consistent without
 * re-typing long shadow / surface strings everywhere.
 */

/** Section surface + rhythm shared by every landing section. */
export const section = {
  base: 'w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32',
  container: 'mx-auto max-w-7xl',
};

/** Reusable type scale (eyebrow / heading / body) used by every section. */
export const type = {
  eyebrow:
    'text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]',
  h2: 'text-4xl font-medium leading-tight tracking-tight md:text-5xl',
  body: 'text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl',
};

/** Card surface used for bento tiles, info cards, and form panels. */
export const surface = {
  card: 'rounded-2xl border border-white/10 bg-white/[0.03] p-8',
  // Every text field shares h-11 (44px) + inline-flex so Input and Select
  // render at an identical height and baseline.
  field:
    'flex h-11 w-full items-center rounded-md border border-white/10 bg-white/[0.03] px-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]',
  // Icon-prefixed field: same h-11 so the inner input matches plain fields.
  iconField:
    'flex h-11 w-full items-center rounded-md border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] relative',
};

/** Primary call-to-action button — matches the hero / problem CTA at rest. */
export const ctaButton =
  'group inline-flex h-12 items-center gap-2 bg-[var(--cta-bg)] px-6 text-sm font-medium text-[var(--cta-text)] shadow-[inset_0_2px_0px_rgba(255,255,255,1),inset_0_-2px_0px_rgba(0,0,0,0.2)] transition-transform active:scale-[0.96]';

/** Accent (primary) button — used for submit / highlighted actions.
 *  h-12 to match the other page CTAs; explicit transition props (no `all`). */
export const accentButton =
  'inline-flex h-12 items-center justify-center gap-2 bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(0,0,0,0.3)] transition-[transform,background-color,box-shadow] active:scale-[0.96]';
