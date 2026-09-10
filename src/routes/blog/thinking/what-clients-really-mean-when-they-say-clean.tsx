import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/thinking/what-clients-really-mean-when-they-say-clean")({
  head: () => ({
    meta: [
      { title: 'What Clients Really Mean When They Say "Clean" — Vinay' },
      { name: "description", content: "It's not about whitespace. It's about decision fatigue." },
      { property: "og:title", content: 'What Clients Really Mean When They Say "Clean" — Vinay' },
      { property: "og:description", content: "It's not about whitespace. It's about decision fatigue." },
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
    <header className="relative min-h-[50vh] flex items-end overflow-hidden bg-black text-cream">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <span className="text-label uppercase tracking-widest block mb-4">THINKING / NOV 25, 2024 / 4 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            What Clients Really Mean When They Say "Clean"
          </h1>
        </ScrollReveal>
      </div>
      <GeoShape shape="circle" color="red" size={100} className="absolute top-20 right-20 opacity-60" />
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
              "We want it clean."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Every brief. Every kickoff. Every feedback round.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Designers hear: whitespace, minimalism, Helvetica, lots of breathing room.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Clients mean: <strong>I don&apos;t want to think.</strong>
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Translation Layer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black mb-2">Client says</p>
                <ul className="list-disc list-insize space-y-1 text-body text-black/80 leading-relaxed pl-4">
                  <li>"Clean"</li>
                  <li>"Simple"</li>
                  <li>"Modern"</li>
                  <li>"Professional"</li>
                  <li>"Not cluttered"</li>
                </ul>
              </div>
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black mb-2">Client means</p>
                <ul className="list-disc list-insize space-y-1 text-body text-black/80 leading-relaxed pl-4">
                  <li>"Obvious what to do next"</li>
                  <li>"Few decisions required"</li>
                  <li>"Trustworthy, not trendy"</li>
                  <li>"Credible, not corporate"</li>
                  <li>"One clear action per screen"</li>
                </ul>
              </div>
            </div>

            <h2 className="font-display text-lg md:textxl font-black text-black border-l-4 border-black pl-4">
              Clean Is Cognitive Load Management
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              A "clean" interface is one where the user&apos;s next action is obvious without reading. Where the hierarchy does the thinking for them.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Whitespace is a tool. So is colour. So is typography. So is motion. Clean is the <em>result</em> of using them to reduce decisions.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Trap
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Designers strip everything away. "Look how clean!" Client looks. "Where&apos;s the phone number? Where&apos;s the pricing? How do I contact sales?"
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              That&apos;s not clean. That&apos;s empty. Clean has everything you need and nothing you don&apos;t. Empty has nothing you need.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              My Clean Checklist
            </h2>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>One primary action per viewport</li>
              <li>Navigation visible without hamburger (desktop)</li>
              <li>Contact info in footer + header CTA</li>
              <li>Pricing or "start here" visible above fold</li>
              <li>Search/Filter if &gt;10 items</li>
              <li>Error states that explain how to fix</li>
              <li>Loading states that feel fast</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Real Test
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Show the design to someone who&apos;s never seen it. Give them 5 seconds. Ask: "What&apos;s the one thing you&apos;d click?"
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              If they hesitate, it&apos;s not clean. If they point immediately, it is.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Clean isn&apos;t an aesthetic. It&apos;s a kindness. Don&apos;t make people think to use your thing.
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
            <Link to="/blog/thinking/the-most-expensive-hour-in-any-project" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Most Expensive Hour →
            </Link>
            <Link to="/blog/thinking/websites-are-only-the-beginning" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Websites Are Only the Beginning →
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link to="/blog/thinking" className="text-label uppercase tracking-widest text-cream/60 underline underline-offset-4 hover:text-cream transition-colors">
            ← Back to Thinking posts
          </Link>
        </ScrollReveal>
      </div>
      <GeoShape shape="square" color="blue" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </footer>
  );
}