import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '24px',
            textAlign: 'center',
            background: '#050507',
            color: '#fff',
          }}
        >
          <div>
            <h1 style={{ fontWeight: 300, marginBottom: '12px' }}>Something went wrong</h1>
            <p style={{ opacity: 0.7, marginBottom: '24px' }}>Please reload the page to try again.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                background: '#F44A22',
                color: '#fff',
                border: 0,
                borderRadius: '99px',
                padding: '12px 28px',
                font: 'inherit',
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
