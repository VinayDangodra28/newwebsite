import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

const devPosts = [
  { title: 'I rebuilt a CRM in 11 days. Here\'s the full architecture.', readTime: '8 min read', slug: 'rebuilt-a-crm-in-11-days', date: 'JAN 22, 2025' },
  { title: 'Animating SVG paths with intent.', readTime: '6 min read', slug: 'animating-svg-paths-with-intent', date: 'DEC 8, 2024' },
  { title: 'Why I switched from Gatsby to Next.js.', readTime: '5 min read', slug: 'why-i-switched-from-gatsby-to-nextjs', date: 'NOV 15, 2024' },
  { title: 'Building a headless CMS that teams actually use.', readTime: '9 min read', slug: 'building-a-headless-cms-that-teams-actually-use', date: 'OCT 28, 2024' },
];

export const Route = createFileRoute("/blog/development")({
  head: () => ({
    meta: [
      { title: "Development Blog — Vinay" },
      { name: "description", content: "React, Next.js, APIs, architecture decisions, and code that scales." },
      { property: "og:title", content: "Development Blog — Vinay" },
      { property: "og:description", content: "React, Next.js, APIs, architecture decisions, and code that scales." },
    ],
  }),
  component: DevelopmentBlogPage,
});

function DevelopmentBlogPage() {
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
            <span className="font-display text-hero md:text-[80px] leading-[0.9] tracking-tight text-blue">DEVELOPMENT</span>
            <span className="text-label text-black/40 uppercase tracking-widest">/ WRITTEN, DRAWN, SHIPPED</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-body text-black/70 leading-relaxed max-w-[460px]">
            React, Next.js, APIs, architecture decisions, and code that scales. 
            What works in production.
          </p>
        </ScrollReveal>
      </div>

      <GeoShape shape="square" color="blue" size={100} className="absolute top-20 right-20 opacity-30" />
      <GeoShape shape="circle" color="red" size={60} className="absolute bottom-20 left-20 opacity-30" />
    </section>
  );
}

function CategoryPosts() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="divide-y divide-black/10">
          {devPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 80}>
              <Link 
                to={`/blog/development/${post.slug}`}
                className="block py-10 border-t border-black/10 hover:bg-black/2 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-label uppercase tracking-widest text-blue block mb-3">DEVELOPMENT</span>
                    <h3 className="font-display text-lg md:text-xl md:text-2xl font-black text-black mb-2 hover:text-red transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-label text-black/40 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <GeoShape shape="square" color="blue" size={12} className="hidden md:block flex-shrink-0" />
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