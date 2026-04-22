import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen bg-ml-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ml-cream/80 backdrop-blur-md border-b border-ml-teal/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-ml-teal rounded-xl flex items-center justify-center">
                <span className="text-xl">👶</span>
              </div>
              <span className="font-bold text-xl text-ml-text">Mommy's Log</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/blog" className="text-ml-secondary hover:text-ml-teal transition font-semibold">
                Blog
              </Link>
              <a
                href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-ml-teal text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-ml-cream px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-ml-teal/10 text-ml-teal px-4 py-2 rounded-full text-sm font-bold mb-8">
              <span className="w-2 h-2 bg-ml-teal rounded-full animate-pulse"></span>
              100% Free · No Ads · Private
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-ml-text mb-6 leading-tight">
              Baby tracking,
              <span className="block text-ml-teal">
                finally simple.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-ml-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Log feedings and diapers in seconds. All data stays on your device.
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
                className="inline-flex items-center gap-2 text-ml-secondary hover:text-ml-teal font-semibold transition"
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
      <section className="py-8 border-y border-ml-teal/10 bg-ml-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "Free Forever",
              "No Account Needed",
              "Works Offline",
              "Privacy First",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2 text-ml-secondary">
                <svg className="w-5 h-5 text-ml-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 md:py-28 bg-ml-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ml-text mb-4">
              Everything you need.
              <span className="text-ml-teal"> Nothing you don't.</span>
            </h2>
            <p className="text-xl text-ml-secondary max-w-2xl mx-auto">
              Built for tired parents who need quick, one-handed logging at 3 AM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-ml-card rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)]">
              <div className="w-14 h-14 bg-ml-blue rounded-[16px] flex items-center justify-center mb-5">
                <span className="text-2xl">🍼</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ml-text">Log Feedings</h3>
              <p className="text-ml-secondary text-sm leading-relaxed">
                Breast, bottle, or formula — tap and done. Built-in timer. Knows which side is next.
              </p>
            </div>

            <div className="bg-ml-card rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)]">
              <div className="w-14 h-14 bg-ml-caramel/40 rounded-[16px] flex items-center justify-center mb-5">
                <span className="text-2xl">🧷</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ml-text">Track Diapers</h3>
              <p className="text-ml-secondary text-sm leading-relaxed">
                One tap to log wet, dirty, or both. Know your baby's patterns at a glance.
              </p>
            </div>

            <div className="bg-ml-card rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)]">
              <div className="w-14 h-14 bg-ml-sand/60 rounded-[16px] flex items-center justify-center mb-5">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ml-text">Full History</h3>
              <p className="text-ml-secondary text-sm leading-relaxed">
                Review every feeding and diaper by day. Export to CSV for pediatrician visits.
              </p>
            </div>

            <div className="bg-ml-teal/10 rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)] border border-ml-teal/20">
              <div className="w-14 h-14 bg-ml-teal rounded-[16px] flex items-center justify-center mb-5">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ml-text">Partner Sync</h3>
              <p className="text-ml-secondary text-sm leading-relaxed">
                Both parents see everything in real time. Powered by iCloud.
              </p>
              <span className="inline-block mt-3 text-xs font-bold text-ml-teal bg-ml-teal/10 px-3 py-1 rounded-full">
                New · $2.99/mo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Sync Section */}
      <section className="px-4 py-20 bg-ml-card">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ml-cream rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.09)] overflow-hidden border border-ml-teal/15">
            <div className="bg-ml-teal px-8 py-4 flex items-center gap-3">
              <span className="text-white text-sm font-bold tracking-wide uppercase">New Feature</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">7-day free trial</span>
            </div>
            <div className="p-8 md:p-12">
              <div className="md:flex items-center gap-12">
                <div className="flex-1 mb-8 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-ml-text mb-4">
                    Partner & Nanny Sync
                  </h2>
                  <p className="text-ml-secondary text-lg leading-relaxed mb-6">
                    Share your baby's log with a partner, co-parent, or nanny. Everything stays in sync automatically — powered by iCloud, no account needed.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time updates across all devices",
                      "Works over iCloud — completely private",
                      "Both caregivers log and see the same data",
                      "7-day free trial, then $2.99/month",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-ml-secondary">
                        <svg className="w-5 h-5 text-ml-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-28 h-28 bg-ml-teal/10 rounded-[28px] flex items-center justify-center border border-ml-teal/20">
                    <span className="text-5xl">🔄</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-ml-teal">$2.99</p>
                    <p className="text-sm text-ml-secondary font-medium">per month</p>
                    <p className="text-xs text-ml-teal font-semibold mt-1">Try free for 7 days</p>
                  </div>
                  <a
                    href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ml-teal text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition text-sm"
                  >
                    Get Started Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 py-20 bg-ml-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ml-text mb-4">
              Clean. Simple. Calm.
            </h2>
            <p className="text-xl text-ml-secondary">
              Designed to work when you're half asleep.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { src: "/main-feedingpage.PNG", alt: "Mommy's Log - Main Feeding Page" },
              { src: "/feeding.PNG", alt: "Mommy's Log - Feeding Tracker", offset: true },
              { src: "/History.PNG", alt: "Mommy's Log - History View" },
            ].map(({ src, alt, offset }) => (
              <div
                key={src}
                className={`rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-8 border-ml-text bg-ml-text transform hover:scale-105 transition-transform duration-300${offset ? " md:-mt-8" : ""}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={414}
                  height={896}
                  className="w-full h-auto"
                  priority={src.includes("main")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="px-4 py-20 bg-ml-card">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ml-teal/8 border border-ml-teal/20 rounded-[20px] p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-ml-teal rounded-[20px] flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🔒</span>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-ml-text mb-3">
                  Your data stays yours. Always.
                </h2>
                <p className="text-lg text-ml-secondary mb-6">
                  No servers. No accounts. No data collection. Everything lives on your device.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["No account required", "No data collection", "Works offline"].map((label) => (
                    <span key={label} className="inline-flex items-center gap-2 bg-ml-cream px-4 py-2 rounded-full text-sm font-semibold text-ml-text shadow-sm">
                      <span className="w-2 h-2 bg-ml-teal rounded-full"></span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="px-4 py-20 bg-ml-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ml-text mb-2">
                From Our Blog
              </h2>
              <p className="text-ml-secondary text-lg">
                Tips and guides for new parents
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ml-teal font-bold hover:gap-3 transition-all mt-4 md:mt-0"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <article className="h-full bg-ml-card rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.09)] hover:shadow-[0_8px_16px_rgba(91,168,159,0.15)] border border-ml-teal/10 hover:border-ml-teal/30 transition-all duration-300 overflow-hidden">
                  <div className="h-1.5 bg-ml-teal"></div>
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block text-xs font-bold text-ml-teal bg-ml-teal/10 px-3 py-1 rounded-full mb-4">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-ml-text mb-3 group-hover:text-ml-teal transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-ml-secondary text-sm leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-ml-teal/10 text-xs text-ml-secondary">
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
      <section className="px-4 py-20 md:py-28 bg-ml-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start tracking today.
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
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
      <footer className="bg-ml-text border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-ml-teal rounded-xl flex items-center justify-center">
                  <span className="text-xl">👶</span>
                </div>
                <span className="font-bold text-xl text-white">Mommy's Log</span>
              </div>
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                The simple, private way to track your baby's feedings and diapers. Built by parents, for parents.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-white/50 hover:text-white transition text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="mailto:lilianne.cantillo@gmail.com" className="text-white/50 hover:text-white transition text-sm">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Download</h4>
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
          <div className="pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            © {new Date().getFullYear()} Mommy's Log. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
