import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Mommy's Log | Baby Care Tips & Guides",
  description: "Helpful articles about baby feeding, diaper tracking, and parenting tips for new moms.",
};

export default function BlogPage() {
  const posts = [
    {
      slug: "best-baby-feeding-tracker-apps-2025",
      title: "7 Best Free Baby Feeding Tracker Apps for New Moms (2025)",
      excerpt: "Are you a sleep-deprived new mom trying to remember when your baby last ate? We tested 20+ apps and found the 7 best completely free options.",
      date: "January 21, 2025",
      readTime: "10 min read",
    },
    // Add more posts here as you write them
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <Link href="/" className="text-mommy-rose hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600">
          Tips, guides, and advice for new moms
        </p>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-16 max-w-4xl mx-auto">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-mommy-rose transition">
                    {post.title}
                  </h2>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-mommy-rose font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-mommy-pink/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Try Mommy's Log
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            100% Free Baby Tracking App
          </p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-16"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
