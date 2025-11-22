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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mommy-pink/30 via-white to-mommy-lavender/20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-mommy-rose transition mb-8 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Mommy's Log
              <span className="block text-mommy-rose">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical tips, honest advice, and helpful guides for your parenting journey.
              Written by moms, for moms.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-4 -mt-8">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <article className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-mommy-pink to-mommy-lavender p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block bg-white/90 text-mommy-rose text-xs font-bold px-3 py-1 rounded-full mb-4">
                      FEATURED
                    </span>
                    <div className="text-6xl mb-4">📱</div>
                    <span className="text-white/80 text-sm font-medium">{featuredPost.category}</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <time>{featuredPost.date}</time>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-mommy-rose transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                  <span className="inline-flex items-center text-mommy-rose font-semibold group-hover:gap-3 gap-2 transition-all">
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <span className="text-gray-500 text-sm">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="h-full bg-white rounded-xl border border-gray-100 hover:border-mommy-pink hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-mommy-pink to-mommy-lavender"></div>
                <div className="p-6">
                  {post.category && (
                    <span className="inline-block text-xs font-semibold text-mommy-rose bg-mommy-pink/20 px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mommy-rose transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <time>{post.date}</time>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-mommy-rose group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-gray-500 text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track Your Baby's Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mommy's Log makes it easy to track feedings and diapers.
            100% free, no ads, and your data stays private.
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
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mommy's Log. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-500 hover:text-mommy-rose text-sm transition">
                Home
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-mommy-rose text-sm transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
