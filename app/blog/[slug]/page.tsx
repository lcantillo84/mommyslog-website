import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Script from "next/script";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Mommy's Log`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://mommyslog.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://mommyslog.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: post.image ? [{ url: post.image, width: 1200, height: 600, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: post.image || undefined,
    keywords: post.keywords?.join(", "),
    author: {
      "@type": "Organization",
      name: "Mommy's Log",
      url: "https://mommyslog.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Mommy's Log",
      url: "https://mommyslog.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mommyslog.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mommyslog.com/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mommyslog.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mommyslog.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://mommyslog.com/blog/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-ml-cream">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ml-cream/80 backdrop-blur-md border-b border-ml-teal/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-ml-teal rounded-xl flex items-center justify-center">
              <span className="text-lg">👶</span>
            </div>
            <span className="font-bold text-lg text-ml-text">Mommy&apos;s Log</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-ml-secondary hover:text-ml-teal transition text-sm font-semibold">
              ← Blog
            </Link>
            <a
              href="https://apps.apple.com/us/app/mommys-log/id6755473620"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-ml-teal text-white px-4 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition"
            >
              Download Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-ml-cream border-b border-ml-teal/10">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          {post.category && (
            <span className="inline-block text-xs font-bold text-ml-teal bg-ml-teal/10 px-3 py-1 rounded-full mb-5">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-ml-text leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-ml-secondary text-sm">
            <time>{post.date}</time>
            <span className="w-1 h-1 bg-ml-secondary/40 rounded-full"></span>
            <span>{post.readTime}</span>
            {post.affiliate && (
              <>
                <span className="w-1 h-1 bg-ml-secondary/40 rounded-full"></span>
                <span>Contains affiliate links</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Description pull-quote */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-lg md:text-xl text-ml-secondary leading-relaxed border-l-4 border-ml-teal pl-5">
          {post.description}
        </p>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-ml-text
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-ml-teal/15 prose-h2:pb-3
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-ml-teal
          prose-p:text-ml-secondary prose-p:leading-relaxed prose-p:text-base
          prose-a:text-ml-teal prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-ml-text prose-strong:font-bold
          prose-ul:space-y-1.5 prose-ol:space-y-1.5
          prose-li:text-ml-secondary prose-li:text-base
          prose-blockquote:border-l-4 prose-blockquote:border-ml-teal prose-blockquote:bg-ml-teal/8 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-ml-secondary
          prose-table:text-sm prose-th:bg-ml-teal/10 prose-th:text-ml-text
          prose-hr:border-ml-teal/15
          prose-em:text-ml-secondary/70 prose-em:text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* App CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-ml-teal rounded-[24px] p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">👶</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Track your baby for free
          </h3>
          <p className="text-white/80 mb-2 max-w-sm mx-auto">
            Feedings, diapers, sleep — all in one place. No account needed.
          </p>
          <p className="text-white/60 text-sm mb-8">100% Free · No Ads · All data stays on your phone</p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition transform hover:scale-105"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-14 md:h-16"
            />
          </a>
        </div>
      </section>

      {/* Author */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex items-start gap-4 bg-ml-card rounded-2xl p-6 border border-ml-teal/10">
          <div className="w-12 h-12 rounded-full bg-ml-teal/15 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">👩‍👧</span>
          </div>
          <div>
            <p className="font-bold text-ml-text mb-1">Written by Mommy&apos;s Log</p>
            <p className="text-ml-secondary text-sm leading-relaxed">
              We&apos;re moms who built an app and now share everything we wish someone had told us. Real talk, no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* More articles */}
      <div className="border-t border-ml-teal/10 bg-ml-card">
        <div className="max-w-3xl mx-auto px-6 py-10 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-ml-teal font-bold hover:gap-3 transition-all">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            More articles
          </Link>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-ml-teal hover:opacity-80 transition"
          >
            Download the app →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ml-text">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Mommy&apos;s Log. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="text-white/40 hover:text-white text-sm transition">Home</Link>
              <Link href="/blog" className="text-white/40 hover:text-white text-sm transition">Blog</Link>
              <a href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
