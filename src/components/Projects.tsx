"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#05060a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-cyan-400">{p.subtitle}</p>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-white/60">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
