import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-mommy-pink to-mommy-rose rounded-xl flex items-center justify-center">
                <span className="text-xl">👶</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Mommy's Log</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/blog" className="text-gray-600 hover:text-mommy-rose transition font-medium">
                Blog
              </Link>
              <a
                href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mommy-lavender/20 via-transparent to-transparent"></div>
        <div className="relative px-4 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-mommy-pink/30 text-mommy-rose px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              100% Free • No Ads • Private
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Track Your Baby's
              <span className="block bg-gradient-to-r from-mommy-rose to-mommy-lavender bg-clip-text text-transparent">
                Daily Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              The simplest way to log feedings and diaper changes.
              All data stays on your device—completely private.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition transform hover:scale-105"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
                  alt="Download on the App Store"
                  className="h-16 md:h-18"
                />
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-mommy-rose font-semibold transition"
              >
                Read Our Blog
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free Forever</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No Account Needed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Works Offline</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Privacy First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need,
              <span className="text-mommy-rose"> Nothing You Don't</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for tired parents who need quick, one-handed tracking at 3 AM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group p-8 rounded-2xl bg-gradient-to-b from-mommy-pink/10 to-transparent hover:from-mommy-pink/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-mommy-pink to-mommy-rose rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🍼</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Track Feedings</h3>
              <p className="text-gray-600 leading-relaxed">
                Log breast, bottle, and formula feedings. Timer included. Knows which side is next.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-b from-mommy-rose/10 to-transparent hover:from-mommy-rose/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-mommy-rose to-mommy-lavender rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🧷</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Log Diapers</h3>
              <p className="text-gray-600 leading-relaxed">
                One-tap diaper tracking. Wet, dirty, or both. Know your baby's patterns.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-b from-mommy-lavender/10 to-transparent hover:from-mommy-lavender/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-mommy-lavender to-purple-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Share with Doctor</h3>
              <p className="text-gray-600 leading-relaxed">
                Export to CSV or text. Perfect for pediatrician visits. They'll be impressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Beautiful & Simple
            </h2>
            <p className="text-xl text-gray-600">
              Clean design that works when you're half asleep
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/main-feedingpage.PNG"
                alt="Mommy's Log - Main Feeding Page"
                width={414}
                height={896}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 transform hover:scale-105 transition-transform duration-300 md:-mt-8">
              <Image
                src="/feeding.PNG"
                alt="Mommy's Log - Feeding Tracker"
                width={414}
                height={896}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/History.PNG"
                alt="Mommy's Log - History View"
                width={414}
                height={896}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">🔒</span>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Your Privacy is Sacred
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  In a world where every app wants your data, we chose different.
                  All your baby's information stays on YOUR device. Always.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    No account required
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    No data collection
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Works offline
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                From Our Blog
              </h2>
              <p className="text-gray-600 text-lg">
                Tips and guides for new parents
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-mommy-rose font-semibold hover:gap-3 transition-all mt-4 md:mt-0"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <article className="h-full bg-white rounded-2xl border border-gray-100 hover:border-mommy-pink hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-mommy-pink to-mommy-lavender"></div>
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block text-xs font-semibold text-mommy-rose bg-mommy-pink/20 px-3 py-1 rounded-full mb-4">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-mommy-rose transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Tracking Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of parents who simplified their baby tracking.
            Free forever. No credit card. No account needed.
          </p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition transform hover:scale-105"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-16 md:h-20"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-mommy-pink to-mommy-rose rounded-xl flex items-center justify-center">
                  <span className="text-xl">👶</span>
                </div>
                <span className="font-bold text-xl text-white">Mommy's Log</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                The simple, private way to track your baby's feedings and diapers. Built by parents, for parents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="mailto:lilianne.cantillo@gmail.com" className="text-gray-400 hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Download</h4>
              <a
                href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1734912000"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Mommy's Log. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
