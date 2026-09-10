import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/thinking/the-most-expensive-hour-in-any-project")({
  head: () => ({
    meta: [
      { title: "The Most Expensive Hour in Any Project — Vinay" },
      { name: "description", content: "It's not development. It's not design. It's the hour you didn't spend aligning." },
      { property: "og:title", content: "The Most Expensive Hour in Any Project — Vinay" },
      { property: "og:description", content: "It's not development. It's not design. It's the hour you didn't spend aligning." },
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
          <span className="text-label uppercase tracking-widest block mb-4">THINKING / OCT 30, 2024 / 5 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            The Most Expensive Hour in Any Project
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
              It&apos;s not the hour you spend coding. It&apos;s not the hour you spend designing.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              It&apos;s the hour you <em>didn&apos;t</em> spend aligning.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Math
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              1 hour of alignment prevents 10 hours of rework.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              10 hours of rework prevents 100 hours of technical debt.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              100 hours of technical debt prevents 1,000 hours of "we need to rewrite this."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The compounding is brutal. And it all starts with the hour you skipped.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              What Alignment Looks Like
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              It&apos;s not a 20-page PRD. It&apos;s not a Figma file with 50 screens.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              It&apos;s a 30-minute conversation where you agree on:
            </p>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>What problem are we actually solving?</li>
              <li>What does success look like in 30/60/90 days?</li>
              <li>What&apos;s in scope? What&apos;s explicitly OUT of scope?</li>
              <li>Who decides when it&apos;s done?</li>
              <li>What&apos;s the one thing that must work perfectly?</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The False Economy of "Just Starting"
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              "Let&apos;s just start building, we&apos;ll figure it out."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Translation: "I&apos;m anxious about not producing visible output."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Visible output in the wrong direction is negative progress. You&apos;re not "saving time." You&apos;re borrowing it at 1000% interest.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              My Alignment Protocol
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Before every project, before every sprint, before every major feature:
            </p>
            <ol className="list-decimal list-insize space-y-3 text-body text-black/80 leading-relaxed pl-4">
              <li>Write the <strong>One-Pager</strong>: Problem, Success, Scope, Decision-maker, Must-work.</li>
              <li>Review with client. Edit until it fits on one page.</li>
              <li>Sign off (literally — both parties sign the PDF).</li>
              <li>Any change = new One-Pager. No exceptions.</li>
            </ol>
            <p className="text-body text-black/80 leading-relaxed">
              Takes 30 minutes. Saves weeks.
            </p>

            <h2 className="font-display text-lg md:textxl font-black text-black border-l-4 border-black pl-4">
              The Hidden Cost
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Misalignment doesn&apos;t just cost time. It costs trust.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Client asks for X. You build Y (because you assumed). Client feels unheard. You feel frustrated. Next time they don&apos;t explain — they just accept. Quality drops. Relationship rots.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The hour of alignment is the hour you invest in the relationship. Everything else is just execution.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              The most expensive hour is the one you were too busy to take.
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
            <Link to="/blog/thinking/websites-are-only-the-beginning" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Websites Are Only the Beginning →
            </Link>
            <Link to="/blog/thinking/why-one-person-can-out-build-an-agency" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              One Person vs Agency →
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