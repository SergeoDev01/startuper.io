import Demo from '@/components/ui/demo';
import ErrorOne, { defaultErrorOneAction } from '@/components/ui/error-one';

export default function App() {
  // Any non-root path is a bad link — fall through to the 404 page.
  const path = window.location.pathname;
  if (path && path !== '/' && path !== '/index.html') {
    return (
      <ErrorOne
        code="404"
        title="No, no, that's right."
        description="This is a 404 page. And this page exists, no matter what anyone says."
        action={defaultErrorOneAction}
      />
    );
  }

  return <Demo />;
}
