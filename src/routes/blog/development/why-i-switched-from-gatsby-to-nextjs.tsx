import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/development/why-i-switched-from-gatsby-to-nextjs")({
  head: () => ({
    meta: [
      { title: "Why I Switched from Gatsby to Next.js — Vinay" },
      { name: "description", content: "Gatsby was great. Until it wasn't. The migration that saved 40% build time." },
      { property: "og:title", content: "Why I Switched from Gatsby to Next.js — Vinay" },
      { property: "og:description", content: "Gatsby was great. Until it wasn't. The migration that saved 40% build time." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DEVELOPMENT / NOV 15, 2024 / 5 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Why I Switched from Gatsby to Next.js
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
              I built 20+ sites on Gatsby. Loved the plugin ecosystem. Loved GraphQL. Loved the community.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Then the builds started taking 12 minutes. Then 18. Then the plugin I needed hadn&apos;t been updated in two years.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Breaking Point
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Build times scaling linearly with content (not incrementally)</li>
              <li>GraphQL layer adding complexity without proportional value for simple sites</li>
              <li>Plugin maintenance burden — core team can&apos;t maintain everything</li>
              <li>No Server Components. No streaming. No edge middleware.</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Migration
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Moved 5 client sites in 3 weeks. Pattern was always the same:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-body text-black/80 leading-relaxed pl-4">
              <li>Replace <code>gatsby-source-filesystem</code> + GraphQL with <code>fs</code> + frontmatter parsing</li>
              <li>Swap <code>gatsby-image</code> for <code>next/image</code> (actually better)</li>
              <li>Replace <code>gatsby-plugin-mdx</code> with <code>next-mdx-remote</code></li>
              <li>Move layout components to App Router structure</li>
              <li>Deploy to Vercel (zero config)</li>
            </ol>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">12min → 3min</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Build Time</p>
              </div>
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">40%</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Bundle Reduction</p>
              </div>
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">0</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Plugin Issues</p>
              </div>
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">100%</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">TypeScript</p>
              </div>
            </div>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              What I Miss
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              <code>gatsby-plugin-offline</code> was genuinely great. Next.js SWR handles caching differently — better for most cases, but not true offline-first.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The Gatsby community was genuinely wonderful. Next.js community is bigger but more fragmented.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              What I Don&apos;t Miss
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Debugging GraphQL queries at 11pm. Waiting for builds. Explaining to clients why a content change takes 15 minutes to preview.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Tools should disappear. Gatsby stopped disappearing. Next.js does.
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
            <Link to="/blog/development/building-a-headless-cms-that-teams-actually-use" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Headless CMS →
            </Link>
            <Link to="/blog/development/animating-svg-paths-with-intent" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Animating SVG →
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