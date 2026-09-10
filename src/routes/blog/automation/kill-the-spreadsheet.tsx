import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../../components/ui";

export const Route = createFileRoute("/blog/automation/kill-the-spreadsheet")({
  head: () => ({
    meta: [
      { title: "Kill the Spreadsheet: A Migration Guide — Vinay" },
      { name: "description", content: "Your spreadsheet is not a database. Here's how to move to something that scales." },
      { property: "og:title", content: "Kill the Spreadsheet: A Migration Guide — Vinay" },
      { property: "og:description", content: "Your spreadsheet is not a database. Here's how to move to something that scales." },
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
          <span className="text-label uppercase tracking-widest block mb-4">AUTOMATION / JAN 10, 2025 / 7 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            Kill the Spreadsheet: A Migration Guide
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
              Every business has That Spreadsheet. The one with 47 tabs. The one only Sarah understands. The one that breaks when she&apos;s on vacation.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              It started as a quick tracker. Now it runs payroll. It&apos;s a database pretending to be a grid. And it&apos;s holding your business hostage.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Symptoms
            </h2>
            <ul className="list-disc list-inside space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>VLOOKUPs referencing other VLOOKUPs</li>
              <li>Colour-coded rows meaning different things to different people</li>
              <li>"Don&apos;t sort this column" written in cell A1</li>
              <li>Version history: "Final_v2_REAL_final.xlsx"</li>
              <li>One person who knows how it works</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Migration Path
            </h2>
            <ol className="list-decimal list-insize space-y-4 text-body text-black/80 leading-relaxed pl-4">
              <li><strong>Audit:</strong> List every tab, every formula, every person who touches it.</li>
              <li><strong>Model:</strong> Design the actual data model. Tables. Relationships. Types.</li>
              <li><strong>Choose:</strong> Airtable (low-code), Notion (docs + data), Supabase (dev), NocoDB (open source).</li>
              <li><strong>Migrate:</strong> CSV import → validate → clean → relate.</li>
              <li><strong>Build views:</strong> Kanban for pipeline. Calendar for deadlines. Gallery for assets.</li>
              <li><strong>Automate:</strong> Forms for input. Webhooks for sync. Dashboards for visibility.</li>
              <li><strong>Train:</strong> Record Looms. Write docs. Office hours for two weeks.</li>
              <li><strong>Decommission:</strong> Read-only the spreadsheet. Delete after 30 days.</li>
            </ol>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Hard Part Isn&apos;t Technical
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              It&apos;s change management. People love their spreadsheets. They&apos;re familiar. They&apos;re flexible. They&apos;re <em>theirs</em>.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              So don&apos;t take it away. Build the better thing beside it. Let them use both. When they stop opening the spreadsheet, you&apos;ve won.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              A Real Migration: Client Pipeline
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              <strong>Before:</strong> 12-tab spreadsheet. Manual status updates. No history. Founder asks "where are we?" daily.<br />
              <strong>After:</strong> Airtable base. Kanban view. Automated email on stage change. Founder dashboard. Slack notifications.<br />
              <strong>Time:</strong> 8 hours build. 2 weeks transition. Zero spreadsheet opens since.
            </p>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Your spreadsheet is technical debt with a GUI. Pay it down before it compounds.
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
            <Link to="/blog/automation/make-vs-zapier-honest-comparison" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Make vs Zapier →
            </Link>
            <Link to="/blog/automation/how-i-automated-my-client-onboarding" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Client Onboarding →
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