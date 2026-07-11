"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
