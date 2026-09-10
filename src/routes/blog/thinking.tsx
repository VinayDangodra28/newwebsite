import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../../components/ui";

const thinkingPosts = [
  { title: 'Websites are only the beginning.', readTime: '5 min read', slug: 'websites-are-only-the-beginning', date: 'JAN 15, 2025' },
  { title: 'Why one person can out-build an agency.', readTime: '6 min read', slug: 'why-one-person-can-out-build-an-agency', date: 'DEC 20, 2024' },
  { title: 'What clients really mean when they say "clean".', readTime: '4 min read', slug: 'what-clients-really-mean-when-they-say-clean', date: 'NOV 25, 2024' },
  { title: 'The most expensive hour in any project.', readTime: '5 min read', slug: 'the-most-expensive-hour-in-any-project', date: 'OCT 30, 2024' },
];

export const Route = createFileRoute("/blog/thinking")({
  head: () => ({
    meta: [
      { title: "Thinking Blog — Vinay" },
      { name: "description", content: "Strategy, business, systems thinking, and honest takes on building digital things." },
      { property: "og:title", content: "Thinking Blog — Vinay" },
      { property: "og:description", content: "Strategy, business, systems thinking, and honest takes on building digital things." },
    ],
  }),
  component: ThinkingBlogPage,
});

function ThinkingBlogPage() {
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
            <span className="font-display text-hero md:text-[80px] leading-[0.9] tracking-tight text-black">THINKING</span>
            <span className="text-label text-black/40 uppercase tracking-widest">/ WRITTEN, DRAWN, SHIPPED</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-body text-black/70 leading-relaxed max-w-[460px]">
            Strategy, business, systems thinking, and honest takes on building digital things. 
            No thought leadership. Just thinking in public.
          </p>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="black" size={100} className="absolute top-20 right-20 opacity-30" />
      <GeoShape shape="square" color="red" size={60} className="absolute bottom-20 left-20 opacity-30" />
    </section>
  );
}

function CategoryPosts() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="divide-y divide-black/10">
          {thinkingPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 80}>
              <Link 
                to={`/blog/thinking/${post.slug}`}
                className="block py-10 border-t border-black/10 hover:bg-black/2 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-label uppercase tracking-widest text-black block mb-3">THINKING</span>
                    <h3 className="font-display text-lg md:text-xl md:text-2xl font-black text-black mb-2 hover:text-red transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-label text-black/40 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <GeoShape shape="square" color="black" size={12} className="hidden md:block flex-shrink-0" />
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