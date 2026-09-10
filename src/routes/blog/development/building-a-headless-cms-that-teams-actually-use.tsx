import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/development/building-a-headless-cms-that-teams-actually-use")({
  head: () => ({
    meta: [
      { title: "Building a Headless CMS That Teams Actually Use — Vinay" },
      { name: "description", content: "Sanity, Contentful, or custom? The architecture decisions that determine adoption." },
      { property: "og:title", content: "Building a Headless CMS That Teams Actually Use — Vinay" },
      { property: "og:description", content: "Sanity, Contentful, or custom? The architecture decisions that determine adoption." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DEVELOPMENT / OCT 28, 2024 / 9 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Building a Headless CMS That Teams Actually Use
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
              The best CMS is the one your content team opens without dread.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I&apos;ve seen beautiful headless setups that content teams refuse to touch. They email developers every time they need a comma changed. That&apos;s a failure of architecture, not tools.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Adoption Checklist
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Before choosing a CMS, I run the team through this:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Can a non-technical person create a new page type in 10 minutes?</li>
              <li>Does the editing UI match the visual layout 1:1?</li>
              <li>Can they preview changes before publishing?</li>
              <li>Is the media library actually usable (folders, search, crop)?</li>
              <li>Can they schedule publishes without developer help?</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              If the answer to any is "no," the CMS will be bypassed.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              My Default: Sanity.io
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Not because it&apos;s perfect. Because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Studio is React</strong> — I can build custom inputs, previews, workflows</li>
              <li><strong>Real-time collaboration</strong> — Multiple editors, no conflicts</li>
              <li><strong>Portable Text</strong> — Rich text that&apos;ts actually portable (not HTML soup)</li>
              <li><strong>GROQ queries</strong> — Fetch exactly what you need, no over-fetching</li>
              <li><strong>Generous free tier</strong> — Clients can start without budget approval</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              Schema Design Principles
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Page = Composition, not inheritance</strong> — Pages assemble blocks. Blocks are reusable.</li>
              <li><strong>Blocks are dumb</strong> — No business logic in schema. Logic lives in frontend.</li>
              <li><strong>Validation as UX</strong> — Required fields, character counts, preview thumbnails.</li>
              <li><strong>Group by concern</strong> — SEO fields together. Social fields together. Layout fields together.</li>
            </ol>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Preview Problem
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Most headless CMSs treat preview as an afterthought. It&apos;s the #1 adoption killer.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              My setup: Next.js Draft Mode + Sanity <code>preview</code> secret + Vercel Preview Deployments. Editor clicks "Preview" &rarr; gets a secret URL with draft content &rarr; shares with stakeholders &rarr; publishes when approved.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              When Not to Use Sanity
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Enterprise SSO/SCIM requirements (Contentful wins here)</li>
              <li>Massive multi-language, multi-brand content orchestration</li>
              <li>Team already invested in Contentful/Strapi/DatoCMS</li>
            </ul>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              A CMS is not a database with a UI. It&apos;s a collaboration tool. Design it like one.
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
            <Link to="/blog/development/rebuilt-a-crm-in-11-days" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Rebuilt CRM →
            </Link>
            <Link to="/blog/development/why-i-switched-from-gatsby-to-nextjs" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Gatsby to Next.js →
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