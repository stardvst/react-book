import React, { Component } from 'react';
import './styles.css';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromProps(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) return <ErrorScreen error={error} />;

    return children;
  }
}

export function ErrorScreen({ error }) {
  return (
    <div className="error">
      <h3>We're sorry... something went wrong</h3>
      <p>We can't process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}
