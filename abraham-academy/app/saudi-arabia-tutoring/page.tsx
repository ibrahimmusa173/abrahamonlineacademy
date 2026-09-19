import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaCheckCircle, 
  FaClock, 
  FaWhatsapp, 
  FaQuran, 
  FaGraduationCap, 
  FaMicroscope 
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "1-on-1 Online Tutors Saudi Arabia | Riyadh, Jeddah & Dammam",
  description: "Specialized 1-on-1 online tutoring for international school students in KSA. Covering British IGCSE/A-Levels, US AP, IB, and Tajweed with native-level English instructors matching AST timezone.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/saudi-arabia-tutoring",
  },
};

export default function SaudiArabiaLandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("Assalamu Alaikum! I am based in Saudi Arabia and would like to inquire about 1-on-1 tutoring for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇸🇦 Arabia Standard Time (AST) • Riyadh, Jeddah, Dammam & Khobar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Premium 1-on-1 Online Tutoring for International School Students in Saudi Arabia
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Personalized academic instruction in Mathematics, Sciences, English, Coding, and certified Tajweed for expat and local families attending British, American, and IB schools across the Kingdom.
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
            <span>Convenient Evening & Weekend Schedules</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>British, US & IB Curricula Mastery</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            <span>Native-Level English Tutors</span>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Specialized Academic Services in Saudi Arabia
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We support students attending top international schools with personalized 1-on-1 virtual instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-bold text-slate-900">British Curriculum (IGCSE & A-Level)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Excellence in Cambridge (CIE) and Edexcel International GCSEs and A-Levels in Higher Mathematics, Physics, Chemistry, and Biology.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Past Paper Exam Technique</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Formula & Unit Conversion</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Target Grade 9 & A* Strategies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaMicroscope />
            </div>
            <h3 className="text-lg font-bold text-slate-900">American & IB Program Track</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Comprehensive support for Common Core Math, AP Calculus, Digital SAT prep, and IB Middle Years / Diploma Sciences.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Digital SAT Math Strategies</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> AP Course & Exam Coaching</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> IB Internal Assessments</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaQuran />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tajweed & Islamic Values</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Patient 1-on-1 Quran recitation and memorization led by certified male and female scholars, focusing on accurate Makharij rules.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Certified Male & Female Scholars</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Noorani Qaida to Full Nazra</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Flexible Home Schedule</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#001a41] text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Free Trial Class in KSA Local Time</h2>
          <p className="text-slate-300 text-sm">
            Speak directly with our academic team to set up a free 1-on-1 trial class tailored to your childs school board.
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