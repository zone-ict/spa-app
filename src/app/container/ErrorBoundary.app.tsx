import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // TODO: Log Error to Sentry or other error monitoring service
  componentDidCatch(/* error */) {}

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // TODO: Update styling based on UI/UX design
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button type="button" onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
