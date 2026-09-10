import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title: "Lab — dvinay.com" },
      { name: "description", content: "Geometric chaos. Experiments, micro-games, unused ideas." },
      { property: "og:title", content: "Lab — dvinay.com" },
      { property: "og:description", content: "Where the rules go to die. Pure experimentation." },
    ],
  }),
  component: Lab,
});

function Lab() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 10, stiffness: 50 });
  const springY = useSpring(mouseY, { damping: 10, stiffness: 50 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotationA = useTransform(springX, [0, 2000], [0, 720]);
  const rotationB = useTransform(springY, [0, 1000], [0, -720]);
  const scaleChaos = useTransform(springX, [0, 2000], [0.5, 2]);
  const scaleInverse = useTransform(scaleChaos, (v) => 3 - v);

  const redX = useTransform(springX, (v) => v * 0.5);
  const redY = useTransform(springY, (v) => v * 0.5);
  const orangeX = useTransform(springX, (v) => -v * 0.3);
  const orangeY = useTransform(springY, (v) => v * 0.8);
  const limeX = useTransform(springX, (v) => v * 0.8);
  const limeY = useTransform(springY, (v) => -v * 0.5);
  const inkX = useTransform(springX, (v) => -v * 0.6);
  const inkY = useTransform(springY, (v) => -v * 0.6);

  return (
    <div className="relative">
      <main
        ref={ref}
        data-cursor="diagonal"
        className="relative min-h-screen w-full overflow-hidden bg-electric"
      >
        {/* Memphis dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(var(--acid) 2px, transparent 2px)", backgroundSize: "40px 40px" }}
        />

        {/* Chaotic typography */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center mix-blend-exclusion">
          <motion.h1
            style={{ rotate: rotationA, scale: scaleChaos, fontSize: "20vw", lineHeight: 0.85 }}
            className="text-display font-bold uppercase tracking-tighter text-signal will-change-transform"
          >
            LAB
          </motion.h1>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center mix-blend-overlay">
          <motion.h1
            style={{ rotate: rotationB, scale: scaleInverse, fontSize: "20vw", lineHeight: 0.85 }}
            className="text-display font-bold uppercase tracking-tighter text-acid will-change-transform"
          >
            CHAOS
          </motion.h1>
        </div>

        {/* Roving Memphis shapes */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-signal mix-blend-screen will-change-transform"
          style={{ x: redX, y: redY }}
        />
        <motion.div
          className="absolute left-2/3 top-1/2 h-96 w-96 bg-orange mix-blend-hard-light will-change-transform"
          style={{ x: orangeX, y: orangeY, rotate: rotationA, clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <motion.div
          className="absolute left-1/3 top-3/4 h-72 w-72 border-8 border-acid mix-blend-color-dodge will-change-transform"
          style={{ x: limeX, y: limeY, rotate: rotationB }}
        />
        <motion.div
          className="absolute right-1/4 top-1/4 h-48 w-48 bg-ink mix-blend-difference will-change-transform"
          style={{ x: inkX, y: inkY }}
        />

        <div className="absolute bottom-8 left-8 z-30 text-display text-acid opacity-70 mix-blend-difference">
          Abandon structure. Move cursor.
        </div>
        <p className="absolute left-8 top-8 z-30 text-mono-label text-paper">LAB / WHERE RULES GO TO DIE</p>
      </main>

      {/* Experiment cards */}
      <section className="relative bg-paper py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-12 gap-4">
            {[
              { t: "Magnetic typography", c: "bg-acid", r: "rotate-2" },
              { t: "Self-drawing posters", c: "bg-signal", r: "-rotate-3" },
              { t: "GSAP physics dolls", c: "bg-electric text-paper", r: "rotate-1" },
              { t: "Voice-reactive grids", c: "bg-orange", r: "-rotate-2" },
              { t: "ASCII rain machine", c: "bg-ink text-paper", r: "rotate-6" },
              { t: "Micro-games (lol)", c: "bg-paper border-2 border-ink", r: "-rotate-1" },
            ].map((e, i) => (
              <div
                key={i}
                className={`col-span-12 md:col-span-4 ${e.c} ${e.r} p-8 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
              >
                <p className="text-mono-label opacity-70">EXP / {String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-display mt-6 text-3xl leading-tight">{e.t}</h3>
                <p className="mt-6 text-mono-label">SOON ↗</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-32 text-paper">
        <div className="mx-auto max-w-[1440px] px-6">
          <p className="text-mono-label text-paper/60">PS</p>
          <p className="text-display mt-4 max-w-3xl" style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: 0.95 }}>
            The Lab is where I think out loud. <span className="text-acid">Nothing here is finished.</span> That's the point.
          </p>
        </div>
      </section>
    </div>
  );
}
