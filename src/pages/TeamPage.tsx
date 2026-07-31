import { useTranslation } from '@/lib/i18n';
import { section, type } from '@/lib/design';
import FinalCtaSection from '@/components/ui/final-cta-section';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Badge } from '@/components/base-ui/badge';

const members = [
  {
    name: 'Sergeo Limta',
    role: 'Fondateur, Le Geek Créatif',
    avatar: '/assets/images/sergeo.webp',
    bioKey: 'teamPage.member1.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
  {
    name: 'James Turner',
    role: 'Brand Strategy Director',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop',
    bioKey: 'teamPage.member2.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
  {
    name: 'Emily Park',
    role: 'Digital Solutions Expert',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop',
    bioKey: 'teamPage.member3.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
  {
    name: 'Daniel Kim',
    role: 'Creative Marketing Partner',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop',
    bioKey: 'teamPage.member4.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
  {
    name: 'Sophia Williams',
    role: 'Experience Innovation Lead',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop',
    bioKey: 'teamPage.member5.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
  {
    name: 'Emma Wright',
    role: 'Product Design Manager',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&h=256&auto=format&fit=crop',
    bioKey: 'teamPage.member6.bio',
    socials: [
      { platform: 'instagram' as const, url: '#' },
      { platform: 'facebook' as const, url: '#' },
      { platform: 'twitter' as const, url: '#' },
    ],
  },
];

const socialIcon = (platform: string) => {
  switch (platform) {
    case 'instagram': return Instagram;
    case 'facebook': return Facebook;
    default: return Twitter;
  }
};

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-normal">
              {t("team.eyebrow")}
            </Badge>
            <h1 className={`${type.h2} mt-4`}>{t("teamPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("teamPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => {
              return (
                <div
                  key={i}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-muted ring-border/50 h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[var(--text-primary)]">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[var(--text-tertiary)]">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-body)]">
                    {t(member.bioKey)}
                  </p>
                  {member.socials && (
                    <div className="mt-4 flex items-center gap-3">
                      {member.socials.map((social, j) => {
                        const SIcon = socialIcon(social.platform);
                        return (
                          <a
                            key={j}
                            href={social.url}
                            className="text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                            aria-label={`${member.name} on ${social.platform}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SIcon className="h-4 w-4" strokeWidth={2} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}