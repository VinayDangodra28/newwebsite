import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/blog/automation/6-automations-every-service-business-needs")({
  head: () => ({
    meta: [
      { title: "The 6 Automations Every Service Business Needs Yesterday — Vinay" },
      { name: "description", content: "You're doing at least 3 of these manually right now. Stop." },
      { property: "og:title", content: "The 6 Automations Every Service Business Needs Yesterday — Vinay" },
      { property: "og:description", content: "You're doing at least 3 of these manually right now. Stop." },
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
          <span className="text-label uppercase tracking-widest block mb-4">AUTOMATION / FEB 3, 2025 / 6 MIN READ</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            The 6 Automations Every Service Business Needs Yesterday
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
              Most service businesses have the same 6 problems.<br />
              Most of them are solving them manually.<br />
              Here&apos;s what to automate instead.
            </p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              1. Lead → CRM → Welcome Email
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> Lead fills your contact form. You see it. You add them to a spreadsheet. You send a "thanks for reaching out" email. Two days later.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Form submits → lead creates in CRM → welcome email sends in 4 minutes → you get a Slack notification with a summary.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Typeform → Make → Airtable/Notion → Brevo/Mailchimp<br /><strong>Build time:</strong> 2–3 hours<br /><strong>Time saved:</strong> 15–20 minutes per lead</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              2. Proposal → Contract → Invoice
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> You write a proposal. Client approves it verbally. You write a contract. You send it. They sign. You create an invoice. You send it. Two weeks have passed.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Template fills from CRM data → DocuSign/PandaDoc sends automatically → signature triggers invoice creation in Stripe/QuickBooks → client receives payment link.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Make/Zapier + DocuSign + Stripe<br /><strong>Build time:</strong> 4–6 hours (the contract template is the hard part)<br /><strong>Time saved:</strong> 45–60 minutes per new client</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              3. Project Status → Client Update
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> Client emails asking for an update. You stop what you&apos;re doing. You check the project board. You write an email. You send it. You lose 20 minutes.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Task moves to "In Progress" in Linear/Notion → Make triggers a personalized status email to the client → client feels informed without asking.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Linear/Notion + Make + Brevo<br /><strong>Build time:</strong> 2–3 hours<br /><strong>Time saved:</strong> Priceless (no more interruptions)</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              4. Invoice Overdue → Follow-Up Sequence
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> Invoice goes past due. You feel awkward. You wait a few days. You send a manual email. They reply with "oh sorry!" and pay. Three weeks of awkwardness avoided with automation.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Day 1 overdue → polite reminder. Day 7 → firmer reminder. Day 14 → "we need to talk" email. Day 30 → flagged in CRM for manual handling.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Stripe webhooks + Make + email<br /><strong>Build time:</strong> 2–3 hours<br /><strong>Recovery rate improvement:</strong> Significant</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              5. Testimonial Request at Project Close
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> You finish a project. Client is happy. You mean to ask for a testimonial. Six months later you remember. They&apos;ve forgotten what you built.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Project marked complete → 3-day delay → testimonial request sends → response goes to a structured form → approved testimonials auto-publish to your site.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Make + Typeform + CMS webhook<br /><strong>Build time:</strong> 3–4 hours<br /><strong>Result:</strong> You&apos;ll actually have testimonials on your site.</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              6. Weekly Business Dashboard
            </h2>
            <p className="text-body text-black/80 leading-relaxed"><strong>What&apos;s happening manually:</strong> Every Monday you open 6 different tabs. Revenue. Leads. Project status. Upcoming deadlines. Unpaid invoices. You manually compile this. It takes 90 minutes.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>What should happen:</strong> Every Monday at 8am, a summary email arrives with all of it. Pulled from Stripe, your CRM, your project tool, and your calendar. One email. 30 seconds to read.</p>
            <p className="text-body text-black/80 leading-relaxed"><strong>Tools:</strong> Make + Stripe + Airtable + Google Calendar + Gmail<br /><strong>Build time:</strong> 4–5 hours<br /><strong>Time saved:</strong> 90 minutes every single week</p>

            <h2 className="font-display text-lg md:text-xl font-black text-black border-l-4 border-lime pl-4" style={{ borderColor: 'var(--lime)' }}>
              The Real Point
            </h2>
            <p className="text-body text-black/80 leading-relaxed">
              None of these automations are complicated. None of them require a developer (though it&apos;s faster with one). They all exist because most service businesses prioritize <em>doing work</em> over <em>building systems</em>.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              The businesses that scale aren&apos;t the ones who work harder.<br />
              They&apos;re the ones who automate the parts that don&apos;t need them.
            </p>
            <p className="text-body text-black/80 leading-relaxed">
              Start with #1. Build one automation this week. See what it does to your brain when you realise it&apos;s running without you.
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
            <Link to="/blog/automation/kill-the-spreadsheet" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Kill the Spreadsheet →
            </Link>
            <Link to="/blog/automation/make-vs-zapier-honest-comparison" className="px-6 py-3 bg-cream/10 text-cream text-label uppercase tracking-widest hover:bg-cream/20 transition-colors">
              Make vs Zapier →
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