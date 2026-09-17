import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Educational Blog & Exam Study Guides | Abraham Online Academy",
  description:
    "Free study guides, exam preparation tips for GCSE/SAT, mental math hacks, and online learning insights for parents.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/blog",
  },
};

const posts = [
  {
    slug: "mastering-gcse-math-tips",
    title: "How to Score Band 9 in GCSE Mathematics: 5 Exam Secrets",
    snippet:
      "Avoid common calculation traps and master multi-step problem solving with our certified tutors' breakdown.",
    date: "2026-09-10",
  },
  {
    slug: "why-coding-is-essential-for-kids",
    title: "Why Kids Should Learn Python and Scratch Before Age 12",
    snippet:
      "Building computational logic early prepares students for high school computer science and future STEM careers.",
    date: "2026-09-12",
  },
];

export default function BlogHub() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-[#001a41]">
          Educational Blog & Study Guides
        </h1>
        <p className="text-slate-600">
          Expert advice, study tips, and curriculum breakdowns for students and parents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs text-amber-600 font-semibold">{post.date}</span>
              <h2 className="text-xl font-bold text-slate-900">{post.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{post.snippet}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 text-sm font-bold text-amber-600 hover:underline"
            >
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}