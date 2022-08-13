import React from 'react';

const SiteLayout = ({ children, menu = c => null }) => {
  return (
    <div>
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};

export const Callout = ({ children }) => <div className="callout">{children}</div>;

export const BreakThings = ({ children }) => {
  throw new Error('we interntionally broke something.');
};

export default SiteLayout;
