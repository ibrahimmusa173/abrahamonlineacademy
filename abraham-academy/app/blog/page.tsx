import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Educational Blog & Exam Study Guides | Abraham Online Academy",
  description:
    "Free study guides, exam preparation tips for GCSE/SAT, mental math hacks, and online learning insights for parents.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/blog",
  },
};

export default function BlogHub() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a41]">
          Educational Blog & Parent Guides
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Practical study strategies, IGCSE exam breakdowns, and guidance for families learning online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-amber-600 uppercase tracking-wider">{post.category}</span>
                <span className="text-slate-400">{post.date}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 leading-snug">{post.title}</h2>
              <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                {post.metaDescription}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 text-xs font-bold text-[#001a41] hover:text-amber-600 flex items-center gap-1"
            >
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}