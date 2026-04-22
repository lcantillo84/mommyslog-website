import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mommy's Log - Baby Care Tips & Guides",
  description: "Expert advice on baby feeding, breastfeeding tips, and parenting guides for new moms. Helpful articles to make your parenting journey easier.",
  openGraph: {
    title: "Blog | Mommy's Log",
    description: "Expert baby care tips and guides for new moms.",
    url: "https://mommyslog.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-ml-cream">
      {/* Hero Section */}
      <section className="bg-ml-cream border-b border-ml-teal/10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-ml-secondary hover:text-ml-teal transition mb-8 text-sm font-semibold"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ml-text mb-6 leading-tight">
              The Mommy's Log
              <span className="block text-ml-teal">Blog</span>
            </h1>
            <p className="text-xl text-ml-secondary leading-relaxed">
              Practical tips, honest advice, and helpful guides for your parenting journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-4 -mt-8">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <article className="bg-ml-card rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:shadow-[0_12px_32px_rgba(91,168,159,0.15)] transition-all duration-300 overflow-hidden border border-ml-teal/10">
              <div className="md:flex">
                <div className="md:w-2/5 bg-ml-teal p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      FEATURED
                    </span>
                    <div className="text-6xl mb-4">📱</div>
                    <span className="text-white/80 text-sm font-semibold">{featuredPost.category}</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center gap-3 text-sm text-ml-secondary mb-4">
                    <time>{featuredPost.date}</time>
                    <span className="w-1 h-1 bg-ml-secondary/40 rounded-full"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ml-text mb-4 group-hover:text-ml-teal transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-ml-secondary leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                  <span className="inline-flex items-center text-ml-teal font-bold group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* All Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ml-text">
            Latest Articles
          </h2>
          <span className="text-ml-secondary text-sm font-semibold">
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="h-full bg-ml-card rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.09)] hover:shadow-[0_8px_16px_rgba(91,168,159,0.15)] border border-ml-teal/10 hover:border-ml-teal/30 transition-all duration-300 overflow-hidden">
                <div className="h-1.5 bg-ml-teal"></div>
                <div className="p-6">
                  {post.category && (
                    <span className="inline-block text-xs font-bold text-ml-teal bg-ml-teal/10 px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-ml-text mb-3 group-hover:text-ml-teal transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-ml-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-ml-teal/10">
                    <div className="flex items-center gap-2 text-xs text-ml-secondary">
                      <time>{post.date}</time>
                      <span className="w-1 h-1 bg-ml-secondary/40 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <svg className="w-5 h-5 text-ml-secondary/40 group-hover:text-ml-teal group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ml-secondary text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-ml-teal">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track Your Baby's Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Free forever. No account. Data stays on your device.
          </p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-14 md:h-16"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ml-cream border-t border-ml-teal/10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ml-secondary text-sm">
              © {new Date().getFullYear()} Mommy's Log. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-ml-secondary hover:text-ml-teal text-sm transition font-semibold">
                Home
              </Link>
              <a href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-ml-secondary hover:text-ml-teal text-sm transition font-semibold">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
