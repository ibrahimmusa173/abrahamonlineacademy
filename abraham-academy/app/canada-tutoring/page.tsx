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
  title: "1-on-1 Online Math & Science Tutors Canada | Ontario, BC & Alberta",
  description: "Targeted 1-on-1 online tutoring for Canadian students in Grades 1–12. Aligned with Ontario OSSD, BC Curriculum, Alberta Diploma exams, and Waterloo Math contests.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/canada-tutoring",
  },
};

export default function CanadaLandingPage() {
  const whatsappUrl = "https://wa.me/923149500765?text=" + encodeURIComponent("Hi! I am based in Canada and would like to inquire about 1-on-1 tutoring for my child.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span>🇨🇦 Canadian Provincial Curricula • Grades 1–12</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            1-on-1 Online Math, Science & Coding Tutoring Across All Canadian Provinces
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Helping elementary, middle, and high school students in Toronto, Vancouver, Calgary, Ottawa, and Edmonton achieve top grades and university placement.
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

      {/* Timezone Bar */}
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

      {/* Academic Offerings */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Curriculum Expertise for Canadian Schools
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            We adapt to provincial textbook requirements, unit tests, and university entrance criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Elementary & Middle School</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Building fundamental math operations, word problem logic, reading comprehension, and introductory science skills for Grades 1–8.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Foundational Math & Logic</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> English Essay Mechanics</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Python & Scratch Coding</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              <FaBookReader />
            </div>
            <h3 className="text-lg font-bold text-slate-900">High School Diploma Prep</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Targeted support for Ontario OSSD (Grade 11/12 Functions, Calculus & Vectors), BC Curriculum, and Alberta Diploma exams.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Advanced Functions & Calculus</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Physics, Chemistry & Biology</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Diploma Exam Review</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              <FaLaptopCode />
            </div>
            <h3 className="text-lg font-bold text-slate-900">AP, IB & Math Contests</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Specialized coaching for AP Calculus, AP Chemistry, IB DP Mathematics, and University of Waterloo CEMC Math Contests.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Waterloo Euclid/Gauss Prep</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> AP Course Support</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> IB Internal Assessments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Schedule Your Free Trial Class in Canadian Local Time</h2>
          <p className="text-slate-300 text-sm">
            Speak directly with our academic team to arrange a trial lesson that fits your familys routine.
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
