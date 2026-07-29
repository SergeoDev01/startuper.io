import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Badge } from '@/components/base-ui/badge';
import { useTranslation } from '@/lib/i18n';

interface SocialLink {
  platform: 'instagram' | 'facebook' | 'twitter';
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  socials?: SocialLink[];
}

const defaultMembers: TeamMember[] = [
  {
    name: 'Sergeo Limta',
    role: 'Fondateur, Le Geek Créatif',
    avatar: '/assets/images/sergeo.webp',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'James Turner',
    role: 'Brand Strategy Director',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Emily Park',
    role: 'Digital Solutions Expert',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Daniel Kim',
    role: 'Creative Marketing Partner',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Sophia Williams',
    role: 'Experience Innovation Lead',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Emma Wright',
    role: 'Product Design Manager',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&h=256&auto=format&fit=crop',
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
];

export function Team4() {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-4 py-1.5 text-sm font-normal"
          >
            {t("team.eyebrow")}
          </Badge>

          <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {t("team.title")}
          </h2>

          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            {t("team.description")}
          </p>
        </div>

        {defaultMembers.filter((m) => m.name === 'Sergeo Limta').map((member, index) => (
          <div key={index} className="mx-auto mb-16 flex max-w-md flex-col items-center text-center">
            <div className="bg-muted ring-border/50 ring-offset-background relative mb-6 h-52 w-52 overflow-hidden rounded-full ring-2 ring-offset-8 transition-all duration-300 sm:h-56 sm:w-56 md:h-60 md:w-60">
              <img
                src={member.avatar}
                alt={`Portrait of ${member.name}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <h3 className="text-foreground mb-1 text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-base">
                {member.role}
              </p>
            </div>

            {member.socials && member.socials.length > 0 && (
              <div className="flex items-center gap-4">
                {member.socials.map((social, i) => {
                  const Icon =
                    social.platform === 'instagram'
                      ? Instagram
                      : social.platform === 'facebook'
                        ? Facebook
                        : Twitter;

                  return (
                    <a
                      key={i}
                      href={social.url}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} on ${social.platform}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {defaultMembers.filter((m) => m.name !== 'Sergeo Limta').map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="bg-muted ring-border/50 ring-offset-background group-hover:ring-border relative mb-6 h-36 w-36 overflow-hidden rounded-full ring-1 ring-offset-4 transition-all duration-300 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-40 lg:w-40 xl:h-44 xl:w-44">
                <img
                  src={member.avatar}
                  alt={`Portrait of ${member.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="text-center">
                <h3 className="text-foreground mb-1 text-lg font-medium">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {member.role}
                </p>
              </div>

              {member.socials && member.socials.length > 0 && (
                <div className="flex items-center gap-4">
                  {member.socials.map((social, i) => {
                    const Icon =
                      social.platform === 'instagram'
                        ? Instagram
                        : social.platform === 'facebook'
                          ? Facebook
                          : Twitter;

                    return (
                      <a
                        key={i}
                        href={social.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${member.name} on ${social.platform}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team4;
