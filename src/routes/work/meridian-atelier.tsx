import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

export const Route = createFileRoute("/work/meridian-atelier")({
  head: () => ({
    meta: [
      { title: "Meridian Atelier — Vinay" },
      { name: "description", content: "Full brand identity and marketing website for a luxury custom atelier." },
      { property: "og:title", content: "Meridian Atelier — Vinay" },
      { property: "og:description", content: "Brand identity + website. Full design system. 48hr turnaround on initial concepts." },
    ],
  }),
  component: MeridianAtelierPage,
});

function MeridianAtelierPage() {
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
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-red text-cream">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <p className="text-label uppercase tracking-widest mb-4">CUSTOM WEBSITE · BRAND</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[120px] leading-[0.9] tracking-tight mb-6">
            MERIDIAN ATELIER
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center gap-6 text-label uppercase tracking-widest">
            <span>2024</span>
            <span className="px-3 py-1 bg-cream/20">Live</span>
            <span>Brand Identity</span>
            <span>Web Design</span>
            <span>Design System</span>
          </div>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="teal" size={120} className="absolute top-20 right-20 opacity-60" />
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
                  Full brand identity and marketing website for a luxury custom atelier. 
                  The challenge was translating bespoke craftsmanship into a digital experience 
                  that felt equally considered.
                </p>
                <p className="text-body text-black/80 leading-relaxed mb-6">
                  I built a complete design system from the ground up — typography, colour, 
                  spacing, components — all documented in Figma with auto-layout ready for handoff. 
                  The site runs on Next.js with a headless CMS, optimised for sub-second loads 
                  globally via Vercel Edge.
                </p>
                <p className="text-body text-black/80 leading-relaxed">
                  Booking integration connects directly to their workshop calendar. 
                  SEO structure targets high-intent luxury furniture queries. 
                  0.8s load time. Zero templates used.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h3 className="font-display text-lg font-black text-black mb-6">WHAT WAS DELIVERED</h3>
              <ul className="space-y-3 text-body text-black/70">
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> Brand identity system (logo, typography, colour, imagery)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> Complete design system (48 components, 12 templates)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> Marketing website (Next.js + Sanity CMS)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> Booking + enquiry integration</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> SEO optimisation & performance tuning</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="red" size={6} /> Figma handoff with documentation</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="font-display text-lg font-black text-black mb-6">RESULTS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">0.8s</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Load Time</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">+184%</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Conversion</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">48hr</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">First Concepts</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">0</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Templates</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">PROJECT META</h4>
                <dl className="space-y-4 text-body text-black/70">
                  <div className="flex justify-between"><dt>Client</dt><dd className="font-medium">Meridian Atelier</dd></div>
                  <div className="flex justify-between"><dt>Industry</dt><dd className="font-medium">Luxury Furniture</dd></div>
                  <div className="flex justify-between"><dt>Timeline</dt><dd className="font-medium">6 weeks</dd></div>
                  <div className="flex justify-between"><dt>Team</dt><dd className="font-medium">1 (me)</dd></div>
                  <div className="flex justify-between"><dt>Stack</dt><dd className="font-medium">Next.js, Sanity, Tailwind, Framer Motion</dd></div>
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">LIVE</h4>
                <a href="https://meridianatelier.com" target="_blank" rel="noopener noreferrer" className="inline-block text-md font-display text-black underline underline-offset-4 hover:text-red transition-colors">
                  Visit Site →
                </a>
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
            WANT THIS LEVEL OF DETAIL?
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

      <GeoShape shape="square" color="blue" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="triangle" color="lime" size={60} className="absolute bottom-20 right-20 opacity-30 rotate-45" />
    </section>
  );
}