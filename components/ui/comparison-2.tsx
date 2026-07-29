import { useScrollReveal } from '@/lib/animations';
import { useTranslation } from '@/lib/i18n';

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
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 150 });

  const fitPoints = [
    t("comparison.fit1"),
    t("comparison.fit2"),
    t("comparison.fit3"),
    t("comparison.fit4"),
  ];

  const notFitPoints = [
    t("comparison.notFit1"),
    t("comparison.notFit2"),
    t("comparison.notFit3"),
    t("comparison.notFit4"),
  ];

  return (
    <section ref={sectionRef} data-scroll className="flex w-full items-center justify-center bg-[var(--bg-secondary)] px-6 py-24 text-[var(--text-primary)]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-4 border-[#ff4f13]/30 text-[#ff4f13]">
            <RiShieldCheckLine data-icon="inline-start" />
            {t("comparison.badge")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-wrap balance">
            {t("comparison.title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("comparison.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          <Card data-anim className="border-primary/30 ring-primary/25 flex flex-col justify-between bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{t("comparison.fit")}</CardTitle>
                <Badge variant="default">Recommended</Badge>
              </div>
              <CardDescription>
                {t("comparison.fitDesc")}
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
              <Button className="w-full">
                {t("comparison.cta")}
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>

          <Card data-anim className="border border-white/10 bg-white/[0.03] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-muted-foreground">
                {t("comparison.notFit")}
              </CardTitle>
              <CardDescription>
                {t("comparison.notFitDesc")}
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
              <Button variant="secondary" className="w-full">
                {t("comparison.ctaLearn")}
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
