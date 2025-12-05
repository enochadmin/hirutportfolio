// App.jsx (Single Page Portfolio - Modern & Professional)
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AnimatedBackdrop from "./components/AnimatedBackdrop";
import Videos from "./pages/Videos";

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
    } catch (e) {}
    // default to system preference
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <AnimatedBackdrop />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 md:px-8">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
          </AnimatePresence>
        </main>
        

        <footer className="border-t border-slate-200/10 dark:border-white/10 py-8 text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Hirut Habtewold. Built with React, Tailwind,
          and care.
        </footer>
      </div>
    </div>
  );
}