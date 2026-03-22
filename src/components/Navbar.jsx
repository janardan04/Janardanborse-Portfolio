import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaEye } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [countLoading, setCountLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Fetch & increment visitor count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(
          "https://api.counterapi.dev/v1/janardan04-portfolio/visits/up"
        );
        const data = await res.json();
        setVisitorCount(data.count);
      } catch {
        setVisitorCount(null);
      } finally {
        setCountLoading(false);
      }
    };
    fetchCount();
  }, []);

  const formatCount = (num) => {
    if (num === null) return "—";
    return num.toLocaleString();
  };

  const CounterBadge = ({ size = "sm" }) => (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full 
        bg-violet-100/80 dark:bg-violet-500/15 
        border border-violet-200 dark:border-violet-500/30 
        backdrop-blur-sm transition-all duration-300
        ${size === "sm" ? "text-xs" : "text-sm"}`}
      title="Total page views"
    >
      <FaEye className="text-violet-500 dark:text-violet-400" size={size === "sm" ? 12 : 14} />
      {countLoading ? (
        <span className="w-8 h-3 bg-violet-300/40 dark:bg-violet-500/30 rounded animate-pulse"></span>
      ) : (
        <span className="font-semibold text-violet-700 dark:text-violet-300 tabular-nums">
          {formatCount(visitorCount)}
        </span>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a href="#home" className="font-mono text-2xl font-bold text-gray-900 dark:text-white">
              {" "}
              Janardan<span className="text-violet-500"> Borse</span>{" "}
            </a>
            <CounterBadge size="sm" />
          </div>

          {/* Theme Toggle & Mobile Menu Container */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-400 transition"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 text-gray-900 dark:text-white flex flex-col justify-between"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="block h-[2px] w-full bg-current rounded"></span>
              <span className="block h-[2px] w-full bg-current rounded"></span>
              <span className="block h-[2px] w-full bg-current rounded"></span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            
            <button 
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};