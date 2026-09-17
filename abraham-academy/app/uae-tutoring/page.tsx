import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaCheckCircle, 
  FaClock, 
  FaWhatsapp, 
  FaQuran, 
  FaMicroscope, 
  FaCalculator 
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "1-on-1 British & IB Online Tutors in UAE | Dubai, Abu Dhabi, Sharjah",
  description: "Specialized online tutoring for UAE families. Covering GCSE, IGCSE, IB DP/MYP, and Tajweed with native-level English instructors matching GST timezones.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/uae-tutoring",
  },
};

export default function UAELandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("Hello! I am based in the UAE and would like to inquire about 1-on-1 tutoring for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇦🇪 UAE Standard Time (GST) • Dubai, Abu Dhabi & Sharjah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Premium 1-on-1 Virtual Tutoring Aligned with British & IB Curricula
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Personalized academic support in Mathematics, Sciences, English, and structured Tajweed for students attending international schools across the UAE.
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
              Contact Academic Team
            </Link>
          </div>
        </div>
      </section>

      {/* Convenience Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-4 text-center text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>After-School & Weekend Slots</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>Edexcel, AQA & Cambridge (CIE)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>IB MYP & Diploma Support</span>
          </div>
        </div>
      </section>

      {/* UAE Key Offerings */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Curriculum Expertise for UAE International Schools
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We focus on individual student needs, bridging classroom gaps and preparing learners for competitive board examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaCalculator />
            </div>
            <h3 className="text-lg font-bold text-slate-900">IGCSE & GCSE Revision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              In-depth coverage of exam past papers, mark schemes, and core concepts in Higher Math, Physics, and Chemistry.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Past Paper Strategy</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Formula Application</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Grade 9 Focus Techniques</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaMicroscope />
            </div>
            <h3 className="text-lg font-bold text-slate-900">IB Middle Years & Diploma</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Structured guidance for IB Mathematics (AA & AI) and Sciences, helping students manage heavy internal assessment workloads.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Standard & Higher Level</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Concept Frameworks</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Critical Writing Skills</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaQuran />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tajweed & Islamic Values</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Patient, 1-on-1 Quranic recitation classes led by certified teachers, focusing on correct Makharij rules and memorization.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Correct Pronunciation</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Male & Female Instructors</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Tailored Progress Pace</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#001a41] text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Free Trial Class in UAE Time</h2>
          <p className="text-slate-300 text-sm">
            Speak directly with our academic team to find a class time that fits your familys routine.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm mt-2"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp Us Now (+92 314 9500765)</span>
          </a>
        </div>
      </section>
    </div>
  );
}