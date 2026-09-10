import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/design/swiss-grid-stops-being-a-cage")({
  head: () => ({
    meta: [
      { title: "How a Swiss Grid Stops Being a Cage — Vinay" },
      { name: "description", content: "Most designers use the grid as a rule. The best ones use it as a grammar." },
      { property: "og:title", content: "How a Swiss Grid Stops Being a Cage — Vinay" },
      { property: "og:description", content: "Most designers use the grid as a rule. The best ones use it as a grammar." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DESIGN / JAN 8, 2025 / 4 MIN READ</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            How a Swiss Grid Stops Being a Cage
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
              Most designers treat the grid like a jail cell.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              They put things in columns. They respect the margins. They submit their work, and it is <em>correct</em>, and it is <em>boring</em>, and three months later the client rebriefs it to someone else.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The Swiss grid was never meant to be a cage. Josef M&uuml;ller-Brockmann built it as a <em>language</em>. Not a restriction &mdash; a syntax. And syntax is only interesting when you&apos;re fluent enough to break it intentionally.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Rule Nobody Reads
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Every grid system has an implicit rule buried inside it: <strong>the grid is the floor, not the ceiling.</strong>
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              When you only ever place things inside columns, you&apos;re using the grid at 40% capacity. The other 60% is the tension you get when something <em>violates</em> the grid with authority.
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>A heading that spans 7 of 12 columns creates tension.</li>
              <li>A hero image that bleeds off the container creates tension.</li>
              <li>A caption set in 9px where the body is 18px creates tension.</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              Tension is what makes eyes move. Movement is what makes people read.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              What I Actually Do
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Before I lay out any page, I ask: <em>what is the one thing this layout should make someone feel?</em>
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Not click. Not understand. <strong>Feel.</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Confidence</strong> &rarr; wide columns, generous whitespace, heavy type</li>
              <li><strong>Urgency</strong> &rarr; compressed columns, tight leading, colour contrast</li>
              <li><strong>Trust</strong> &rarr; consistent rhythm, muted accents, nothing fighting for attention</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              The grid emerges from the answer. Not the other way around.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Practical Version
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              If you&apos;re building in Figma right now, try this:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-body text-black/80 leading-relaxed pl-4">
              <li>Set your grid. Whatever columns. It doesn&apos;t matter yet.</li>
              <li>Place your most important element first. Size it for impact, not for fit.</li>
              <li>Now <em>build the grid around it</em>.</li>
            </ol>
            <p className="text-body text-black/80 leading-relaxed">
              The element tells you what the grid should be. That&apos;s the move most designers never make.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              The cage was never the grid.<br />
              The cage was the habit of never questioning it.
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
            <Link to="/blog/design/color-that-converts" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Color that converts →
            </Link>
            <Link to="/blog/design/motion-is-a-sentence" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Motion is a sentence →
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