import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaCheckCircle, 
  FaClock, 
  FaWhatsapp, 
  FaGraduationCap, 
  FaBookOpen, 
  FaCalculator 
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "1-on-1 Online Maths, Science & GCSE Tutors UK | Key Stage 1 to A-Levels",
  description: "Specialized 1-on-1 online tutoring for UK students. Master GCSEs, IGCSEs, A-Levels, and Key Stage 1-3 with certified expert tutors. Edexcel, AQA, and OCR exam board prep.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/uk-tutoring",
  },
};

export default function UKLandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("Hello! I am based in the UK and would like to schedule a free 1-on-1 trial class for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇬🇧 UK National Curriculum • Key Stage 1 to A-Levels</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            1-on-1 Online Maths, Science & Exam Revision Built Around UK School Schedules
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Helping primary, secondary, and sixth form students across England, Scotland, Wales, and Northern Ireland excel in GCSEs, IGCSEs, and A-Levels with certified expert tutors.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>Book Free Trial via WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-8 rounded-xl transition-all"
            >
              Reserve Slot Online
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Timezone Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-4 text-center text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>London Time (GMT / BST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>Edexcel, AQA & OCR Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>Grade 9 & A* Exam Tactics</span>
          </div>
        </div>
      </section>

      {/* Academic Pathways */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Targeted Academic Programs for UK Students
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We align directly with your schools exam board specifications, textbook homework, and official mark schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Primary & Key Stage 1–3</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Build bedrock confidence in mental maths, core reading fluency, science basics, and SATs preparation for Years 1 through 9.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Primary Maths & English</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> KS3 Science Foundations</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Year 6 SATs Strategy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaCalculator />
            </div>
            <h3 className="text-lg font-bold text-slate-900">GCSE & IGCSE Target Grade 9</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              In-depth revision and past paper practice for Higher Tier Maths, Triple Science (Physics, Chemistry, Biology), and English.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Official Past Paper Dissection</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Examiner Mark Scheme Training</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Edexcel, AQA & Cambridge CIE</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaBookOpen />
            </div>
            <h3 className="text-lg font-bold text-slate-900">A-Level & Sixth Form Success</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rigorous 1-on-1 coaching in A-Level Pure Maths, Mechanics, Statistics, Physics, Chemistry, and Biology to secure university entry.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> A* Problem-Solving Logic</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Advanced Calculus & Vectors</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> UCAS Academic Coaching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Free Trial Class in UK Time</h2>
          <p className="text-slate-300 text-sm">
            Try our interactive digital whiteboard classroom and match your child with an expert tutor in your local time zone.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm mt-2"
          >
            <FaWhatsapp className="text-lg" />
            <span>Connect on WhatsApp (+92 314 9500765)</span>
          </a>
        </div>
      </section>
    </div>
  );
}