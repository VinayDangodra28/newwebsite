import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../components/ui";

export const Route = createFileRoute("/automate")({
  head: () => ({
    meta: [
      { title: "Automation Services — Vinay" },
      {
        name: "description",
        content: "Your business should run without you babysitting it. I build automations that handle the boring, repetitive, expensive parts.",
      },
      { property: "og:title", content: "Automation Services — Vinay" },
      { property: "og:description", content: "Remove yourself from the loop. Workflows, CRM automations, API integrations." },
    ],
  }),
  component: AutomatePage,
});

function AutomatePage() {
  return (
    <div className="overflow-hidden">
      <AutomateHero />
      <AutomateWhat />
      <AutomateTools />
      <AutomateImpact />
      <AutomateCTA />
    </div>
  );
}

/* ───────── AUTOMATE HERO ───────── */
function AutomateHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black text-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="section-label text-cream mb-6">SERVICE · AUTOMATION</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display text-hero leading-[0.95] tracking-tight text-cream">
                <div>REMOVE</div>
                <div>YOURSELF</div>
                <div>FROM THE</div>
                <div>LOOP.</div>
              </h1>
            </ScrollReveal>
          </div>

          <div className="max-w-[320px]">
            <ScrollReveal delay={200}>
              <p className="text-body text-cream/80 leading-relaxed">
                Every hour you spend copying data, 
                sending follow-ups, and updating spreadsheets 
                is an hour you're not running your business.
                <br /><br />
                I build the systems that run it for you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <GeoShape shape="square" color="lime" size={100} className="absolute top-20 right-20" />
      <GeoShape shape="circle" color="red" size={50} className="absolute bottom-20 right-20 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

/* ───────── WHAT I AUTOMATE ───────── */
function AutomateWhat() {
  const problems = [
    {
      problem: 'Lead comes in. Nobody follows up for 3 days.',
      solution: 'AUTOMATED LEAD FOLLOW-UP',
      color: 'red',
    },
    {
      problem: 'Client fills a form. You manually send the contract.',
      solution: 'CONTRACT GENERATION + SEND',
      color: 'blue',
    },
    {
      problem: 'Invoice sent. Payment tracked in 4 different places.',
      solution: 'UNIFIED BILLING PIPELINE',
      color: 'lime',
    },
    {
      problem: 'You\'re the only person who knows where things are.',
      solution: 'INTERNAL KNOWLEDGE SYSTEMS',
      color: 'black',
    },
    {
      problem: 'Reports take 2 hours every Monday morning.',
      solution: 'AUTOMATED REPORTING + DELIVERY',
      color: 'red',
    },
    {
      problem: 'Your CRM data is 6 months out of date.',
      solution: 'REAL-TIME DATA SYNC ACROSS TOOLS',
      color: 'blue',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-12">WHAT GETS AUTOMATED</p>
        </ScrollReveal>

        <div className="divide-y divide-black/10">
          {problems.map((item, index) => (
            <ScrollReveal key={item.solution} delay={index * 80}>
              <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex-1 text-body text-black/50 leading-relaxed pr-8 md:pr-12 border-r border-black/10 md:border-r-0 md:border-b md:pb-8 md:mb-8">
                  {item.problem}
                </div>
                <div className="flex-1 text-right md:text-left">
                  <h3 
                    className="font-display text-lg md:text-xl md:text-2xl font-black mb-2"
                    style={{ color: `var(--${item.color})` }}
                  >
                    {item.solution}
                  </h3>
                  <GeoShape shape="square" color={item.color as 'red' | 'blue' | 'lime' | 'black'} size={8} className="inline-block md:hidden" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── TOOLS I USE ───────── */
function AutomateTools() {
  const tools = [
    'MAKE', 'ZAPIER', 'N8N', 'AIRTABLE', 'NOTION', 'SUPABASE',
    'GOOGLE WORKSPACE', 'STRIPE', 'RAZORPAY', 'TWILIO',
    'SENDGRID', 'SLACK API', 'WHATSAPP API', 'CUSTOM WEBHOOKS',
    'OPENAI API', 'ANTHROPIC API', 'GOOGLE SHEETS API', 'TYPEFORM'
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-black text-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-cream mb-12">THE STACK</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-body leading-relaxed" style={{ fontSize: 'clamp(14px, 2vw, 24px)' }}>
            {tools.map((tool, index) => (
              <span 
                key={tool} 
                className="whitespace-nowrap transition-colors duration-300 cursor-default"
                style={{ 
                  color: index % 3 === 0 ? 'var(--lime)' : index % 3 === 1 ? 'var(--red)' : 'var(--cream)',
                  fontSize: ['14px', '16px', '18px', '20px', '24px'][index % 5],
                }}
              >
                {tool}
                {index < tools.length - 1 && <span className="mx-2 text-cream/30">·</span>}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── IMPACT NUMBERS ───────── */
function AutomateImpact() {
  const stats = [
    { number: '18+', label: 'automation systems built' },
    { number: '2,400hrs', label: 'saved for clients annually' },
    { number: '6', label: 'average tools connected per project' },
    { number: '48hrs', label: 'typical turnaround on simple flows' },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-lime text-black relative overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <p className="font-display text-hero md:text-[80px] leading-[0.9] font-black tracking-tight mb-3">
                  {stat.number}
                </p>
                <p className="text-label uppercase tracking-widest text-black/60">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <GeoShape shape="circle" color="red" size={120} className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <GeoShape shape="square" color="blue" size={100} className="absolute bottom-10 right-10 -translate-x-1/2 -translate-y-1/2 opacity-30" />
    </section>
  );
}

/* ───────── AUTOMATE CTA ───────── */
function AutomateCTA() {
  return (
    <section className="py-16 md:py-24 bg-red text-cream relative overflow-hidden">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            THE BEST AUTOMATION IS THE ONE YOU STOP THINKING ABOUT.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-body text-cream/80 max-w-[480px] mx-auto mb-10">
            I'll build it. You'll forget you needed it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link to="/contact" className="inline-block px-8 py-4 bg-cream text-red font-display text-md hover:bg-cream/90 transition-colors">
            Show me your workflow →
          </Link>
        </ScrollReveal>
      </div>

      <GeoShape shape="triangle" color="lime" size={80} className="absolute top-20 left-20 opacity-30 rotate-45" />
      <GeoShape shape="circle" color="blue" size={100} className="absolute bottom-20 right-20 opacity-30" />
    </section>
  );
}