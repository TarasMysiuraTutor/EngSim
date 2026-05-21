import { Component } from "react";

/**
 * ErrorBoundary — перехоплює помилки у дочірніх компонентах.
 * Показує fallback UI замість білого екрану.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex items-center justify-center bg-[#0a0e27] text-gray-300">
            <div className="text-center max-w-md px-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {this.props.title || "Something went wrong"}
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                {this.props.message || "An unexpected error occurred. Please try refreshing the page."}
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
