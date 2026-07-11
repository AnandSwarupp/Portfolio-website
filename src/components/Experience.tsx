"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#070912] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="relative border-l border-white/10 pl-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
              <p className="text-xs font-medium tracking-wide text-cyan-400">
                {e.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {e.role}
              </h3>
              <p className="text-sm text-white/60">{e.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
