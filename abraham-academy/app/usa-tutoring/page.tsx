import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaCheckCircle, 
  FaClock, 
  FaWhatsapp, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaBookReader 
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Online Math & Science Tutoring USA | Common Core, AP & SAT Prep",
  description: "Targeted 1-on-1 online tutoring for US students from elementary to high school. Aligned with Common Core, AP classes, and SAT math prep across EST, CST, MST, and PST.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/usa-tutoring",
  },
};

export default function USALandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("Hi! I am based in the US and would like to schedule a free 1-on-1 trial class for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇺🇸 US Curriculum Aligned • Grades K–12</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            1-on-1 Online Math, Science & AP Tutoring Built Around Your Child’s Schedule
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Helping elementary, middle, and high school students across the United States master Common Core math, tackle AP science courses, and boost SAT scores from home.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>Book a Free Trial via WhatsApp</span>
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

      {/* Timezone & Flexibility Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-4 text-center text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Eastern Time (EST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Central Time (CST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Mountain Time (MST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Pacific Time (PST)</span>
          </div>
        </div>
      </section>

      {/* Academic Pathways */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Targeted Academic Programs for US Students
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We adapt directly to your state’s textbook standards, school homework, and standardized testing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Elementary & Middle School</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Strengthen foundational math, word problems, reading comprehension, and introductory science concepts before high school.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Common Core Math</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Reading & Grammar</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Intro to Logic & Scratch</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaBookReader />
            </div>
            <h3 className="text-lg font-bold text-slate-900">High School & AP Prep</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rigorous 1-on-1 coaching for Algebra I & II, Geometry, Pre-Calculus, Biology, Chemistry, and Physics.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> AP Course Support</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Lab Report Guidance</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Exam Practice Tests</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaLaptopCode />
            </div>
            <h3 className="text-lg font-bold text-slate-900">SAT Math & Coding Track</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Targeted strategies to eliminate algebraic errors on the Digital SAT, paired with real-world Python programming.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Digital SAT Math Tactics</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Python & Data Logic</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Timed Quiz Practice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">See How Our 1-on-1 Classes Work</h2>
          <p className="text-slate-300 text-sm">
            Book a trial class to evaluate our tutors, test our digital whiteboard classroom, and discuss your childs goals.
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