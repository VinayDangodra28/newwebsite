import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

const designPosts = [
  { title: 'How a Swiss grid stops being a cage.', readTime: '4 min read', slug: 'swiss-grid-stops-being-a-cage', date: 'JAN 8, 2025' },
  { title: 'Color that converts: A practical framework.', readTime: '6 min read', slug: 'color-that-converts', date: 'NOV 12, 2024' },
  { title: 'Motion is a sentence, not a flourish.', readTime: '5 min read', slug: 'motion-is-a-sentence', date: 'OCT 3, 2024' },
  { title: 'Why Figma Auto Layout changed everything.', readTime: '7 min read', slug: 'why-figma-autolayout-changed-everything', date: 'SEP 21, 2024' },
];

export const Route = createFileRoute("/blog/design")({
  head: () => ({
    meta: [
      { title: "Design Blog — Vinay" },
      { name: "description", content: "Design systems, grids, typography, motion, and visual thinking." },
      { property: "og:title", content: "Design Blog — Vinay" },
      { property: "og:description", content: "Design systems, grids, typography, motion, and visual thinking." },
    ],
  }),
  component: DesignBlogPage,
});

function DesignBlogPage() {
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
            <span className="font-display text-hero md:text-[80px] leading-[0.9] tracking-tight text-red">DESIGN</span>
            <span className="text-label text-black/40 uppercase tracking-widest">/ WRITTEN, DRAWN, SHIPPED</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-body text-black/70 leading-relaxed max-w-[460px]">
            Design systems, grids, typography, motion, and visual thinking. 
            How structure creates freedom.
          </p>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="red" size={100} className="absolute top-20 right-20 opacity-30" />
      <GeoShape shape="square" color="blue" size={60} className="absolute bottom-20 left-20 opacity-30" />
    </section>
  );
}

function CategoryPosts() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="divide-y divide-black/10">
          {designPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 80}>
              <Link 
                to={`/blog/design/${post.slug}`}
                className="block py-10 border-t border-black/10 hover:bg-black/2 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-label uppercase tracking-widest text-red block mb-3">DESIGN</span>
                    <h3 className="font-display text-lg md:text-xl md:text-2xl font-black text-black mb-2 hover:text-red transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-label text-black/40 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <GeoShape shape="square" color="red" size={12} className="hidden md:block flex-shrink-0" />
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