import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Abraham Online Academy Blog`,
    description: `Read our comprehensive guide on ${formattedTitle}. Certified tutor insights for global students.`,
    alternates: {
      canonical: `https://abrahamonlineacademy.vercel.app/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a41] capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-slate-500 text-sm">Published by Academic Team • Abraham Online Academy</p>
      <div className="prose prose-slate max-w-none leading-relaxed text-slate-700 space-y-4">
        <p>
          Welcome to this detailed guide by Abraham Online Academy. Providing high-quality virtual education across Grades 1–12 globally.
        </p>
      </div>
    </article>
  );
}