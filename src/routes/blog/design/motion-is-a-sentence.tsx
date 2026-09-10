import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/design/motion-is-a-sentence")({
  head: () => ({
    meta: [
      { title: "Motion Is a Sentence, Not a Flourish — Vinay" },
      { name: "description", content: "Animation should argue for the user. Not decorate the interface." },
      { property: "og:title", content: "Motion Is a Sentence, Not a Flourish — Vinay" },
      { property: "og:description", content: "Animation should argue for the user. Not decorate the interface." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DESIGN / OCT 3, 2024 / 5 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Motion Is a Sentence, Not a Flourish
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
              Most motion in interfaces is noise. It&apos;s there because someone thought "it would be nice if..."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Good motion has a thesis. It answers a question the user didn&apos;t know they had. It argues for the next step.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              Motion as Grammar
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Every animation should be a complete sentence with a subject, verb, and object:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Subject:</strong> What&apos;s moving?</li>
              <li><strong>Verb:</strong> How? (ease, spring, duration)</li>
              <li><strong>Object:</strong> Why? (feedback, hierarchy, spatial memory)</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              If you can&apos;t write the sentence, don&apos;t write the code.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Three Valid Reasons to Animate
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Causality</strong> &mdash; User did X, so Y happens. Button press &rarr; ripple. Drag &rarr; follow.</li>
              <li><strong>Continuity</strong> &mdash; Where did it come from? Where did it go? Modal open/close. List reorder.</li>
              <li><strong>Hierarchy</strong> &mdash; What matters most? Staggered entrance. Focus transitions.</li>
            </ol>
            <p className="text-body text-black/80 leading-relaxed">
              Decoration is not on the list. Delight is not on the list. Those are byproducts of clarity.
            </p>

            <h2 className="font-display text-lg md:textxl font-black text-black border-l-4 border-red pl-4">
              My Motion Tokens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black">150ms</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Micro feedback</p>
              </div>
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black">250ms</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Transitions</p>
              </div>
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black">400ms</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Page/Modal</p>
              </div>
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black">Spring</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Drag/Physics</p>
              </div>
            </div>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              If the motion disappeared, would the user still understand what happened? If yes, the motion earned its place. If no, it&apos;s decoration.
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
            <Link to="/blog/design/why-figma-autolayout-changed-everything" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Figma Auto Layout →
            </Link>
            <Link to="/blog/design/swiss-grid-stops-being-a-cage" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Swiss Grid →
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