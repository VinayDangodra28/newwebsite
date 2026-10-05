import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "@/components/ui";

export const Route = createFileRoute("/work/kairo-studio")({
  head: () => ({
    meta: [
      { title: "Kairo Studio — Vinay" },
      { name: "description", content: "Ecommerce design system for a creative studio. 48 components. 6 templates. Zero clutter." },
      { property: "og:title", content: "Kairo Studio — Vinay" },
      { property: "og:description", content: "Ecommerce · Design System. Shopify-powered creative studio store. 23% conversion rate improvement." },
    ],
  }),
  component: KairoStudioPage,
});

function KairoStudioPage() {
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
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-lime text-black">
      <div className="container-main pb-16 md:pb-24">
        <ScrollReveal>
          <p className="text-label uppercase tracking-widest mb-4">ECOMMERCE · DESIGN SYSTEM</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[120px] leading-[0.9] tracking-tight mb-6">
            KAIRO STUDIO
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center gap-6 text-label uppercase tracking-widest">
            <span>2025</span>
            <span className="px-3 py-1 bg-black/10">Live</span>
            <span>Shopify</span>
            <span>Design System</span>
            <span>Custom Components</span>
          </div>
        </ScrollReveal>
      </div>

      <GeoShape shape="square" color="blue" size={80} className="absolute top-20 right-20 opacity-60" />
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
                  Ecommerce design system for a Berlin-based creative studio. They needed a Shopify store 
                  that could handle complex product configurations while maintaining editorial quality.
                </p>
                <p className="text-body text-black/80 leading-relaxed mb-6">
                  I built a complete design system (48 components, 6 page templates) in Figma with 
                  design tokens synced to code. Custom product configurator built with React, 
                  integrated into Shopify Hydrogen headless storefront.
                </p>
                <p className="text-body text-black/80 leading-relaxed">
                  Sub-second load times globally. 23% conversion rate improvement over previous theme. 
                  Zero clutter — every component earns its place.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h3 className="font-display text-lg font-black text-black mb-6">WHAT WAS DELIVERED</h3>
              <ul className="space-y-3 text-body text-black/70">
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Design system (48 components, tokens, 6 templates)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Shopify Hydrogen headless storefront</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Custom product configurator (React)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Editorial CMS integration (Sanity)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Performance optimisation (140ms avg load)</li>
                <li className="flex items-center gap-3"><GeoShape shape="square" color="lime" size={6} /> Figma-to-code token sync</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="font-display text-lg font-black text-black mb-6">RESULTS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">23%</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Conversion ↑</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">140ms</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Avg Load</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">48</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Components</p>
                </div>
                <div className="p-6 border border-black/10">
                  <p className="font-display text-3xl font-black text-black">6</p>
                  <p className="text-label text-black/50 uppercase tracking-widest mt-1">Page Templates</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">PROJECT META</h4>
                <dl className="space-y-4 text-body text-black/70">
                  <div className="flex justify-between"><dt>Client</dt><dd className="font-medium">Kairo Studio</dd></div>
                  <div className="flex justify-between"><dt>Industry</dt><dd className="font-medium">Creative Studio / Ecommerce</dd></div>
                  <div className="flex justify-between"><dt>Timeline</dt><dd className="font-medium">8 weeks</dd></div>
                  <div className="flex justify-between"><dt>Team</dt><dd className="font-medium">1 (me)</dd></div>
                  <div className="flex justify-between"><dt>Stack</dt><dd className="font-medium">Shopify Hydrogen, React, Sanity, Tailwind</dd></div>
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="p-6 border border-black/10">
                <h4 className="text-label uppercase tracking-widest text-black/50 mb-4">LIVE</h4>
                <a href="https://kairostudio.com" target="_blank" rel="noopener noreferrer" className="inline-block text-md font-display text-black underline underline-offset-4 hover:text-red transition-colors">
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
            WANT A STORE THAT CONVERTS?
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

      <GeoShape shape="circle" color="red" size={80} className="absolute top-20 left-20 opacity-30" />
      <GeoShape shape="square" color="blue" size={60} className="absolute bottom-20 right-20 opacity-30" />
    </section>
  );
}