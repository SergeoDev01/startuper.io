import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { section, type, surface, accentButton } from '@/lib/design';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import { Link } from 'react-router-dom';
import { IoMail, IoLockClosed } from 'react-icons/io5';
import LogoIcon from '@/assets/logo-icon';

export default function SignInPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
  };

  return (
    <div className={`${section.base} flex min-h-screen items-center justify-center pt-16`}>
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-white">
            <LogoIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            {t("signIn.title")}
          </h1>
          <p className={`${type.body} mt-2 text-sm md:text-base`}>
            {t("signIn.subtitle")}
          </p>
        </div>

        <div className={`${surface.card} p-6 md:p-8`}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">
                {t("signIn.email")}
              </Label>
              <div className={surface.iconField}>
                <IoMail className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t("signIn.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-0 bg-transparent pl-10 outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[var(--text-primary)]">
                {t("signIn.password")}
              </Label>
              <div className={surface.iconField}>
                <IoLockClosed className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="password"
                  type="password"
                  placeholder={t("signIn.passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-0 bg-transparent pl-10 outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-[var(--text-tertiary)] transition-colors hover:text-[#FF4202]"
              >
                {t("signIn.forgotPassword")}
              </button>
            </div>

            <button type="submit" className={`${accentButton} w-full`}>
              {t("signIn.submit")}
            </button>
          </form>

          <div className="mt-6 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-[var(--text-tertiary)]">
              {t("signIn.notAdmitted")}{' '}
              <Link to="/apply" className="font-medium text-[#FF4202] transition-colors hover:text-[#FF4202]/80">
                {t("signIn.applyLink")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}