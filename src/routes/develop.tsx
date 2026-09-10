import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../components/ui";

export const Route = createFileRoute("/develop")({
  head: () => ({
    meta: [
      { title: "Development Services — Vinay" },
      {
        name: "description",
        content: "Code that doesn't fall apart when you actually use it. React, Next.js, APIs, CMS, ecommerce — I build the whole stack.",
      },
      { property: "og:title", content: "Development Services — Vinay" },
      { property: "og:description", content: "React, Next.js, Supabase, APIs. Code that doesn't fall apart when you actually use it." },
    ],
  }),
  component: DevelopPage,
});

function DevelopPage() {
  return (
    <div className="overflow-hidden">
      <DevelopHero />
      <DevelopStack />
      <DevelopServices />
      <DevelopProcess />
      <DevelopFeaturedWork />
      <DevelopCTA />
    </div>
  );
}

/* ───────── DEVELOP HERO ───────── */
function DevelopHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="section-label text-black mb-6">SERVICE · DEVELOPMENT</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display text-hero leading-[0.95] tracking-tight text-black">
                <div>CODE THAT</div>
                <div>SCALES.</div>
              </h1>
            </ScrollReveal>
          </div>

          <div className="max-w-[320px]">
            <ScrollReveal delay={200}>
              <p className="text-body text-black/80 leading-relaxed">
                Not a template. Not a theme.
                <br />
                Built from scratch, to spec, with performance 
                baked in from line one.
                <br /><br />
                If your dev is a bottleneck — that's the problem I fix.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <GeoShape shape="square" color="blue" size={140} className="absolute top-20 right-10 -translate-y-1/2" style={{ width: '140px', height: '80px' }} />
      <GeoShape shape="circle" color="red" size={60} className="absolute bottom-20 left-20" />
    </section>
  );
}

/* ───────── STACK / TECHNOLOGIES ───────── */
function DevelopStack() {
  const tech = [
    { name: 'NEXT.JS', color: 'blue' },
    { name: 'REACT', color: 'black' },
    { name: 'TYPESCRIPT', color: 'red' },
    { name: 'TAILWIND CSS', color: 'black' },
    { name: 'NODE.JS / EXPRESS', color: 'blue' },
    { name: 'POSTGRESQL / SUPABASE', color: 'black' },
    { name: 'SANITY / CONTENTFUL', color: 'red' },
    { name: 'SHOPIFY / HYDROGEN', color: 'lime' },
    { name: 'FRAMER MOTION', color: 'black' },
    { name: 'REST & GRAPHQL APIs', color: 'blue' },
    { name: 'VERCEL / NETLIFY', color: 'black' },
    { name: 'STRIPE / RAZORPAY', color: 'red' },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-12">WHAT I BUILD WITH</p>
        </ScrollReveal>

        <ul className="divide-y divide-black/10">
          {tech.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 30}>
              <li className="py-5 md:py-6">
                <span 
                  className={`service-item text-${item.color} block`}
                  style={{ 
                    color: item.color === 'lime' ? 'var(--lime)' : `var(--${item.color})`,
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal delay={400}>
          <p className="mt-8 text-label text-black/40 uppercase tracking-widest max-w-[540px]">
            Not a skills grid with bars. Just the list. The list IS the signal. No need to quantify expertise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── WHAT I BUILD ───────── */
function DevelopServices() {
  const services = [
    {
      title: 'MARKETING WEBSITES',
      desc: 'The kind that load fast, rank well, and actually explain what you do.',
    },
    {
      title: 'WEB APPLICATIONS',
      desc: 'Custom tools, dashboards, portals. If you can describe it, I can build it.',
    },
    {
      title: 'ECOMMERCE STORES',
      desc: 'Shopify, custom carts, product configurators. Checkout flows that convert.',
    },
    {
      title: 'CMS INTEGRATIONS',
      desc: 'Headless CMS setup so your team can update without breaking things.',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-12">WHAT I BUILD</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="p-6 md:p-8 border border-black/10 hover:border-black/30 transition-colors">
                <h3 className="font-display text-md md:text-lg font-black text-black mb-3">{service.title}</h3>
                <p className="text-body text-black/60 leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── HOW A PROJECT GOES ───────── */
function DevelopProcess() {
  const timeline = [
    {
      week: 'WEEK 1',
      label: 'ARCHITECTURE',
      desc: 'Sitemap, data model, tech decisions. Before code, there\'s a plan.',
    },
    {
      week: 'WEEKS 2–3',
      label: 'BUILD',
      desc: 'Components first, pages second. You see progress from day 3.',
    },
    {
      week: 'WEEK 4',
      label: 'POLISH + LAUNCH',
      desc: 'Performance. Accessibility. QA. Then we go live.',
    },
    {
      week: 'POST-LAUNCH',
      label: 'HANDOFF OR RETAIN',
      desc: 'Full documentation + training. Or I stay on and keep building.',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-black text-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-cream mb-12">FROM BRIEF TO LIVE</p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 overflow-x-auto pb-8">
          {timeline.map((item, index) => (
            <ScrollReveal key={item.week} delay={index * 100}>
              <div className="flex-1 min-w-[280px] relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-6 h-6 bg-red flex items-center justify-center">
                  <GeoShape shape="square" color="red" size={4} />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-label text-red uppercase tracking-widest font-black">{item.week}</span>
                  <span className="text-label text-cream/40 uppercase tracking-widest">—</span>
                  <span className="text-label text-cream/60 uppercase tracking-widest">{item.label}</span>
                </div>
                <p className="text-body text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FEATURED DEV WORK ───────── */
function DevelopFeaturedWork() {
  const projects = [
    {
      slug: 'north-field-crm',
      name: 'NORTH FIELD CRM',
      desc: 'Custom CRM built in 11 days. Data migration from Airtable. Full pipeline management. Email automation via API.',
      bgColor: 'blue',
      textColor: 'white',
      geomShape: 'circle',
      geomColor: 'orange',
      geomSize: 100,
    },
    {
      slug: 'ecommerce-nda',
      name: 'E-COMMERCE PLATFORM',
      desc: 'Shopify Hydrogen storefront. Custom product configurator. 140ms average load time.',
      bgColor: 'cream',
      textColor: 'black',
      label: 'NDA — UNDISCLOSED',
      border: true,
      geomShape: 'square',
      geomColor: 'red',
      geomSize: 80,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <p className="section-label text-black">FEATURED DEVELOPMENT WORK</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 100}>
              <Link
                to={`/work/${project.slug}`}
                className={`relative portfolio-card ${project.border ? 'border-2 border-black' : ''} p-8 md:p-12 flex flex-col justify-between`}
                style={{ 
                  backgroundColor: project.bgColor === 'cream' ? 'var(--cream)' : `var(--${project.bgColor})`,
                  borderColor: project.border ? 'var(--black)' : undefined,
                }}
              >
                {project.label && (
                  <div className="absolute top-6 left-6 text-label uppercase tracking-widest" style={{ color: `var(--${project.textColor})` }}>
                    {project.label}
                  </div>
                )}

                <GeoShape
                  shape={project.geomShape as 'circle' | 'square'}
                  color={project.geomColor as 'red' | 'blue' | 'lime' | 'teal' | 'orange' | 'black' | 'cream'}
                  size={project.geomSize}
                  className="card-geom"
                  style={{ top: -project.geomSize / 2, right: -project.geomSize / 2 }}
                />

                <div className="absolute bottom-6 left-6 font-display text-lg md:text-xl" style={{ color: `var(--${project.textColor})` }}>
                  {project.name}
                </div>

                <div className="absolute bottom-6 right-6 text-body text-black/50 max-w-[200px] text-right" style={{ color: `var(--${project.textColor})` }}>
                  {project.desc}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── DEVELOP CTA ───────── */
function DevelopCTA() {
  return (
    <section className="py-16 md:py-24 bg-blue text-white relative overflow-hidden">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            YOUR NEXT CODEBASE SHOULDN'T BE A LIABILITY.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-body text-white/80 max-w-[480px] mx-auto mb-10">
            Let's build something that still works in 3 years.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue font-display text-md hover:bg-white/90 transition-colors">
            Talk about your project →
          </Link>
        </ScrollReveal>
      </div>

      <GeoShape shape="square" color="lime" size={100} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="circle" color="red" size={80} className="absolute bottom-20 right-20 opacity-30" />
    </section>
  );
}