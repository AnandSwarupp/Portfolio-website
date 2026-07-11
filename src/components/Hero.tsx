"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#05060a] via-[#0a0e17] to-[#05060a]"
    >
      <Hero3D />

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-32 md:flex-row md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
            {profile.title}
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-6 text-lg text-white/70">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-purple-500/30 shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)] sm:h-72 sm:w-72">
            {/*
              Drop your own photo or short looping video into /public/media
              (e.g. profile.jpg or intro.mp4), then swap this placeholder for:

              <video
                className="h-full w-full object-cover"
                src="/media/intro.mp4"
                poster="/media/profile.jpg"
                autoPlay muted loop playsInline
              />
            */}
            <span className="text-5xl font-bold text-white/80 sm:text-6xl">
              AS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
