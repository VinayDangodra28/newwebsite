import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

export const Route = createFileRoute("/work/north-field-crm")({
  head: () => ({
    meta: [
      { title: "North Field CRM — Vinay" },
      { name: "description", content: "Custom CRM replacing Salesforce for a B2B sales team. Built in 11 days." },
      { property: "og:title", content: "North Field CRM — Vinay" },
      { property: "og:description", content: "CRM System + Automation. Pipeline management, automated follow-ups, Stripe integration." },
    ],
  }),
  component: NorthFieldCRMPage,
});

function NorthFieldCRMPage() {
  return (
    <div className="overflow-hidden">
      <WorkDetailHero />
      <WorkDetailContent />
      <WorkDetailCTA />
    </div>
  );
}

function WorkDetailHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-blue text-white">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <p className="text-label uppercase tracking-widest mb-4">CRM SYSTEM · AUTOMATION</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[120px] leading-[0.9] tracking-tight mb-6">
            NORTH FIELD CRM
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center gap-6 text-label uppercase tracking-widest">
            <span>2024</span>
            <span className="px-3 py-1 bg-white/20">Live</span>
            <span>Custom CRM</span>
            <span>Pipeline Management</span>
            <span>Stripe Integration</span>
          </div>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="orange" size={100} className="absolute bottom-20 right-20 opacity-60" />
    </section>
  );
}

function WorkDetailContent() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="prose prose-black max-w-none">
                <p className="text-body text-black/80 leading-relaxed mb-6">
                  Custom CRM replacing Salesforce for a B2B sales team. They were paying $1,200/month 
                  for 12 licences and exactly 2 people actually used it.
                </p>
                <p className="text-body text-black/80 leading-relaxed mb-6">
                  Built in 11 days with Next.js 14, Supabase (Postgres + Auth + Realtime), and Vercel. 
                  Total monthly cost: ~$28. Down from $1,200.
                </p>
                <p className="text-body text-black/80 leading-relaxed">
                  Features: Kanban pipeline (3 stages), contact & company management with linking, 
                  founder dashboard with daily KPIs, email logging via Postmark webhook, 
                  data migration from Salesforce CSV export (2 hours, one Node script).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h3 className="font-display text-lg font-black text-black mb-6">WHAT WAS DELIVERED</h3>
              <ul className="space-y-3 text-body text-black/70">
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Custom CRM (Next.js + Supabase)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Kanban pipeline with drag-and-drop</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Contact & company management</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Founder dashboard + daily KPIs</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Email logging via Postmark webhook</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Data migration from Salesforce</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="blue" size={6} /> Row-level security in Supabase</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="font-display text-lg font-black text-black mb-6">RESULTS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">11</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Days to Build</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">$1,172</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Monthly Savings</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">3/3</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Reps Active Daily</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">1</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Feature Request (Month 1)</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">PROJECT META</h4>
                <dl className="space-y-4 text-body text-black/70">
                  <div className="flex justify-between"><dt>Client</dt><dd className="font-medium">North Field (NDA)</dd></div>
                  <div className="flex justify-between"><dt>Industry</dt><dd className="font-medium">B2B Sales</dd></div>
                  <div className="flex justify-between"><dt>Timeline</dt><dd className="font-medium">11 days</dd></div>
                  <div className="flex justify-between"><dt>Team</dt><dd className="font-medium">1 (me)</dd></div>
                  <div className="flex justify-between"><dt>Stack</dt><dd className="font-medium">Next.js 14, Supabase, Postmark, Vercel</dd></div>
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">NOTE</h4>
                <p className="text-body text-black/60">
                  Internal tool — not publicly accessible. 
                  Case study shared with permission (anonymised).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkDetailCTA() {
  return (
    <section className="py-16 md:py-24 bg-black text-cream text-center relative overflow-hidden">
      <div className="container-main">
        <ScrollReveal>
          <h2 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            NEED A SYSTEM THAT ACTUALLY GETS USED?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-body text-cream/80 max-w-[480px] mx-auto mb-10">
            One email. That's where it starts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link to="/contact" className="inline-block px-8 py-4 bg-cream text-black font-display text-md hover:bg-cream/90 transition-colors">
            Start a project →
          </Link>
        </ScrollReveal>
      </div>

      <GeoShape shape="square" color="red" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </section>
  );
}