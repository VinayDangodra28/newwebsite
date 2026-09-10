import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/automation/make-vs-zapier-honest-comparison")({
  head: () => ({
    meta: [
      { title: "Make vs Zapier: An Honest Comparison — Vinay" },
      { name: "description", content: "I've built 50+ automations on both. Here's the real difference nobody talks about." },
      { property: "og:title", content: "Make vs Zapier: An Honest Comparison — Vinay" },
      { property: "og:description", content: "I've built 50+ automations on both. Here's the real difference nobody talks about." },
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
    <header className="relative min-h-[50vh] flex items-end overflow-hidden bg-lime text-black">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <span className="text-label uppercase tracking-widest block mb-4">AUTOMATION / DEC 1, 2024 / 8 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Make vs Zapier: An Honest Comparison
          </h1>
        </ScrollReveal>
      </div>
      <GeoShape shape="square" color="blue" size={80} className="absolute top-20 right-20 opacity-60" />
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
              I&apos;ve built 50+ automations on both platforms. Clients ask me this constantly. Here&apos;s the unvarnished truth.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Short Version
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              <strong>Zapier:</strong> Easier to start. Expensive at scale. Limited logic.<br />
              <strong>Make:</strong> Steeper learning curve. Cheaper at scale. Visual programming that actually works.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              For simple 2–3 step zaps: Zapier wins on speed.<br />
              For anything with branches, loops, error handling, or 1000+ runs/month: Make wins on everything.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              Pricing Reality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black mb-2">Zapier Professional</p>
                <p className="font-display text-3xl font-black text-black">$73.50/mo</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">2,000 tasks</p>
              </div>
              <div className="p-6 border border-black/10">
                <p className="font-display text-lg font-black text-black mb-2">Make Pro</p>
                <p className="font-display text-3xl font-black text-black">$16/mo</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">10,000 operations</p>
              </div>
            </div>
            <p className="text-body text-black/80 leading-relaxed">
              At 10k operations/month: Zapier = $299/mo. Make = $16/mo. That&apos;s 18x difference.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              Where Zapier Wins
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>App directory: 6,000+ vs Make&apos;s 1,500+</li>
              <li>Pre-built templates for obscure SaaS tools</li>
              <li>Zero-code onboarding for non-technical users</li>
              <li>Built-in formatter (dates, text, numbers) — Make needs functions</li>
              <li>Team collaboration UI is more polished</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              Where Make Wins
            </h2>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Visual flow = actual code logic (if/else, routers, iterators, aggregators)</li>
              <li>Error handling per module (not per scenario)</li>
              <li>Data stores (key-value) built-in — no external DB needed for state</li>
              <li>Webhooks are first-class citizens (instant, not polling)</li>
              <li>Custom apps via HTTP module — connect anything with an API</li>
              <li>Scenario cloning, versioning, dev/prod environments</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Migration Test
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Take your most complex Zap. Rebuild it in Make. If it takes {'<'} 30 minutes and runs cheaper → migrate everything.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I&apos;ve never had a client stay on Zapier after this test.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              n8n: The Third Option
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Self-hosted. Free (mostly). Full code access. Steepest learning curve. Best for: sensitive data, custom nodes, teams with dev resources.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I use n8n for client projects where data never leaves their infrastructure.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Zapier is a toy that became a tool. Make is a tool that became a platform. Choose accordingly.
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
            <Link to="/blog/automation/how-i-automated-my-client-onboarding" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Client Onboarding →
            </Link>
            <Link to="/blog/automation/6-automations-every-service-business-needs" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              6 Automations →
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link to="/blog/automation" className="text-label uppercase tracking-widest text-cream/60 underline underline-offset-4 hover:text-cream transition-colors">
            ← Back to Automation posts
          </Link>
        </ScrollReveal>
      </div>
      <GeoShape shape="circle" color="red" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </footer>
  );
}