import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/automation/how-i-automated-my-client-onboarding")({
  head: () => ({
    meta: [
      { title: "How I Automated My Client Onboarding — Vinay" },
      { name: "description", content: "From signed contract to kickoff call in 15 minutes. Zero manual steps." },
      { property: "og:title", content: "How I Automated My Client Onboarding — Vinay" },
      { property: "og:description", content: "From signed contract to kickoff call in 15 minutes. Zero manual steps." },
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
          <span className="text-label uppercase tracking-widest block mb-4">AUTOMATION / NOV 18, 2024 / 5 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            How I Automated My Client Onboarding
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
              Client signs. I used to spend 45 minutes setting them up. Now it happens while I sleep.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Old Way
            </h2>
            <ol className="list-decimal list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Receive signed DocuSign</li>
              <li>Create client folder in Google Drive</li>
              <li>Create project in Linear/Notion</li>
              <li>Create Slack channel</li>
              <li>Send welcome email with links</li>
              <li>Book kickoff call</li>
              <li>Create invoice in Stripe</li>
              <li>Add to CRM</li>
            </ol>
            <p className="text-body text-black/80 leading-relaxed">45 minutes. Every client. Every time.</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Automated Way
            </h2>
            <p className="text-body text-black/80 leading-relaxed">DocuSign webhook → Make scenario fires:</p>
            <ol className="list-decimal list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Create Google Drive folder (name = client name)</li>
              <li>Create Linear project (template = "Client Project")</li>
              <li>Create Slack channel (invite team + client)</li>
              <li>Send welcome email (template + dynamic links)</li>
              <li>Create Calendly link (pre-filled with project type)</li>
              <li>Create Stripe invoice (amount from contract)</li>
              <li>Create Airtable record (CRM)</li>
              <li>Post to #wins channel in Slack</li>
            </ol>
            <p className="text-body text-black/80 leading-relaxed">Total time: 2 minutes (webhook latency). My time: 0.</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Make Scenario
            </h2>
            <pre className="bg-black text-cream p-6 overflow-x-auto text-sm font-mono leading-relaxed"><code>{`Webhook (DocuSign Envelope Completed)
  ↓
Router: Check if client exists in Airtable
  ├─ YES → Update record
  └─ NO → Create record
  ↓
HTTP: Google Drive API → Create Folder
  ↓
HTTP: Linear API → Create Project (from template)
  ↓
HTTP: Slack API → Create Channel + Invite
  ↓
HTTP: SendGrid → Send Welcome Email
  ↓
HTTP: Calendly API → Create Scheduling Link
  ↓
HTTP: Stripe API → Create Invoice
  ↓
Slack: Post to #wins`}</code></pre>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              Error Handling
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              Each module has "Continue on error" OFF. If any step fails:
            </p>
            <ul className="list-disc list-insize space-y-2 text-body text-black/80 leading-relaxed pl-4">
              <li>Scenario pauses</li>
              <li>I get Slack DM with error details</li>
              <li>I fix & resume from failed module</li>
              <li>Client never knows</li>
            </ul>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The ROI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">45min → 0min</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">My Time</p>
              </div>
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">100%</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Consistency</p>
              </div>
              <div className="p-6 border border-black/10 text-center">
                <p className="font-display text-3xl font-black text-black">0</p>
                <p className="text-label text-black/50 uppercase tracking-widest mt-1">Forgotten Steps</p>
              </div>
            </div>

            <hr className="border-black/20" />

            <p className="text-body text-black/80 leading-relaxed italic">
              Onboarding is your first product delivery. Automate it like one.
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
            <Link to="/blog/automation/6-automations-every-service-business-needs" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              6 Automations →
            </Link>
            <Link to="/blog/automation/kill-the-spreadsheet" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Kill the Spreadsheet →
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