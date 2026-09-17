import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

interface Props {
  params: Promise<{ country: string }>;
}

const countryData: Record<
  string,
  { title: string; subtitle: string; curriculum: string; flag: string }
> = {
  usa: {
    title: "Online Math & Science Tutoring in the USA",
    subtitle: "Common Core, AP & SAT Preparation for Grades 1–12",
    curriculum: "US Common Core & AP Standards",
    flag: "🇺🇸",
  },
  uae: {
    title: "1-on-1 Virtual Tutors in UAE (Dubai, Abu Dhabi)",
    subtitle: "British GCSE/IGCSE, IB & MOE Curriculum Coaching",
    curriculum: "IGCSE, GCSE & IB Frameworks",
    flag: "🇦🇪",
  },
  australia: {
    title: "Online Tutoring for Australian Students (Yr 1–12)",
    subtitle: "ACARA Curriculum, NAPLAN & ATAR Prep",
    curriculum: "ACARA & Senior Secondary",
    flag: "🇦🇺",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = countryData[country.toLowerCase()];
  if (!data) return {};

  return {
    title: `${data.title} | Abraham Online Academy`,
    description: `${data.subtitle}. Personalized 1-on-1 online classes with certified tutors. Book a free trial!`,
    alternates: {
      canonical: `https://abrahamonlineacademy.vercel.app/landing/${country}`,
    },
  };
}

export default async function CountryLandingPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country.toLowerCase()];
  if (!data) notFound();

  const whatsappUrl = "https://wa.me/923135061127?text=" + encodeURIComponent(`Hi! I am located in ${country.toUpperCase()} and interested in a Free Trial Class.`);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 text-center space-y-6">
        <span className="text-4xl">{data.flag}</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001a41]">
          {data.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {data.subtitle}
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3">
          <h2 className="font-bold text-amber-900 text-base">Program Features:</h2>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <FaCheckCircle className="text-amber-500 flex-shrink-0" />
            <span>Aligned with {data.curriculum}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <FaCheckCircle className="text-amber-500 flex-shrink-0" />
            <span>Flexible scheduling matching your local time zone</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <FaCheckCircle className="text-amber-500 flex-shrink-0" />
            <span>1-on-1 personalized guidance & weekly progress logs</span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          <span>Book Free Trial via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}