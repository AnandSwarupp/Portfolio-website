"use client";

import { motion } from "framer-motion";
import { profile, education } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-[#05060a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center text-white/70"
        >
          I&apos;m an AI Developer based in {profile.location}, building
          production automation systems that combine LLMs, telephony,
          conversational AI, and real-time data pipelines. My work spans
          outbound sales automation, WhatsApp-based finance assistants, and
          real-time conversational avatars.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((e) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 text-sm text-white/60">{e.school}</p>
              <p className="mt-3 text-xs text-cyan-400">{e.period}</p>
              <p className="text-xs text-white/50">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
