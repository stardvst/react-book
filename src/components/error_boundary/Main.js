import SiteLayout, { BreakThings, WaitThings } from './SiteLayout';
import ErrorBoundary from './ErrorBoundary';

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: 'white' }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

export default function Main() {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>
        {/* <BreakThings /> */}
        Welcome to the site
      </Callout>
      <ErrorBoundary>
        <WaitThings />
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}
