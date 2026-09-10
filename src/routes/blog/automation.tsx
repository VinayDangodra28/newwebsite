import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

const autoPosts = [
  { title: 'The 6 automations every service business needs yesterday.', readTime: '6 min read', slug: '6-automations-every-service-business-needs', date: 'FEB 3, 2025' },
  { title: 'Kill the spreadsheet: A migration guide.', readTime: '7 min read', slug: 'kill-the-spreadsheet', date: 'JAN 10, 2025' },
  { title: 'Make vs Zapier: An honest comparison.', readTime: '8 min read', slug: 'make-vs-zapier-honest-comparison', date: 'DEC 1, 2024' },
  { title: 'How I automated my client onboarding.', readTime: '5 min read', slug: 'how-i-automated-my-client-onboarding', date: 'NOV 18, 2024' },
];

export const Route = createFileRoute("/blog/automation")({
  head: () => ({
    meta: [
      { title: "Automation Blog — Vinay" },
      { name: "description", content: "Workflows, APIs, Make, Zapier, n8n, and removing yourself from the loop." },
      { property: "og:title", content: "Automation Blog — Vinay" },
      { property: "og:description", content: "Workflows, APIs, Make, Zapier, n8n, and removing yourself from the loop." },
    ],
  }),
  component: AutomationBlogPage,
});

function AutomationBlogPage() {
  return (
    <div className="overflow-hidden">
      <CategoryHero />
      <CategoryPosts />
    </div>
  );
}

function CategoryHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-4">CATEGORY</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display text-hero md:text-[80px] leading-[0.9] tracking-tight text-lime">AUTOMATION</span>
            <span className="text-label text-black/40 uppercase tracking-widest">/ WRITTEN, DRAWN, SHIPPED</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-body text-black/70 leading-relaxed max-w-[460px]">
            Workflows, APIs, Make, Zapier, n8n, and removing yourself from the loop. 
            Systems that run while you sleep.
          </p>
        </ScrollReveal>
      </div>

      <GeoShape shape="square" color="lime" size={100} className="absolute top-20 right-20 opacity-30" />
      <GeoShape shape="triangle" color="red" size={60} className="absolute bottom-20 left-20 opacity-30 rotate-45" />
    </section>
  );
}

function CategoryPosts() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="divide-y divide-black/10">
          {autoPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 80}>
              <Link 
                to={`/blog/automation/${post.slug}`}
                className="block py-10 border-t border-black/10 hover:bg-black/2 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-label uppercase tracking-widest text-lime block mb-3">AUTOMATION</span>
                    <h3 className="font-display text-lg md:text-xl md:text-2xl font-black text-black mb-2 hover:text-red transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-label text-black/40 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <GeoShape shape="square" color="lime" size={12} className="hidden md:block flex-shrink-0" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <Link to="/blog" className="text-label uppercase tracking-widest text-black underline underline-offset-4 hover:text-red transition-colors">
              ← All categories
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}