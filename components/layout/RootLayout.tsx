import { Outlet } from 'react-router-dom';
import NavigationSection from '@/components/ui/navigation-section';
import { Footer7 } from '@/components/ui/footer-7';
import LogoIcon from '@/assets/logo-icon';

export default function RootLayout() {
  return (
    <div className="w-full">
      <NavigationSection />
      <main>
        <Outlet />
      </main>
      <Footer7
        logo={<LogoIcon className="size-8" />}
        brandName="Startuper.io"
        backgroundImage="/footer-bg.avif"
        brandWatermark="Startuper.io"
      />
    </div>
  );
}
