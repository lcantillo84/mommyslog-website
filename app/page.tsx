import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getAllPosts } from "@/lib/blog";
import ScrollReveal from "./components/ScrollReveal";
import AutoplayVideo from "./components/AutoplayVideo";

const categoryColors: Record<string, string> = {
  "Baby Gear":     "bg-[#5BA89F]/10 text-[#3d7a72]",
  "Baby Sleep":    "bg-[#7c6fa0]/10 text-[#4a3f6b]",
  "Breastfeeding": "bg-[#e8a0b4]/20 text-[#c4607a]",
  "Baby Care":     "bg-[#C4A07A]/15 text-[#8c6d4f]",
  "New Parents":   "bg-[#B8D4E0]/20 text-[#5a8fa3]",
  "App Reviews":   "bg-[#252220]/10 text-[#252220]",
};

export default function Home() {
  const allPosts = getAllPosts();
  const pinnedSlug = "best-baby-feeding-tracker-apps-2025";
  const pinned = allPosts.find((p) => p.slug === pinnedSlug);
  const others = allPosts.filter((p) => p.slug !== pinnedSlug).slice(0, 2);
  const posts = pinned ? [pinned, ...others] : allPosts.slice(0, 3);

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mommy's Log",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "100" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://apps.apple.com/us/app/mommys-log/id6755473620",
  };

  return (
    <main className="min-h-screen bg-ml-cream">
      <Script
        id="software-app-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ml-cream/80 backdrop-blur-md border-b border-ml-teal/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-ml-teal rounded-xl flex items-center justify-center">
                <span className="text-xl">👶</span>
              </div>
              <span className="font-bold text-xl text-ml-text">Mommy&apos;s Log</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/blog" className="text-ml-secondary hover:text-ml-teal transition font-semibold">Blog</Link>
              <a
                href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-ml-teal text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO — split layout, above-fold animations fire immediately ── */}
      <section className="bg-ml-cream px-4 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: copy */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-ml-teal/10 text-ml-teal px-4 py-2 rounded-full text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-ml-teal rounded-full animate-pulse" />
                100% Free · No Ads · Private
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ml-text mb-5 leading-tight">
                Baby tracking,
                <span className="block text-ml-teal">finally simple.</span>
              </h1>
              <p className="text-xl text-ml-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Log feedings and diapers in seconds — no subscription, no account, no ads. Built for tired parents at 3 AM.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <a
                    href="https://apps.apple.com/us/app/mommys-log/id6755473620"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block hover:opacity-90 transition transform hover:scale-105"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
                      alt="Download on the App Store"
                      className="h-14 md:h-16"
                    />
                  </a>
                  <p className="text-sm text-ml-secondary font-semibold">
                    ⭐⭐⭐⭐⭐ <span className="text-ml-text">4.9</span> · App Store
                  </p>
                </div>
                <Link href="/blog" className="inline-flex items-center gap-2 text-ml-secondary hover:text-ml-teal font-semibold transition">
                  Read Our Blog
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: app preview video + floating cards */}
            <div className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto animate-scale-in flex items-center justify-center" style={{ animationDelay: "0.15s" }}>
              <div className="relative w-[240px] md:w-[280px] lg:w-[300px]">
                <div className="rounded-[36px] overflow-hidden shadow-[0_24px_64px_rgba(91,168,159,0.25)] border-8 border-ml-text bg-ml-text">
                  <AutoplayVideo src="/app-preview-v2.mp4" className="w-full h-auto block" />
                </div>

                {/* Floating card 1 — continuously bobs */}
                <div className="absolute -left-16 top-10 bg-ml-card rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.13)] px-4 py-3 flex items-center gap-3 border border-ml-teal/10 animate-slide-in-up animate-float" style={{ animationDelay: "0.35s" }}>
                  <div className="w-10 h-10 bg-ml-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🍼</span>
                  </div>
                  <div>
                    <p className="text-xs text-ml-secondary font-semibold">Last feeding</p>
                    <p className="text-sm font-bold text-ml-text">2h 14m ago · Left</p>
                  </div>
                </div>

                {/* Floating card 2 — bobs with offset phase */}
                <div className="absolute -right-16 bottom-12 bg-ml-card rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.13)] px-4 py-3 flex items-center gap-3 border border-ml-teal/10 animate-slide-in-up animate-float-alt" style={{ animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 bg-ml-caramel/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🧷</span>
                  </div>
                  <div>
                    <p className="text-xs text-ml-secondary font-semibold">Today&apos;s diapers</p>
                    <p className="text-sm font-bold text-ml-text">7 logged ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-6 border-y border-ml-teal/10 bg-ml-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14">
            {[
              { icon: "🎁", label: "Free Forever" },
              { icon: "🔒", label: "No Account Needed" },
              { icon: "📵", label: "Works Offline" },
              { icon: "🛡️", label: "Privacy First" },
              { icon: "⭐", label: "4.9 App Store" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-ml-secondary">
                <span className="text-lg">{icon}</span>
                <span className="font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — steps slide in from alternating sides ── */}
      <section className="px-4 py-20 bg-ml-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ml-text mb-3">How it works</h2>
            <p className="text-lg text-ml-secondary">Three taps. Done.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {([
              { step: "1", icon: "🍼", title: "Tap to log", desc: "One tap starts a feeding or diaper log. Built-in timer, side tracking, and auto-suggestions — no typing required.", dir: "left" },
              { step: "2", icon: "📅", title: "See your patterns", desc: "Full history by day. Spot cluster feeding, track diaper output, and walk into pediatrician visits with real data.", dir: "up" },
              { step: "3", icon: "🔄", title: "Share with your partner", desc: "Both parents see everything in real time via iCloud. No shared account — just open the app and it's there.", dir: "right" },
            ] as const).map(({ step, icon, title, desc, dir }, i) => (
              <ScrollReveal key={step} direction={dir} delay={i * 80}>
                <div className="bg-ml-card rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)] border border-ml-teal/10 text-center hover:shadow-[0_12px_32px_rgba(91,168,159,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-ml-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step}</span>
                  </div>
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-lg font-bold text-ml-text mb-2">{title}</h3>
                  <p className="text-ml-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES — spring pop-in staggered ── */}
      <section className="px-4 py-20 md:py-28 bg-ml-card">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ml-text mb-4">
              Everything you need.
              <span className="text-ml-teal"> Nothing you don&apos;t.</span>
            </h2>
            <p className="text-xl text-ml-secondary max-w-2xl mx-auto">
              Built for tired parents who need quick, one-handed logging at 3 AM.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { bg: "bg-ml-blue", icon: "🍼", title: "Log Feedings", desc: "Breast, bottle, or formula — tap and done. Built-in timer. Knows which side is next." },
              { bg: "bg-ml-caramel/40", icon: "🧷", title: "Track Diapers", desc: "One tap to log wet, dirty, or both. Know your baby's patterns at a glance." },
              { bg: "bg-ml-sand/60", icon: "📅", title: "Full History", desc: "Review every feeding and diaper by day. Export to CSV for pediatrician visits." },
              { bg: "bg-ml-teal", icon: "🔄", title: "Partner Sync", desc: "Both parents see everything in real time. Powered by iCloud.", featured: true },
            ].map(({ bg, icon, title, desc, featured }, i) => (
              <ScrollReveal key={title} direction="pop" delay={i * 90}>
                <div className={`h-full rounded-[20px] p-8 shadow-[0_4px_8px_rgba(0,0,0,0.09)] hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(91,168,159,0.18)] transition-all duration-300 cursor-default ${featured ? "bg-ml-teal/10 border border-ml-teal/20" : "bg-ml-cream"}`}>
                  <div className={`w-14 h-14 ${bg} rounded-[16px] flex items-center justify-center mb-5`}>
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-ml-text">{title}</h3>
                  <p className="text-ml-secondary text-sm leading-relaxed">{desc}</p>
                  {featured && (
                    <span className="inline-block mt-3 text-xs font-bold text-ml-teal bg-ml-teal/10 px-3 py-1 rounded-full">
                      New · $2.99/mo
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section className="px-4 py-20 bg-ml-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ml-text mb-4">Clean. Simple. Calm.</h2>
            <p className="text-xl text-ml-secondary">Designed to work when you&apos;re half asleep.</p>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-5 gap-6 items-end overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { src: "/01-log-feedings.jpg", alt: "Mommy's Log - Log Feedings" },
              { src: "/02-track-diaper.jpg", alt: "Mommy's Log - Track Diapers" },
              { src: "/03-review-history.jpg", alt: "Mommy's Log - Review History" },
              { src: "/04-sync-partner.jpg", alt: "Mommy's Log - Sync with Partner" },
              { src: "/05-see-patterns.jpg", alt: "Mommy's Log - See Patterns" },
            ].map(({ src, alt }, i) => (
              <ScrollReveal key={src} direction="pop" delay={i * 80} className="snap-center shrink-0 w-[260px] md:w-auto">
                <div className="rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-8 border-ml-text bg-ml-text transform hover:scale-105 hover:shadow-[0_20px_48px_rgba(0,0,0,0.20)] transition-all duration-300">
                  <Image src={src} alt={alt} width={414} height={896} className="w-full h-auto" priority={i === 0} />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-sm text-ml-secondary mt-4 md:hidden">← Swipe to see more →</p>
        </div>
      </section>

      {/* ── PARTNER SYNC — slide in from sides ── */}
      <section className="px-4 py-20 bg-ml-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="bg-ml-cream rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.09)] overflow-hidden border border-ml-teal/15">
              <div className="bg-ml-teal px-8 py-4 flex items-center gap-3">
                <span className="text-white text-sm font-bold tracking-wide uppercase">New Feature</span>
                <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">7-day free trial</span>
              </div>
              <div className="p-8 md:p-12">
                <div className="md:flex items-center gap-12">
                  <div className="flex-1 mb-8 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-ml-text mb-4">Partner &amp; Nanny Sync</h2>
                    <p className="text-ml-secondary text-lg leading-relaxed mb-6">
                      Share your baby&apos;s log with a partner, co-parent, or nanny. Everything stays in sync automatically — powered by iCloud, no account needed.
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
                      target="_blank" rel="noopener noreferrer"
                      className="inline-block bg-ml-teal text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all text-sm"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section className="px-4 py-20 bg-ml-cream">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="bg-ml-teal/8 border border-ml-teal/20 rounded-[20px] p-10 md:p-14">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-ml-teal rounded-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🔒</span>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-ml-text mb-3">Your data stays yours. Always.</h2>
                  <p className="text-lg text-ml-secondary mb-6">No servers. No accounts. No data collection. Everything lives on your device.</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {["No account required", "No data collection", "Works offline"].map((label) => (
                      <span key={label} className="inline-flex items-center gap-2 bg-ml-card px-4 py-2 rounded-full text-sm font-semibold text-ml-text shadow-sm">
                        <span className="w-2 h-2 bg-ml-teal rounded-full" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="px-4 py-20 bg-ml-card">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="left" className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ml-text mb-2">From Our Blog</h2>
              <p className="text-ml-secondary text-lg">Tips and guides for new parents</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-ml-teal font-bold hover:gap-3 transition-all mt-4 md:mt-0">
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} direction="up" delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full bg-ml-cream rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.09)] hover:shadow-[0_16px_36px_rgba(91,168,159,0.20)] border border-ml-teal/10 hover:border-ml-teal/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    {post.image ? (
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {post.category && (
                          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm ${categoryColors[post.category] ?? "text-ml-teal"}`}>
                            {post.category}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="h-1.5 bg-ml-teal" />
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-ml-text mb-2 group-hover:text-ml-teal transition line-clamp-2">{post.title}</h3>
                      <p className="text-ml-secondary text-sm leading-relaxed line-clamp-2 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-ml-teal/10 text-xs text-ml-secondary">
                        <span>{post.readTime}</span>
                        <svg className="w-4 h-4 text-ml-secondary/40 group-hover:text-ml-teal group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-4 py-20 md:py-28 bg-ml-teal">
        <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start tracking today.</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Free forever. No credit card. No account needed.</p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank" rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition transform hover:scale-105"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-16 md:h-20"
            />
          </a>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ml-text border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-ml-teal rounded-xl flex items-center justify-center">
                  <span className="text-xl">👶</span>
                </div>
                <span className="font-bold text-xl text-white">Mommy&apos;s Log</span>
              </div>
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                The simple, private way to track your baby&apos;s feedings and diapers. Built by parents, for parents.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-white/50 hover:text-white transition text-sm">Blog</Link></li>
                <li><a href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition text-sm">Privacy Policy</a></li>
                <li><a href="mailto:lilianne.cantillo@gmail.com" className="text-white/50 hover:text-white transition text-sm">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Download</h4>
              <a href="https://apps.apple.com/us/app/mommys-log/id6755473620" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1734912000" alt="Download on the App Store" className="h-12" />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            © {new Date().getFullYear()} Mommy&apos;s Log. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
