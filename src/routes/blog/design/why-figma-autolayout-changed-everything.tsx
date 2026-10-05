import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/design/why-figma-autolayout-changed-everything")({
  head: () => ({
    meta: [
      { title: "Why Figma Auto Layout Changed Everything — Vinay" },
      { name: "description", content: "From static mockups to living design systems. The workflow shift that matters." },
      { property: "og:title", content: "Why Figma Auto Layout Changed Everything — Vinay" },
      { property: "og:description", content: "From static mockups to living design systems. The workflow shift that matters." },
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
    <header className="relative min-h-[50vh] flex items-end overflow-hidden bg-red text-cream">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <span className="text-label uppercase tracking-widest block mb-4">DESIGN / SEP 21, 2024 / 7 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Why Figma Auto Layout Changed Everything
          </h1>
        </ScrollReveal>
      </div>
      <GeoShape shape="circle" color="teal" size={120} className="absolute top-20 right-20 opacity-60" />
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
              Before Auto Layout, design files were drawings. After Auto Layout, they&apos;re systems.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              That&apos;s not hyperbole. It&apos;s the difference between handing a developer a PNG and handing them a component with constraints, padding, and responsive behaviour already defined.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Before State
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Manual spacing. Fixed widths. "Just centre it." Breakpoints that existed only in the developer&apos;s imagination. Handoff was a game of telephone.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The After State
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Auto Layout turns frames into flex containers. Padding becomes CSS padding. Gap becomes CSS gap. Constraints become min/max-width. The design file <em>is</em> the spec.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              My workflow now:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-body text-black/80 leading-relaxed pl-4">
              <li>Build components with Auto Layout (all of them)</li>
              <li>Define spacing tokens as Figma variables</li>
              <li>Create responsive variants per breakpoint</li>
              <li>Document interaction states (hover, focus, disabled)</li>
              <li>Export as <code>devMode</code> ready specs</li>
            </ol>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              What This Actually Buys You
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Zero "what&apos;s the spacing here?" messages</li>
              <li>Responsive behaviour that matches design intent</li>
              <li>Component variants that map 1:1 to code</li>
              <li>Design QA that takes minutes, not hours</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Catch
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Auto Layout forces you to think in systems. You can&apos;t just "move things around" anymore. Every decision has structural implications.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              That&apos;s the feature. The discomfort is the point. It&apos;s the friction that prevents fragile designs.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              A design file that doesn&apos;t survive resize isn&apos;t a design file. It&apos;s a screenshot.
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
            <Link to="/blog/design/swiss-grid-stops-being-a-cage" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Swiss Grid →
            </Link>
            <Link to="/blog/design/color-that-converts" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Color That Converts →
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link to="/blog/design" className="text-label uppercase tracking-widest text-cream/60 underline underline-offset-4 hover:text-cream transition-colors">
            ← Back to Design posts
          </Link>
        </ScrollReveal>
      </div>
      <GeoShape shape="square" color="blue" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </footer>
  );
}