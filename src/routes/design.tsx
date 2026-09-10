import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../components/ui";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design Services — Vinay" },
      {
        name: "description",
        content: "Design that thinks before it looks good. Visual systems, UI, brand identity, and motion — built for outcomes.",
      },
      { property: "og:title", content: "Design Services — Vinay" },
      { property: "og:description", content: "Design that thinks before it looks good. UI, brand, systems, motion." },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  return (
    <div className="overflow-hidden">
      <DesignHero />
      <DesignServices />
      <DesignProcess />
      <DesignFeaturedWork />
      <DesignPricing />
      <DesignCTA />
    </div>
  );
}

/* ───────── DESIGN HERO ───────── */
function DesignHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="section-label text-black mb-6">SERVICE · DESIGN</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display text-hero leading-[0.95] tracking-tight text-black">
                <div>DESIGN THAT</div>
                <div>THINKS.</div>
              </h1>
            </ScrollReveal>
          </div>

          <div className="max-w-[320px]">
            <ScrollReveal delay={200}>
              <p className="text-body text-black/80 leading-relaxed">
                Pretty doesn't pay the bills.
                <br />
                I design for conversion, clarity, and growth —
                <br />
                then make it look exactly as good as it needs to.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <GeoShape shape="circle" color="red" size={160} className="absolute bottom-10 left-10 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <GeoShape shape="square" color="lime" size={40} className="absolute top-20 right-20 opacity-60" />
    </section>
  );
}

/* ───────── DESIGN SERVICES ───────── */
function DesignServices() {
  const services = [
    { name: 'UI/UX DESIGN', color: 'red' },
    { name: 'BRAND IDENTITY', color: 'blue' },
    { name: 'DESIGN SYSTEMS', color: 'black' },
    { name: 'LANDING PAGES', color: 'red' },
    { name: 'ECOMMERCE DESIGN', color: 'lime' },
    { name: 'MOTION & MICRO-INTERACTIONS', color: 'black' },
    { name: 'FIGMA PROTOTYPES', color: 'blue' },
    { name: 'PRINT & COLLATERAL', color: 'black' },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-12">DESIGN SERVICES</p>
        </ScrollReveal>

        <ul className="divide-y divide-black/10 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 50}>
              <li className="py-6 md:py-8">
                <span 
                  className={`service-item text-${service.color} block cursor-pointer`}
                  style={{ 
                    color: service.color === 'lime' ? 'var(--lime)' : `var(--${service.color})`,
                    fontWeight: 700,
                  }}
                >
                  {service.name}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal>
          <p className="text-body text-black/70 leading-relaxed max-w-[540px]">
            Every project starts with a wireframe and ends 
            with a handoff-ready file you can actually use.
            No 'design intent' — working components, 
            documented decisions, zero ambiguity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── DESIGN PROCESS ───────── */
function DesignProcess() {
  const steps = [
    {
      number: '01',
      label: 'AUDIT',
      color: 'red',
      desc: "I look at what you have and what it's costing you. Every existing design is a hypothesis I can test.",
    },
    {
      number: '02',
      label: 'SYSTEM',
      color: 'blue',
      desc: "Before any pixels, there's a system. Colour, type, spacing, components. Built to scale, not just look good today.",
    },
    {
      number: '03',
      label: 'SHIP',
      color: 'lime',
      desc: "Figma files ready for dev. Motion specs documented. Nothing lost in translation.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-12">PROCESS</p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 100}>
              <div className="flex-1 relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-6 h-6 flex items-center justify-center" style={{ backgroundColor: `var(--${step.color})` }}>
                  <span className="text-label text-cream font-black">{step.number}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-black text-black mb-3">{step.label}</h3>
                <p className="text-body text-black/70 leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FEATURED DESIGN WORK ───────── */
function DesignFeaturedWork() {
  const projects = [
    {
      slug: 'meridian-atelier',
      name: 'MERIDIAN ATELIER',
      desc: 'Brand identity + website for a luxury atelier. Full design system. 48hr turnaround on initial concepts.',
      bgColor: 'red',
      geomShape: 'circle',
      geomColor: 'teal',
      geomSize: 100,
      textColor: 'cream',
    },
    {
      slug: 'kairo-studio',
      name: 'KAIRO STUDIO',
      desc: 'Ecommerce design system for a creative studio. 48 components. 6 templates. Zero clutter.',
      bgColor: 'lime',
      geomShape: 'square',
      geomColor: 'blue',
      geomSize: 80,
      textColor: 'black',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <p className="section-label text-black">FEATURED DESIGN WORK</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/work?filter=design" className="text-red text-label uppercase tracking-widest hover:text-red/80 transition-colors">
              See all design work →
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 100}>
              <Link
                to={`/work/${project.slug}`}
                className={`relative portfolio-card bg-${project.bgColor} p-8 md:p-12 flex flex-col justify-between`}
                style={{ backgroundColor: `var(--${project.bgColor})` }}
              >
                <div className="absolute top-6 left-6 text-label uppercase tracking-widest" style={{ color: `var(--${project.textColor})` }}>
                  DESIGN
                </div>

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

/* ───────── PRICING ANCHOR ───────── */
function DesignPricing() {
  const tiers = [
    {
      label: 'LANDING PAGE',
      accent: 'lime',
      price: 'From ₹25,000 / $300',
      desc: '1 page. Fully designed. Ready for dev or I\'ll build it.',
    },
    {
      label: 'DESIGN SYSTEM',
      accent: 'red',
      price: 'From ₹80,000 / $1,000',
      desc: 'Component library. Tokens. Figma. The whole thing.',
    },
    {
      label: 'BRAND + WEB',
      accent: 'blue',
      price: 'From ₹1,50,000 / $1,800',
      desc: 'Identity. Site. System. Built to last 5 years minimum.',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-black text-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-cream mb-12">WHAT TO EXPECT</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.label} delay={index * 100}>
              <div className="p-8 border border-white/10">
                <div className="text-label uppercase tracking-widest mb-3" style={{ color: `var(--${tier.accent})` }}>
                  {tier.label}
                </div>
                <p className="font-display text-xl md:text-2xl font-black text-cream mb-4">{tier.price}</p>
                <p className="text-body text-cream/60 leading-relaxed">{tier.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="mt-12 text-label text-cream/50 uppercase tracking-widest text-center">
            Prices depend on scope. These are floors, not ceilings. 
            <br />
            Ask and I'll tell you the ceiling too.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── DESIGN CTA ───────── */
function DesignCTA() {
  return (
    <section className="py-16 md:py-24 bg-red text-cream relative overflow-hidden">
      <div className="container-main text-center">
        <ScrollReveal>
          <h2 className="font-display text-hero md:text-[100px] leading-[0.9] tracking-tight mb-6">
            EVERY PIXEL HAS A JOB.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-body text-cream/80 max-w-[480px] mx-auto mb-10">
            And I'm the one making sure it does it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link to="/contact" className="inline-block px-8 py-4 bg-cream text-red font-display text-md hover:bg-cream/90 transition-colors">
            Start a design project →
          </Link>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="blue" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-180" />
    </section>
  );
}