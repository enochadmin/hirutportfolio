import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Videos", to: "/videos" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Portfolio</p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hirut Habtewold</h1>
        </div>

        <ul className="hidden gap-6 rounded-full border border-slate-200/10 bg-slate-50/60 px-6 py-2 text-sm font-medium text-slate-700 shadow-2xl shadow-blue-500/5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 transition",
                    isActive ? "bg-slate-200 text-slate-900 dark:bg-white dark:text-slate-900" : "hover:text-slate-900 dark:hover:text-white/70",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="mailto:henok@example.com"
          className="hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] md:inline-flex"
        >
          Let's talk
        </a>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              // Sun icon (light)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 5a1 1 0 100-2 1 1 0 000 2zM6.22 6.22a1 1 0 10-1.44-1.44 1 1 0 001.44 1.44zM5 10a1 1 0 10-2 0 1 1 0 002 0zm1.22 3.78a1 1 0 10-1.44 1.44 1 1 0 001.44-1.44zM10 17a1 1 0 100 2 1 1 0 000-2zM13.78 13.78a1 1 0 101.44 1.44 1 1 0 00-1.44-1.44zM17 10a1 1 0 102 0 1 1 0 00-2 0zM13.78 6.22a1 1 0 101.44-1.44 1 1 0 00-1.44 1.44z"/>
                <path d="M10 14a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            ) : (
              // Moon icon (dark)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden rounded-full border border-slate-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:border-white/20 dark:text-white"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200/10 bg-white/95 dark:border-white/10 dark:bg-slate-950/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-xl px-4 py-3",
                      isActive
                        ? "bg-slate-200 text-slate-900 dark:bg-white dark:text-slate-900"
                        : "hover:bg-slate-100 dark:hover:bg-white/5",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}