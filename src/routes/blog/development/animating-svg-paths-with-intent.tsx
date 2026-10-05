import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/development/animating-svg-paths-with-intent")({
  head: () => ({
    meta: [
      { title: "Animating SVG Paths with Intent — Vinay" },
      { name: "description", content: "Stop guessing with stroke-dasharray. A practical guide to path animations that mean something." },
      { property: "og:title", content: "Animating SVG Paths with Intent — Vinay" },
      { property: "og:description", content: "Stop guessing with stroke-dasharray. A practical guide to path animations that mean something." },
    ],
  }),
  component: PostPage,
});

function PostPage() {
  return (
    <article className="overflow-hidden">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </article>
  );
}

function PostHeader() {
  return (
    <header className="relative min-h-[50vh] flex items-end overflow-hidden bg-blue text-white">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <span className="text-label uppercase tracking-widest block mb-4">DEVELOPMENT / DEC 8, 2024 / 6 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Animating SVG Paths with Intent
          </h1>
        </ScrollReveal>
      </div>
      <GeoShape shape="circle" color="orange" size={100} className="absolute bottom-20 right-20 opacity-60" />
    </header>
  );
}

function PostContent() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main max-w-3xl">
        <ScrollReveal>
          <div className="prose prose-black max-w-none space-y-8">
            <p className="text-body text-black/80 leading-relaxed text-lg">
              Most SVG animations are copy-pasted from CodePen. They look cool. They mean nothing.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              This post is about the other kind — animations where every timing decision, every easing curve, every stagger serves the user&apos;s understanding.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Core Technique: stroke-dasharray
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              You already know this. <code>stroke-dasharray: length; stroke-dashoffset: length;</code> animate offset to 0. Line draws itself.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              But the devil is in the <em>length</em>. Get it wrong and the animation stutters or races. Here&apos;s the reliable way:
            </p>
            <pre className="bg-black text-cream p-6 overflow-x-auto text-sm font-mono leading-relaxed"><code>{`const path = svgRef.current.querySelector('path');
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

// Animate with your preferred library
gsap.to(path, {
  strokeDashoffset: 0,
  duration: 1.5,
  ease: "power2.inOut"
});`}</code></pre>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              Timing with Purpose
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Fast (300ms) = feedback, confirmation, micro-interactions.<br />
              Medium (600–800ms) = transitions, reveals, drawing illustrations.<br />
              Slow (1200ms+) = hero moments, complex diagrams, onboarding.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Never use the same duration for everything. The duration IS the message.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              Easing Is Argument
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              <code>power2.out</code> — Natural, settling. Good for entrances.<br />
              <code>power2.inOut</code> — Balanced, deliberate. Good for drawing.<br />
              <code>elastic.out(1, 0.3)</code> — Playful, organic. Use sparingly.<br />
              <code>expo.inOut</code> — Cinematic, serious. Good for hero reveals.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              Stagger as Hierarchy
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              When drawing multiple paths, stagger reveals reading order. Top-to-bottom, left-to-right, center-out. The stagger IS the reading direction.
            </p>
            <pre className="bg-black text-cream p-6 overflow-x-auto text-sm font-mono leading-relaxed"><code>{`paths.forEach((path, i) => {
  gsap.fromTo(path, 
    { strokeDashoffset: path.getTotalLength() },
    { 
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.inOut",
      delay: i * 0.08  // 80ms stagger = reading rhythm
    }
  );
});`}</code></pre>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              A Real Example: Checkout Progress
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Three steps. Three paths. User completes step 1 &rarr; path 1 draws fast (300ms, power2.out). Step 2 &rarr; path 2 draws. Step 3 &rarr; path 3 draws + checkmark appears.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The animation argues: <em>You are here. This is done. Next is coming.</em>
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              If you can&apos;t explain why the animation takes 800ms instead of 600ms, you&apos;re decorating. Not designing.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PostFooter() {
  return (
    <footer className="py-16 md:py-24 bg-black text-cream text-center relative overflow-hidden">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="font-display text-hero md:text-[80px] leading-[0.9] tracking-tight mb-6">
            KEEP READING
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/blog/development/why-i-switched-from-gatsby-to-nextjs" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Gatsby to Next.js →
            </Link>
            <Link to="/blog/development/building-a-headless-cms-that-teams-actually-use" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Headless CMS →
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link to="/blog/development" className="text-label uppercase tracking-widest text-cream/60 underline underline-offset-4 hover:text-cream transition-colors">
            ← Back to Development posts
          </Link>
        </ScrollReveal>
      </div>
      <GeoShape shape="square" color="red" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </footer>
  );
}