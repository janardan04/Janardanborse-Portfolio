import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to dark mode or system preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default dark
  });

  useEffect(() => {
    // Apply theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      
      <div 
        className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border border-violet-500/50 backdrop-blur-sm transition-transform duration-100 ease-out hidden md:block"
        style={{ transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px)` }}
      />
      <div 
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-500 transition-transform duration-75 ease-out hidden md:block"
        style={{ transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)` }}
      />
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-slate-50 text-gray-900 dark:bg-black dark:text-gray-100 relative`}
      >
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-fuchsia-400/20 dark:bg-fuchsia-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 cursor-default w-full overflow-x-hidden">
          <Navbar 
            menuOpen={menuOpen} 
            setMenuOpen={setMenuOpen} 
            isDarkMode={isDarkMode} 
            setIsDarkMode={setIsDarkMode} 
          />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;