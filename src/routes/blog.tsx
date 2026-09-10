import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../components/ui";

const categories = [
  { slug: 'design', label: 'DESIGN', color: 'red' },
  { slug: 'development', label: 'DEVELOPMENT', color: 'blue' },
  { slug: 'automation', label: 'AUTOMATION', color: 'lime' },
  { slug: 'thinking', label: 'THINKING', color: 'black' },
];

const featuredPosts = [
  { category: 'DESIGN', color: 'red', title: 'How a Swiss grid stops being a cage.', readTime: '4 min read', slug: 'swiss-grid-stops-being-a-cage' },
  { category: 'DEVELOPMENT', color: 'blue', title: 'I rebuilt a CRM in 11 days. Here\'s the full architecture.', readTime: '8 min read', slug: 'rebuilt-a-crm-in-11-days' },
  { category: 'AUTOMATION', color: 'lime', title: 'The 6 automations every service business needs yesterday.', readTime: '6 min read', slug: '6-automations-every-service-business-needs' },
  { category: 'THINKING', color: 'black', title: 'Why motion should argue, not decorate.', readTime: '5 min read', slug: 'why-motion-should-argue-not-decorate' },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vinay" },
      {
        name: "description",
        content: "Thinking in public. Design systems, development decisions, automation teardowns, and honest takes on building digital things.",
      },
      { property: "og:title", content: "Blog — Vinay" },
      { property: "og:description", content: "Thinking in public. Design, development, automation, and building things that last." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="overflow-hidden">
      <BlogHero />
      <BlogFeatured />
      <BlogCategories />
    </div>
  );
}

/* ───────── BLOG HERO ───────── */
function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream">
      <div className="container-main">
        <ScrollReveal>
          <p className="section-label text-black mb-6">WRITTEN, DRAWN, SHIPPED</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-hero md:text-[100px] leading-[0.95] tracking-tight text-black mb-8">
            <div>THINKING</div>
            <div>OUT LOUD.</div>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-[460px]">
            <p className="text-body text-black/70 leading-relaxed mb-10">
              I write about design systems, development decisions,
              automation setups, and what it actually takes 
              to build good digital things.
              No sponsored posts. No thought leadership. 
              Just what I'm learning as I go.
            </p>

            <div className="flex flex-wrap gap-4" role="tablist" aria-label="Blog categories">
              <button role="tab" aria-selected={true} className="px-4 py-2 text-label uppercase tracking-widest border-b-2 border-red text-black">
                ALL
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  role="tab"
                  aria-selected={false}
                  className={`px-4 py-2 text-label uppercase tracking-widest border-b-2 transition-colors duration-150 ${
                    cat.color === 'lime' ? 'border-lime text-black' : `border-${cat.color} text-black`
                  } hover:text-black/60`}
                  style={{ borderColor: cat.color === 'lime' ? 'var(--lime)' : `var(--${cat.color})` }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <GeoShape shape="circle" color="red" size={80} className="absolute top-20 right-20 opacity-30" />
      <GeoShape shape="square" color="blue" size={60} className="absolute bottom-20 left-20 opacity-30" />
    </section>
  );
}

/* ───────── BLOG FEATURED ───────── */
function BlogFeatured() {
  return (
    <section className="py-16 md:py-24 border-t border-black/10 bg-cream">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <p className="section-label text-black">FEATURED POSTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/blog" className="text-red text-label uppercase tracking-widest hover:text-red/80 transition-colors">
              All posts →
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <article className={`border-t-2 p-t-6`} style={{ borderColor: `var(--${post.color})` }}>
                <Link to={`/blog/${post.category.toLowerCase()}/${post.slug}`} className="block">
                  <span className="text-label uppercase tracking-widest block mb-3" style={{ color: `var(--${post.color})` }}>
                    {post.category}
                  </span>
                  <h3 className="font-display text-md md:text-lg font-black text-black mb-2 leading-tight hover:text-red transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-label text-black/40 uppercase tracking-widest">{post.readTime}</span>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── BLOG CATEGORIES ───────── */
function BlogCategories() {
  const categoryPosts: Record<string, Array<{title: string; readTime: string; slug: string}>> = {
    design: [
      { title: 'How a Swiss grid stops being a cage.', readTime: '4 min read', slug: 'swiss-grid-stops-being-a-cage' },
      { title: 'Color that converts: A practical framework.', readTime: '6 min read', slug: 'color-that-converts' },
      { title: 'Motion is a sentence, not a flourish.', readTime: '5 min read', slug: 'motion-is-a-sentence' },
      { title: 'Why Figma Auto Layout changed everything.', readTime: '7 min read', slug: 'why-figma-autolayout-changed-everything' },
    ],
    development: [
      { title: 'I rebuilt a CRM in 11 days. Here\'s the full architecture.', readTime: '8 min read', slug: 'rebuilt-a-crm-in-11-days' },
      { title: 'Animating SVG paths with intent.', readTime: '6 min read', slug: 'animating-svg-paths-with-intent' },
      { title: 'Why I switched from Gatsby to Next.js.', readTime: '5 min read', slug: 'why-i-switched-from-gatsby-to-nextjs' },
      { title: 'Building a headless CMS that teams actually use.', readTime: '9 min read', slug: 'building-a-headless-cms-that-teams-actually-use' },
    ],
    automation: [
      { title: 'The 6 automations every service business needs yesterday.', readTime: '6 min read', slug: '6-automations-every-service-business-needs' },
      { title: 'Kill the spreadsheet: A migration guide.', readTime: '7 min read', slug: 'kill-the-spreadsheet' },
      { title: 'Make vs Zapier: An honest comparison.', readTime: '8 min read', slug: 'make-vs-zapier-honest-comparison' },
      { title: 'How I automated my client onboarding.', readTime: '5 min read', slug: 'how-i-automated-my-client-onboarding' },
    ],
    thinking: [
      { title: 'Websites are only the beginning.', readTime: '5 min read', slug: 'websites-are-only-the-beginning' },
      { title: 'Why one person can out-build an agency.', readTime: '6 min read', slug: 'why-one-person-can-out-build-an-agency' },
      { title: 'What clients really mean when they say "clean".', readTime: '4 min read', slug: 'what-clients-really-mean-when-they-say-clean' },
      { title: 'The most expensive hour in any project.', readTime: '5 min read', slug: 'the-most-expensive-hour-in-any-project' },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        {categories.map((cat, catIndex) => (
          <ScrollReveal key={cat.slug} delay={catIndex * 100}>
            <div className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px" style={{ backgroundColor: `var(--${cat.color})` }} />
                <span className="text-label uppercase tracking-widest whitespace-nowrap" style={{ color: `var(--${cat.color})` }}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: `var(--${cat.color})` }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryPosts[cat.slug].map((post, postIndex) => (
                  <ScrollReveal key={post.slug} delay={postIndex * 80}>
                    <article className={`border-t-2 p-t-6`} style={{ borderColor: `var(--${cat.color})` }}>
                      <Link to={`/blog/${cat.slug}/${post.slug}`} className="block">
                        <span className="text-label uppercase tracking-widest block mb-3" style={{ color: `var(--${cat.color})` }}>
                          {cat.label}
                        </span>
                        <h3 className="font-display text-md md:text-lg font-black text-black mb-2 leading-tight hover:text-red transition-colors">
                          {post.title}
                        </h3>
                        <span className="text-label text-black/40 uppercase tracking-widest">{post.readTime}</span>
                      </Link>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}