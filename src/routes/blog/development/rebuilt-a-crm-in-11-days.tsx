import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/development/rebuilt-a-crm-in-11-days")({
  head: () => ({
    meta: [
      { title: "I Rebuilt a CRM in 11 Days. Here's the Full Architecture. — Vinay" },
      { name: "description", content: "Salesforce was costing them $1,200/month and nobody was using it. Here's what I replaced it with." },
      { property: "og:title", content: "I Rebuilt a CRM in 11 Days. Here's the Full Architecture. — Vinay" },
      { property: "og:description", content: "Salesforce was costing them $1,200/month and nobody was using it. Here's what I replaced it with." },
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
          <span className="text-label uppercase tracking-widest block mb-4">DEVELOPMENT / JAN 22, 2025 / 8 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            I Rebuilt a CRM in 11 Days. Here&apos;s the Full Architecture.
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
              The brief was simple: "We need something our team will actually use."
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              They had Salesforce. 12 licences. $1,200 a month. And exactly 2 people who logged in more than once a week.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              This is what I built instead, and why.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Requirements (Real Ones, Not the Brief)
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              After two conversations, the actual requirements were:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Pipeline view for 3 sales reps</li>
              <li>Contact + company records with notes</li>
              <li>Email logging (not tracking, just logging)</li>
              <li>A dashboard the founder could check in 30 seconds</li>
              <li>Nothing else</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              That last one was the hardest requirement. Clients always want to add things. The discipline is in removing.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Stack Decision
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              <strong>Frontend:</strong> Next.js 14 with App Router<br />
              <strong>Database:</strong> Supabase (Postgres + Auth + Realtime)<br />
              <strong>Hosting:</strong> Vercel<br />
              <strong>Email:</strong> Postmark for transactional<br />
              <strong>Cost:</strong> ~$28/month total. Down from $1,200.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Why not [other CRM]? Because custom code gives you exactly what you need and nothing you don&apos;t. And in 2025, Supabase makes the database layer fast enough that "just build it" is often the right call.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Architecture
            </h2>
            <pre className="bg-black text-cream p-6 overflow-x-auto text-sm font-mono leading-relaxed"><code>{`/app
  /dashboard          → founder view, daily KPIs
  /pipeline           → kanban, 3 stages
  /contacts           → searchable, filterable
  /companies          → linked to contacts
  /deals              → linked to companies + contacts
/api
  /deals              → CRUD + status updates
  /contacts           → CRUD + search
  /email-log          → receives webhook from Postmark
/lib
  /supabase.ts        → client + server clients
  /types.ts           → shared types`}</code></pre>
            <p className="text-body text-black/80 leading-relaxed">
              The key architectural decision: <strong>flat data model, deep relationships in the UI, not the schema.</strong>
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              Day-by-Day
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Days 1–2:</strong> Schema design, auth setup, base routing</li>
              <li><strong>Days 3–5:</strong> Pipeline view — this took longer than expected (drag-and-drop is always a trap)</li>
              <li><strong>Days 6–7:</strong> Contacts + Companies + linking</li>
              <li><strong>Days 8–9:</strong> Dashboard + reporting queries</li>
              <li><strong>Day 10:</strong> Email log webhook + Postmark setup</li>
              <li><strong>Day 11:</strong> QA, data migration from Salesforce export, deploy</li>
            </ul>
            <p className="text-body text-black/80 leading-relaxed">
              The data migration was 2 hours of one Node script. Salesforce&apos;s CSV export is surprisingly clean.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              What I&apos;d Do Differently
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              The drag-and-drop pipeline used <code>@dnd-kit</code>. I&apos;d use it again, but I&apos;d allocate 3 days instead of 2. Collision detection in kanban is always more edge-case-heavy than you think.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              I&apos;d also set up row-level security in Supabase from day one instead of day 9. Adding it late required rewriting several API routes.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-blue pl-4">
              The Result
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              3 weeks after launch, all 3 reps are logging in daily. The founder checks the dashboard every morning. They added one feature request in the first month (a notes template). That&apos;s it.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The best software is the kind people use without thinking about it.
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
            <Link to="/blog/development/animating-svg-paths-with-intent" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Animating SVG Paths →
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