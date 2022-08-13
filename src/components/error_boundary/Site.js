import React, { Suspense, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import Agreement from './Agreement';
import ErrorBoundary from './ErrorBoundary';

const Main = React.lazy(() => import('./Main'));

const Site = () => {
  const [agree, setAgree] = useState(false);
  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;
  return (
    <ErrorBoundary>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Site;
