import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

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
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://mommyslog.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
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

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="bg-gradient-to-br from-mommy-pink/20 via-white to-mommy-lavender/10">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-mommy-rose transition mb-8 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block text-xs font-semibold text-mommy-rose bg-mommy-pink/30 px-3 py-1 rounded-full mb-6">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-mommy-rose prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-mommy-pink prose-blockquote:bg-mommy-pink/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* App CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-mommy-pink/30 to-mommy-lavender/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Track Your Baby's Journey
          </h3>
          <p className="text-gray-700 mb-2 max-w-lg mx-auto">
            Mommy's Log helps you track feedings, diapers, and more — all in one simple, private app.
          </p>
          <p className="text-gray-600 mb-8 text-sm">
            100% Free • No Ads • Privacy-First
          </p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-14 md:h-16"
            />
          </a>
        </div>
      </section>

      {/* Author / Disclaimer */}
      <section className="border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mommy-pink to-mommy-lavender flex items-center justify-center flex-shrink-0">
              <span className="text-xl">👩‍👧</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Written by Mommy's Log Team</p>
              <p className="text-gray-600 text-sm">
                We're moms and developers who created Mommy's Log to help other parents.
                Our articles combine personal experience with research to give you practical, trustworthy advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Read More Articles</h3>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-mommy-rose font-semibold hover:gap-3 transition-all"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mommy's Log. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-500 hover:text-mommy-rose text-sm transition">
                Home
              </Link>
              <Link href="/blog" className="text-gray-500 hover:text-mommy-rose text-sm transition">
                Blog
              </Link>
              <a href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mommy-rose text-sm transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
