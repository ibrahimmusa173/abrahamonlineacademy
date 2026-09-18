import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { coursesData } from '@/lib/courses-data';
import { 
  FaWhatsapp, 
  FaCheckCircle, 
  FaCalculator, 
  FaGlobe, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaClock, 
  FaChevronDown 
} from 'react-icons/fa';

interface Props {
  params: Promise<{ subject: string }>;
}

// 1. Generate Static Paths for Fast Page Loading
export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    subject: slug,
  }));
}

// 2. Dynamic SEO Metadata for Each Subject
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject } = await params;
  const course = coursesData[subject.toLowerCase()];

  if (!course) return {};

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: {
      canonical: `https://abrahamonlineacademy.vercel.app/courses/${course.slug}`,
    },
  };
}

// 3. Dynamic Page Component
export default async function DynamicCoursePage({ params }: Props) {
  const { subject } = await params;
  const course = coursesData[subject.toLowerCase()];

  if (!course) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/923149500765?text=" +
    encodeURIComponent(`Hi! I would like to inquire about 1-on-1 ${course.slug.toUpperCase()} tutoring for my child.`);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#001a41] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            <FaCalculator className="text-amber-400" />
            <span>Grades 1–12 • 1-on-1 Personal Coaching</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {course.title}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {course.subtitle}
          </p>

          {/* Dual CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://abrahamonlineacademy.vercel.app"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              Book 100% Free Trial Class
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat with Academic Coordinator</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTERNATIONAL CURRICULUMS WE SUPPORT */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            International Curriculums We Support
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Every region has specific standards and exam traps. Our tutors are trained to teach exactly what your child needs to know to ace their board exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.curriculums.map((curr, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 ${
                index === course.curriculums.length - 1 && course.curriculums.length % 3 !== 0
                  ? 'col-span-1 md:col-span-2 lg:col-span-2'
                  : ''
              }`}
            >
              <div className="text-amber-600 font-bold text-lg flex items-center gap-2">
                <FaGlobe /> {curr.name}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">{curr.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SUBJECT PILLARS */}
      <section className="bg-slate-100 py-16 px-4 border-y border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
              {course.pillarsTitle}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              {course.pillarsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{pillar.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAILORED LEARNING PHASES */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#001a41]">
            Tailored Learning Phases for Every Age Group
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Teaching methods designed specifically for your childs developmental stage.
          </p>
        </div>

        <div className="space-y-6">
          {course.agePhases.map((phase, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${phase.iconColor}`}>
                {index === 0 ? <FaUserGraduate /> : index === 1 ? <FaChalkboardTeacher /> : <FaCalculator />}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{phase.phase}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE ABRAHAM ONLINE ACADEMY */}
      <section className="bg-[#001a41] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold">
              Why Choose Abraham Online Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <FaCheckCircle className="text-amber-400 text-2xl" />
              <h3 className="text-lg font-bold">Undivided 1-on-1 Attention</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                No crowded classrooms or distraction. The tutor moves entirely at your childs pace, spending extra time on tough concepts.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <FaChalkboardTeacher className="text-amber-400 text-2xl" />
              <h3 className="text-lg font-bold">Digital Whiteboard Tech</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Interactive, real-time problem solving where the student and tutor write, solve, and annotate step-by-step together on screen.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <FaClock className="text-amber-400 text-2xl" />
              <h3 className="text-lg font-bold">Flexible Global Scheduling</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Select class times that match your familys routine, whether you are in EST, PST, GST, or AEST time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#001a41]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">Common questions parents ask about our online classes.</p>
        </div>

        <div className="space-y-4">
          {course.faqs.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-2xl border border-slate-200 cursor-pointer group">
              <summary className="font-bold text-slate-900 flex justify-between items-center list-none">
                <span>{faq.question}</span>
                <FaChevronDown className="text-slate-400 group-open:rotate-180 transition-transform text-sm" />
              </summary>
              <p className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Experience the Difference?</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a 100% Free 1-on-1 Trial Class with a certified tutor today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://abrahamonlineacademy.vercel.app"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              Book Your 100% Free Trial Class Today
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
