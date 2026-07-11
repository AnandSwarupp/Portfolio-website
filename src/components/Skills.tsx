"use client";

import { motion } from "framer-motion";
import { skills, certifications } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#070912] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="What I work with" title="Skills" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-3 font-semibold text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-white">
            Certifications
          </h3>
          <ul className="mx-auto max-w-2xl space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
              >
                <span className="mt-1 text-cyan-400">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
