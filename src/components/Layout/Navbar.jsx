import { useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import { useOnClickOutside, useEscape } from "./hooks/useOnClickOutside";

const links = [
  { to: "/changelog", label: "Changelog" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);
  useOnClickOutside(drawerRef, close);
  useEscape(close);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#121312]/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center gap-4 px-4 py-3">
        <span className="text-gold font-bold text-lg">TryVald Docs</span>

        <nav className="hidden md:flex gap-6 mx-auto text-gold">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block min-w-[260px]">
          <SearchBar />
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden h-11 w-11 grid place-items-center rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          {open ? <XMarkIcon className="h-6 w-6 text-gold" /> : <Bars3Icon className="h-6 w-6 text-gold" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-[#121312] shadow-2xl transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <span className="text-gold font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={close}
            className="h-10 w-10 grid place-items-center rounded focus:ring-2 focus:ring-gold"
          >
            <XMarkIcon className="h-6 w-6 text-gold" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-4 py-4 text-gold text-lg">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={close}
              className={({ isActive }) =>
                `py-2 rounded hover:bg-white/10 ${isActive ? "text-white" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 pb-6">
          <SearchBar autoFocus />
        </div>
      </div>
    </header>
  );
}
