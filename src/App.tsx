import { Routes, Route } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import Demo from '@/components/ui/demo';
import MethodPage from '@/pages/MethodPage';
import CustomersPage from '@/pages/CustomersPage';
import FaqPage from '@/pages/FaqPage';
import SignInPage from '@/pages/SignInPage';
import ApplyPage from '@/pages/ApplyPage';
import AboutPage from '@/pages/AboutPage';
import TeamPage from '@/pages/TeamPage';
import BlogPage from '@/pages/BlogPage';
import CareersPage from '@/pages/CareersPage';
import AdmissionPage from '@/pages/AdmissionPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import ErrorOne, { defaultErrorOneAction } from '@/components/ui/error-one';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route element={<RootLayout />}>
        <Route path="/method" element={<MethodPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
      <Route
        path="*"
        element={
          <ErrorOne
            code="404"
            title="No, no, that's right."
            description="This is a 404 page. And this page exists, no matter what anyone says."
            action={defaultErrorOneAction}
          />
        }
      />
    </Routes>
  );
}