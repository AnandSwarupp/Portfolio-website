"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <motion.a
          href="#top"
          className="font-semibold tracking-tight text-white"
          animate={{
            opacity: scrolled ? 0 : 1,
            y: scrolled ? -12 : 0,
          }}
          style={{ pointerEvents: scrolled ? "none" : "auto" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Anand<span className="text-cyan-400">.</span>Swarup
        </motion.a>

        <motion.nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          animate={{ top: scrolled ? 10 : 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.ul
            className="flex items-center gap-1 rounded-full text-sm text-white/70 backdrop-blur-xl"
            animate={{
              backgroundColor: scrolled
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.08)",
              boxShadow: scrolled
                ? "0 8px 30px rgba(0,0,0,0.55)"
                : "0 8px 30px rgba(0,0,0,0.35)",
              paddingLeft: scrolled ? 6 : 8,
              paddingRight: scrolled ? 6 : 8,
              paddingTop: scrolled ? 6 : 8,
              paddingBottom: scrolled ? 6 : 8,
              scale: scrolled ? 0.94 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.nav>

        <button
          className="rounded-full bg-white/10 p-2 text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-2 rounded-3xl bg-white/10 px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 text-white/80">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
