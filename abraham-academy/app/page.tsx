import { Metadata } from "next";
import Link from 'next/link';
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import InstructorsInfo from "@/components/InstructorsInfo";
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: "Online Tutoring for Grades 1–12 | Math, Science, Coding & Tajweed",
  description:
    "Unlock academic success from home! Abraham Online Academy offers certified 1-on-1 virtual tutoring tailored for UK, UAE, USA, and global curricula.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <InstructorsInfo />
      
      {/* =========================================
          LATEST ARTICLES PREVIEW SECTION
          ========================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#001a41]">
              Parent Guides & Exam Study Tips
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Read our latest articles on IGCSE preparation, coding logic, and Tajweed learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{post.title}</h3>
                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">{post.metaDescription}</p>
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="mt-4 text-xs font-bold text-[#001a41] hover:text-amber-600 flex items-center gap-1"
                >
                  Read Article →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-[#001a41] hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
