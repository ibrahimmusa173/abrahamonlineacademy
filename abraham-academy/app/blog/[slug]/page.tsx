import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Abraham Online Academy`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://abrahamonlineacademy.vercel.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/923149500765?text=" +
    encodeURIComponent(`Hi! I read your article "${post.title}" and would like to ask about a Free Trial Class.`);

  return (
    <article className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#001a41] transition-colors"
        >
          <FaArrowLeft />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-slate-400">• Published {post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#001a41] leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-600 text-sm italic border-l-4 border-amber-500 pl-4 py-1">
            {post.metaDescription}
          </p>
        </div>

        {/* Article Content Body */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-[#001a41] text-white p-8 rounded-3xl text-center space-y-4 shadow-lg">
          <h3 className="text-xl font-bold">Want 1-on-1 Academic Help for Your Child?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Book a 100% Free Trial Class with certified expert tutors at Abraham Online Academy.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
          >
            <FaWhatsapp className="text-lg" />
            <span>Book Free Trial via WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}