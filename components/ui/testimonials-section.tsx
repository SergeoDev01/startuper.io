import React from 'react';
import { useScrollReveal } from '@/lib/animations';
import { CountUp } from '@/components/CountUp';
import { Card } from '@/components/base-ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/base-ui/avatar';
import { CheckCircle, Heart, Repeat2 } from 'lucide-react';

function XLogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    name: 'Dan Abramov',
    username: '@dan_abramov',
    avatar: 'https://github.com/gaearon.png',
    text: "Honestly didn't expect onboarding to be this smooth. Everything just clicked without me reading docs.",
    date: 'Dec 5, 2025',
    replies: 21,
    retweets: 48,
    likes: 390,
  },
  {
    name: 'Evan You',
    username: '@youyuxi',
    avatar: 'https://github.com/yyx990803.png',
    text: 'The way it adapts to your workflow instead of forcing one is what sold me.',
    date: 'Dec 5, 2025',
    replies: 11,
    retweets: 34,
    likes: 265,
  },
  {
    name: 'Sindre Sorhus',
    username: '@sindresorhus',
    avatar: 'https://github.com/sindresorhus.png',
    text: 'Zero clutter, zero confusion. This is how tools should feel in 2025.',
    date: 'Dec 5, 2025',
    replies: 15,
    retweets: 41,
    likes: 320,
  },
  {
    name: 'Linus Torvalds',
    username: '@torvalds',
    avatar: 'https://github.com/torvalds.png',
    text: 'I care about efficiency. This actually removes friction instead of adding abstraction.',
    date: 'Dec 5, 2025',
    replies: 33,
    retweets: 72,
    likes: 610,
  },
  {
    name: 'David H. Hansson',
    username: '@dhh',
    avatar: 'https://github.com/dhh.png',
    text: "Feels opinionated in the right places. You don't waste time deciding trivial things.",
    date: 'Dec 5, 2025',
    replies: 14,
    retweets: 38,
    likes: 295,
  },
  {
    name: 'Theo Browne',
    username: '@t3dotgg',
    avatar: 'https://github.com/t3dotgg.png',
    text: 'Setup took minutes, but what surprised me is how fast the team adopted it.',
    date: 'Dec 5, 2025',
    replies: 27,
    retweets: 63,
    likes: 470,
  },
  {
    name: 'Jeremy Ashkenas',
    username: '@jashkenas',
    avatar: 'https://github.com/jashkenas.png',
    text: 'Replaced 3 tools with this. Not going back.',
    date: 'Dec 5, 2025',
    replies: 9,
    retweets: 22,
    likes: 205,
  },
  {
    name: 'Guillermo Rauch',
    username: '@rauchg',
    avatar: 'https://github.com/rauchg.png',
    text: 'Fast, predictable, and well-designed. You can tell a lot of thought went into the UX.',
    date: 'Dec 5, 2025',
    replies: 18,
    retweets: 50,
    likes: 380,
  },
  {
    name: 'Addy Osmani',
    username: '@addyosmani',
    avatar: 'https://github.com/addyosmani.png',
    text: 'Performance is top-tier. No loading anxiety, no weird delays — just instant feedback.',
    date: 'Dec 5, 2025',
    replies: 16,
    retweets: 44,
    likes: 340,
  },
];

export interface TestimonialsSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
}

export default function TestimonialsSection({
  eyebrow = 'Testimonials',
  title = 'Teams don’t go back after switching.',
  paragraph = 'Real feedback from people using it every day — not curated quotes.',
}: TestimonialsSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 100 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-black px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
            {eyebrow}
          </span>
          <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {title}
          </h2>
          <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
            {paragraph}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <Card
              key={idx}
              data-anim
              className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.4),0_2px_4px_0_rgba(0,0,0,0.3)] transition-[background-color,border-color] duration-300 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:border-t-[#ff4f13]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {t.name}
                      </span>
                      <CheckCircle className="h-3.5 w-3.5 fill-sky-500 text-sky-500" />
                    </div>

                    <span className="text-xs text-[var(--text-tertiary)]">
                      {t.username}
                    </span>
                  </div>
                </div>

                <XLogoIcon className="h-4 w-4 text-[var(--text-tertiary)]" />
              </div>

              <p className="text-base font-light leading-relaxed text-[var(--text-body)]">
                {t.text}
              </p>

              <div className="flex flex-row items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-light text-[var(--text-tertiary)]">
                  {t.date}
                </span>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-xs font-medium text-[var(--text-tertiary)] transition-colors hover:text-red-400">
                    <Heart className="h-4 w-4" />
                    <CountUp to={t.likes} stiffness={70} damping={20} />
                  </button>
                  <button className="flex items-center gap-1 text-xs font-medium text-[var(--text-tertiary)] transition-colors hover:text-green-400">
                    <Repeat2 className="h-4 w-4" />
                    <CountUp to={t.retweets} stiffness={100} damping={22} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
