import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/design/color-that-converts")({
  head: () => ({
    meta: [
      { title: "Color That Converts: A Practical Framework — Vinay" },
      { name: "description", content: "Stop guessing. Start using colour with intent. A framework for conversion-focused palettes." },
      { property: "og:title", content: "Color That Converts: A Practical Framework — Vinay" },
      { property: "og:description", content: "Stop guessing. Start using colour with intent. A framework for conversion-focused palettes." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DESIGN / NOV 12, 2024 / 6 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Color That Converts: A Practical Framework
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
              Most designers pick colours by feel. The best ones pick them by function.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I&apos;ve seen beautiful palettes fail conversion tests. I&apos;ve seen ugly ones outperform by 40%. The difference isn&apos;t taste &mdash; it&apos;s intent.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Three Roles of Colour
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Every colour in your system should have a job:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Primary (Brand)</strong> &mdash; Recognition. Trust. The colour people associate with you.</li>
              <li><strong>Accent (Action)</strong> &mdash; One colour. One job. CTAs, links, key interactions.</li>
              <li><strong>Semantic (State)</strong> &mdash; Success, error, warning, info. Never decorative.</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              My Conversion Palette
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              This is the exact system I use on every project:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="p-6 border border-black/10">
                <div className="w-12 h-12 mb-3" style={{ backgroundColor: 'var(--red)' }} />
                <p className="font-display text-lg font-black text-black">#FF2800</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Primary Action</p>
              </div>
              <div className="p-6 border border-black/10">
                <div className="w-12 h-12 mb-3" style={{ backgroundColor: 'var(--blue)' }} />
                <p className="font-display text-lg font-black text-black">#0028FF</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Secondary / Links</p>
              </div>
              <div className="p-6 border border-black/10">
                <div className="w-12 h-12 mb-3" style={{ backgroundColor: 'var(--lime)' }} />
                <p className="font-display text-lg font-black text-black">#C8FF00</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Highlight / Shock</p>
              </div>
            </div>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-red pl-4">
              The Rule: One Accent
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Pick ONE accent colour for actions. Not two. Not three. One.
              <br /><br />
              When everything is highlighted, nothing is. Your conversion rate lives or dies by this discipline.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Colour isn&apos;t decoration. It&apos;s a signal system. Treat it like one.
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
            <Link to="/blog/design/motion-is-a-sentence" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Motion is a sentence →
            </Link>
            <Link to="/blog/design/why-figma-autolayout-changed-everything" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Figma Auto Layout →
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