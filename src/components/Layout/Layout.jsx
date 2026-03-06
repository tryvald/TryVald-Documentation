import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#1c4332]">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#030303] border-b border-[#2c2c2e] flex items-center px-4 md:px-8">
        {/* Logo on the left */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="TryVald" className="h-8 w-auto" />
            <span className="text-white font-bold hidden sm:inline">TryVald Docs</span>
          </Link>
        </div>

        {/* Centered navigation links */}
        <nav className="flex-1 flex justify-center items-center gap-6">
          <Link to="/changelog" className="text-gray-300 hover:text-[#ffdb89] text-sm font-mono">
            Changelog
          </Link>
          <Link to="/terms" className="text-gray-300 hover:text-[#ffdb89] text-sm font-mono">
            Terms
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-[#ffdb89] text-sm font-mono">
            Privacy
          </Link>
        </nav>

        {/* Search bar on the right */}
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search commands..."
            className="w-full px-4 py-2 rounded-full bg-[#121312] border border-[#2c2c2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdb89]"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 bg-[#1c4332] p-6 md:p-10">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}