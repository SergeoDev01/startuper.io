import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { section, type, surface, accentButton } from '@/lib/design';
import { Input } from '@/components/base-ui/input';
import { Textarea } from '@/components/base-ui/textarea';
import { Label } from '@/components/base-ui/label';
import { IoPerson, IoMail, IoSend } from 'react-icons/io5';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact:', { name, email, message });
  };

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("contactPage.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("contactPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("contactPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <div className={`${surface.card} p-6 md:p-8`}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">
                      {t("contactPage.name")}
                    </Label>
                    <div className={surface.iconField}>
                      <IoPerson className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <Input
                        id="name"
                        placeholder={t("contactPage.namePlaceholder")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-0 bg-transparent pl-10 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">
                      {t("contactPage.email")}
                    </Label>
                    <div className={surface.iconField}>
                      <IoMail className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contactPage.emailPlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-0 bg-transparent pl-10 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">
                      {t("contactPage.message")}
                    </Label>
                    <div className="rounded-md border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors hover:border-[#FF4202]/55 focus-within:border-[#FF4202]">
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={t("contactPage.messagePlaceholder")}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full resize-none border-0 bg-transparent px-3 py-2.5 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={`${accentButton} w-full sm:w-auto`}>
                    <IoSend className="h-4 w-4" />
                    {t("contactPage.submit")}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <div className={`${surface.card} p-6 md:p-8`}>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                    {t("contactPage.directContact")}
                  </span>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:hello@startuper.io"
                      className="flex items-center gap-3 text-sm text-[var(--text-body)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      <Mail className="h-4 w-4 text-[#FF4202]" />
                      hello@startuper.io
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-sm text-[var(--text-body)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      <Linkedin className="h-4 w-4 text-[#FF4202]" />
                      /startuperio
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-sm text-[var(--text-body)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      <Twitter className="h-4 w-4 text-[#FF4202]" />
                      @startuperio
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-[#FF4202] p-6 text-white md:p-8">
                  <h3 className="text-lg font-medium">{t("contactPage.responseTime")}</h3>
                  <p className="mt-2 text-3xl font-bold">{t("contactPage.responseTimeValue")}</p>
                  <p className="mt-2 text-sm opacity-80">
                    {t("contactPage.responseTimeNote")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}