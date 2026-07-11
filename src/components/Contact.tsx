"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05060a] px-6 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400 uppercase">
            Let&apos;s talk
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-white/60">
            Open to opportunities in AI development, automation, and data
            engineering. Reach out via email or connect on GitHub / LinkedIn.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-sm text-white/60">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <span>{profile.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
