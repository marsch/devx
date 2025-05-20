import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Placeholder components
const Home = () => <div className="p-4"><h1 className="text-2xl font-bold">Developer Portal</h1><p>Welcome to the Developer Portal</p></div>;
const APIs = () => <div className="p-4"><h1 className="text-2xl font-bold">API Catalog</h1><p>Browse available APIs</p></div>;
const Documentation = () => <div className="p-4"><h1 className="text-2xl font-bold">Documentation</h1><p>API documentation</p></div>;
const Dashboard = () => <div className="p-4"><h1 className="text-2xl font-bold">Dashboard</h1><p>Your API usage and keys</p></div>;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Developer Portal</span>
              </div>
              <nav className="ml-6 flex space-x-8">
                <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Home
                </Link>
                <Link to="/apis" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  APIs
                </Link>
                <Link to="/docs" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Documentation
                </Link>
                {isLoggedIn && (
                  <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Dashboard
                  </Link>
                )}
              </nav>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apis" element={<APIs />} />
            <Route path="/docs" element={<Documentation />} />
            {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Developer Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;