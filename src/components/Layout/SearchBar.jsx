import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import commands from "../data/commands"; // adjust path if different
import { useOnClickOutside, useEscape } from "./hooks/useOnClickOutside";

const DEBOUNCE_MS = 180;

export default function SearchBar({ className = "", autoFocus = false }) {
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));
  useEscape(() => setOpen(false));

  useEffect(() => {
    const id = setTimeout(() => setQuery(rawQuery.trim().toLowerCase()), DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [rawQuery]);

  const results = useMemo(() => {
    const all = Array.isArray(commands) ? commands : [];
    if (!query) return all.slice(0, 8);
    return all
      .filter((c) =>
        [c.name, c.description || "", c.category || ""].some((t) =>
          t.toLowerCase().includes(query)
        )
      )
      .slice(0, 15);
  }, [query]);

  const onKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && activeIdx >= 0) {
        navigateTo(results[activeIdx]);
        setOpen(false);
      }
    },
    [open, activeIdx, results]
  );

  return (
    <div ref={ref} className={`relative ${className}`} onKeyDown={onKeyDown}>
      <label className="sr-only" htmlFor="site-search">
        Search commands
      </label>
      <input
        id="site-search"
        value={rawQuery}
        onChange={(e) => {
          setRawQuery(e.target.value);
          setOpen(true);
          setActiveIdx(-1);
        }}
        onFocus={() => setOpen(true)}
        autoFocus={autoFocus}
        placeholder="Search commands…"
        className="w-full rounded-lg bg-[#2c2c2e] text-gold placeholder:text-gold/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
      />

      {open && results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 max-h-72 overflow-auto rounded-lg border border-white/10 bg-[#121312] shadow-xl z-40">
          {results.map((r, idx) => (
            <li key={r.name}>
              <button
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => {
                  navigateTo(r);
                  setOpen(false);
                }}
                className={`flex w-full items-start gap-3 px-4 py-3 text-left ${
                  idx === activeIdx ? "bg-white/10" : ""
                } focus:outline-none focus:ring-2 focus:ring-gold`}
              >
                <span className="text-gold font-semibold">{r.name}</span>
                <span className="text-sm text-white/70">{r.description || "No description"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function navigateTo(command) {
  const el = document.getElementById(command.category);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
