"use client";

// [ADDED] ErrorBoundary component to catch runtime exceptions and render an authentic fallback UI
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center bg-cream-bg text-brown-900">
          <div className="max-w-md p-8 rounded-3xl bg-white border border-turmeric-400/60 shadow-xl space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-saffron-500/10 flex items-center justify-center text-saffron-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brown-900">
              Something went wrong / काहीतरी चूक झाली
            </h2>
            <p className="text-sm text-brown-700 font-sans">
              We encountered a temporary display issue. Please refresh the page to continue exploring Swadam Swadishta.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Page / रीफ्रेश करा</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
