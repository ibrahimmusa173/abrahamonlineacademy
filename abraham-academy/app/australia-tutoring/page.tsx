import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaCheckCircle, 
  FaClock, 
  FaWhatsapp, 
  FaCalculator, 
  FaBookOpen, 
  FaAward 
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "1-on-1 Online Maths & Science Tutors Australia | ACARA & ATAR Prep",
  description: "Personalized 1-on-1 online tutoring for Australian students in Years 1–12. Aligned with ACARA curriculum, NAPLAN, NSW HSC, VIC VCE, and QLD QCE.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/australia-tutoring",
  },
};

export default function AustraliaLandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("G'day! I am based in Australia and would like to inquire about 1-on-1 tutoring for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇦🇺 ACARA Aligned • Years 1–12 • Sydney, Melbourne, Brisbane & Perth</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            1-on-1 Online Maths, Science & ATAR Coaching Built for Australian Students
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Helping primary and high school students across Australia excel in NAPLAN, master state curricula (HSC, VCE, QCE, WACE), and maximize their ATAR scores.
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

      {/* Timezone Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-4 text-center text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Australian Eastern Time (AEST / AEDT)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Australian Western Time (AWST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>ACARA & State Syllabus Compliant</span>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Curriculum Expertise for Australian Schools
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We focus on conceptual understanding, school assessment tasks, and strategic exam prep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaCalculator />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Primary & NAPLAN (Years 1–6)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Strengthen foundational numeracy, mental strategies, grammar, and narrative writing tailored for NAPLAN test years (Years 3 & 5).
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> ACARA Maths Foundations</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> NAPLAN Test Preparation</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Reading & Writing Skills</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaBookOpen />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Junior Secondary (Years 7–10)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Smooth transition into abstract algebra, geometry proofs, scientific inquiry, and structured essay writing before senior years.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Advanced Algebra & Geometry</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Science Literacy & Chemistry</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> NAPLAN Year 7 & 9 Support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaAward />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Senior HSC, VCE & ATAR Track</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-impact coaching for Specialist Maths, Mathematical Methods, Physics, and Chemistry to boost your internal rankings and final ATAR.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> HSC, VCE, QCE & WACE Prep</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Past Trial Exam Analysis</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> High ATAR Scaling Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#001a41] text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Free Trial Class in Australian Time</h2>
          <p className="text-slate-300 text-sm">
            Book an after-school or weekend trial session with our expert 1-on-1 tutors today.
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
