import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/thinking/websites-are-only-the-beginning")({
  head: () => ({
    meta: [
      { title: "Websites Are Only the Beginning — Vinay" },
      { name: "description", content: "Most clients come to me wanting a website. Most of them leave with a system. Here's the difference." },
      { property: "og:title", content: "Websites Are Only the Beginning — Vinay" },
      { property: "og:description", content: "Most clients come to me wanting a website. Most of them leave with a system. Here's the difference." },
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
          <span className="text-label uppercase tracking-widest block mb-4">THINKING / JAN 15, 2025 / 5 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Websites Are Only the Beginning
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
              Every client who&apos;s ever hired me has said some version of this:<br /><br />
              <em>"I just need a website."</em>
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              And every time, within 20 minutes of talking, it becomes clear they don&apos;t just need a website.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              They need the thing a website is supposed to do.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Website Is Not the Product
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              A website is infrastructure. Like plumbing. You don&apos;t notice it when it works. You only notice it when it doesn&apos;t.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              What clients actually need is:
            </p>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Leads:</strong> The website needs to produce them.</li>
              <li><strong>Trust:</strong> The website needs to create it before you get on a call.</li>
              <li><strong>Operations:</strong> The website needs to connect to the rest of their business.</li>
              <li><strong>Information:</strong> The website needs to tell you what&apos;s working and what isn&apos;t.</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              A static brochure site does none of these things. Yet that&apos;s what most "website projects" produce.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              Where I Start
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              When I take on a new project, I ask one question before anything else:
            </p>
            <blockquote className="border-l-4 border-red pl-4 my-6 italic text-body text-black/80 leading-relaxed">
              <em>"What does success look like in 6 months?"</em>
            </blockquote>
            <p className="text-body text-black/80 leading-relaxed">
              Not "what pages do you need." Not "what&apos;s your brand colour." What does success look like?
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Usually, the answer reveals something the brief didn&apos;t say. A founder who says "I need a portfolio site" often means "I need clients to stop ghosting me after the first meeting."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Those are very different briefs. One of them requires a website. The other requires a website, a case study system, an automated follow-up sequence, and a calendar booking integration.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              One of them is a $300 project. The other is a $3,000 project. And the second one is the one that actually solves the problem.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              The Stack Under the Website
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              The websites that work — the ones that generate leads, retain clients, and scale — are never just websites.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              They&apos;re the front face of a system that includes:
            </p>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>A CRM that captures every visitor touchpoint</li>
              <li>Email sequences that nurture cold leads automatically</li>
              <li>Analytics that tell you which page is killing your conversion rate</li>
              <li>Integrations that push data to the tools your team actually uses</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              I build all of it. Not because it makes the project bigger. Because without it, the website is infrastructure without plumbing.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-black pl-4">
              What This Means for You
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              If you&apos;re reading this and you "just need a website," we should talk.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Not because you definitely need more. But because 10 minutes of conversation will clarify whether the problem is the website, or whether the website is just where the problem becomes visible.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Nine times out of ten, it&apos;s the latter.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              The website is the beginning.<br />
              The system is the point.
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
            <Link to="/blog/thinking/why-one-person-can-out-build-an-agency" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              One Person vs Agency →
            </Link>
            <Link to="/blog/thinking/what-clients-really-mean-when-they-say-clean" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              What "Clean" Means →
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