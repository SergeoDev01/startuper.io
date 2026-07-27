import { useScrollReveal } from '@/lib/animations';

import {
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fitPoints = [
  "Teams shipping real products, not just decks",
  "Orgs tired of context lost between tools",
  "Leaders who want signal, not status meetings",
  "Groups ready to run one continuous loop",
];

const notFitPoints = [
  "One-person side projects with no handoffs",
  "Teams that prefer their stack as-is",
  "Workloads that never repeat or compound",
  "Orgs not ready to change how they operate",
];

function CheckRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-primary">
        <RiCheckLine className="size-3 text-primary-foreground" aria-hidden />
      </span>
      <span className="text-sm text-foreground">{text}</span>
    </li>
  );
}

function CrossRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-muted">
        <RiCloseLine className="size-3 text-muted-foreground" aria-hidden />
      </span>
      <span className="text-sm text-muted-foreground">{text}</span>
    </li>
  );
}

export default function ComparisonBlock() {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 150 });

  return (
    <section ref={sectionRef} data-scroll className="flex w-full items-center justify-center bg-[var(--bg-secondary)] px-6 py-24 text-[var(--text-primary)]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-4 border-[#ff4f13]/30 text-[#ff4f13]">
            <RiShieldCheckLine data-icon="inline-start" />
            Who it’s for
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-wrap balance">
            Built for teams that move in loops, not in lines.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Determine if our continuous motion system is the right fit for your organization right now.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          <Card data-anim className="border-primary/30 ring-primary/25 flex flex-col justify-between bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">It’s a fit</CardTitle>
                <Badge variant="default">Recommended</Badge>
              </div>
              <CardDescription>
                For teams ready to compound impact and eliminate friction.
              </CardDescription>
            </CardHeader>

            <Separator />

            <CardContent className="pt-6 flex-1">
              <ul className="flex flex-col gap-4">
                {fitPoints.map((point) => (
                  <CheckRow key={point} text={point} />
                ))}
              </ul>
            </CardContent>

            <CardFooter className="border-t pt-6">
              <Button
                className="w-full"
              >
                Apply Now
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>

          <Card data-anim className="border border-white/10 bg-white/[0.03] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-muted-foreground">
                Not a fit (yet)
              </CardTitle>
              <CardDescription>
                When our continuous loop system isn't the right match.
              </CardDescription>
            </CardHeader>

            <Separator />

            <CardContent className="pt-6 flex-1">
              <ul className="flex flex-col gap-4">
                {notFitPoints.map((point) => (
                  <CrossRow key={point} text={point} />
                ))}
              </ul>
            </CardContent>

            <CardFooter className="border-t pt-6">
              <Button
                variant="secondary"
                className="w-full"
              >
                Learn More
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
