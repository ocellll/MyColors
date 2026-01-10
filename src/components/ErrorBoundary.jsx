
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
                        <h1 className="text-2xl font-bold text-red-500 mb-4">¡Ups! Algo salió mal 😔</h1>
                        <p className="text-gray-600 mb-6">Ha ocurrido un error inesperado al cargar la aplicación.</p>

                        {this.state.error && (
                            <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6 text-left overflow-auto max-h-40">
                                <code className="text-xs text-red-800 font-mono break-words">
                                    {this.state.error.toString()}
                                </code>
                            </div>
                        )}

                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors shadow-lg"
                        >
                            Recargar la página
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
