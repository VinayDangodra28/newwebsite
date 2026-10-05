import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/thinking/why-one-person-can-out-build-an-agency")({
  head: () => ({
    meta: [
      { title: "Why One Person Can Out-Build an Agency — Vinay" },
      { name: "description", content: "No handoffs. No meetings about meetings. One brain, full context, full stack." },
      { property: "og:title", content: "Why One Person Can Out-Build an Agency — Vinay" },
      { property: "og:description", content: "No handoffs. No meetings about meetings. One brain, full context, full stack." },
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
          <span className="text-label uppercase tracking-widest block mb-4">THINKING / DEC 20, 2024 / 6 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Why One Person Can Out-Build an Agency
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
              Agencies sell capacity. I sell continuity.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              That&apos;s the entire difference. And it compounds.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Handoff Tax
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Agency workflow: Designer → Project Manager → Developer → QA → Client.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Every arrow is a handoff. Every handoff loses context. Decisions made in Figma don&apos;t survive the PM. Technical constraints don&apos;t reach the designer. The client&apos;s "actually..." gets lost in translation.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              My workflow: Me → Client.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Zero handoffs. The person who designs the button codes the button. The person who architects the database designs the schema. Context is never lost because it was never transferred.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Meeting Tax
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Agency: Standup. Sprint planning. Retro. Design review. Dev review. Client sync. Internal sync. Pre-meeting meeting.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Me: One call a week. Async updates in Linear/Slack. That&apos;s it.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              A 5-person agency team spends 15+ hours/week in meetings. That&apos;s 15 hours not building. I build during those hours.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Full-Stack Advantage
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              When the same person designs the UI, architects the API, writes the migration, and configures the CI/CD:
            </p>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Design decisions respect technical constraints (because I know them)</li>
              <li>Technical decisions respect design intent (because I made them)</li>
              <li>Performance budget is designed in, not bolted on</li>
              <li>Content strategy informs component architecture</li>
              <li>Animation specs are feasible because I&apos;m the one animating</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Bus Factor
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Agencies say "we have redundancy." I say "I document everything."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              My bus factor is 1. But my documentation factor is 10. Every decision, every config, every credential — documented in Notion with video walkthroughs. If I get hit by a bus, the client has a runbook, not a crisis.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Most agencies have a bus factor of 2 (the PM and the lead dev). If both leave? Knowledge gone.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              When Agencies Win
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Parallel workstreams. 50+ page websites in 4 weeks. 24/7 support. Specialized expertise (accessibility audit, penetration testing, enterprise SSO).
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I partner with agencies for those. I don&apos;t pretend to be one.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Real Metric
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Time to value.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Agency: 4 weeks to kickoff, 8 weeks to MVP, 12 weeks to launch.<br />
              Me: 1 week to kickoff, 3 weeks to MVP, 5 weeks to launch.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The client starts getting value 7 weeks earlier. That&apos;s the only metric that matters.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              One brain. Full context. Full stack. No handoffs. That&apos;s not a constraint. That&apos;s the advantage.
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
            <Link to="/blog/thinking/what-clients-really-mean-when-they-say-clean" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              What "Clean" Means →
            </Link>
            <Link to="/blog/thinking/the-most-expensive-hour-in-any-project" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Most Expensive Hour →
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