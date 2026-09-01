import React from 'react';
import { 
  FaSquareRootAlt, 
  FaAtom, 
  FaFlask, 
  FaLaptopCode, 
  FaBookOpen, 
  FaPenNib, 
  FaMosque, 
  FaDna,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';

const subjects = [
  { 
    name: "Mathematics", 
    icon: FaSquareRootAlt, 
    desc: "Algebra, Calculus & Geometry tailored to your regional curriculum.",
    accent: "from-blue-600 to-indigo-600"
  },
  { 
    name: "Physics", 
    icon: FaAtom, 
    desc: "Mechanics, energy, electricity, and wave theory simplified.",
    accent: "from-purple-600 to-indigo-600"
  },
  { 
    name: "Chemistry", 
    icon: FaFlask, 
    desc: "Atomic models, stoichiometry, and organic reactions step-by-step.",
    accent: "from-emerald-600 to-teal-600"
  },
  { 
    name: "Computer Science", 
    icon: FaLaptopCode, 
    desc: "Python programming, computational logic, and digital literacy.",
    accent: "from-cyan-600 to-blue-600"
  },
  { 
    name: "English Language", 
    icon: FaBookOpen, 
    desc: "Grammar, literature analysis, and expressive creative writing.",
    accent: "from-amber-600 to-orange-600"
  },
  { 
    name: "Urdu Language", 
    icon: FaPenNib, 
    desc: "Reading comprehension, formal writing, and conversational fluency.",
    accent: "from-teal-600 to-emerald-600"
  },
  { 
    name: "Islamiat & Hifz", 
    icon: FaMosque, 
    desc: "Quran recitation, Tajweed rules, ethics, and foundational history.",
    accent: "from-amber-500 to-yellow-600"
  },
  { 
    name: "Biology", 
    icon: FaDna, 
    desc: "Cell biology, physiology, genetics, and living systems.",
    accent: "from-rose-600 to-pink-600"
  },
];

const syllabuses = [
  { region: "United Kingdom", system: "GCSE / IGCSE / KS 1–4", flag: "🇬🇧" },
  { region: "Australia", system: "ACARA Curriculum (Yr 1–10)", flag: "🇦🇺" },
  { region: "UAE & Saudi Arabia", system: "British / American / MOE", flag: "🇦🇪" },
  { region: "Canada & USA", system: "Ontario / Common Core", flag: "🇨🇦" },
];

const benefits = [
  "Personalized 1-on-1 and small interactive group classes",
  "Regular progress reports and assignment evaluations",
  "Customized lesson pacing matching your school exam schedule",
  "Dedicated support for homework, past papers, and tests"
];

export default function Courses() {
  const phoneNumber = "923135061127";
  const message = encodeURIComponent("Hi! I am interested in enrolling at Abraham Online Academy. Can you provide course details?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-[#fcfdfd] min-h-screen text-slate-800 antialiased font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. COMPACT HERO HEADER */}
      <section className="relative overflow-hidden bg-[#0A192F] py-10 px-2 text-center text-white">
        {/* Soft Amber Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/15 backdrop-blur-sm">
            Admissions Open • Grades 1–12
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Academic Programs & <span className="text-amber-400">Courses</span>
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Comprehensive, curriculum-aligned academic coaching tailored for international students worldwide.
          </p>
        </div>
      </section>

      {/* 2. SYLLABUS CARDS */}
      <section className="py-10 bg-slate-50/80 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A192F]/70">
              International Curriculum Mapping
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {syllabuses.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm flex items-center gap-3.5 hover:border-amber-400/50 hover:shadow transition-all"
              >
                <span className="text-2xl p-2 bg-slate-50 rounded-lg flex-shrink-0">
                  {item.flag}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm text-[#0A192F] truncate">
                    {item.region}
                  </h3>
                  <p className="text-slate-500 text-[11px] font-medium truncate mt-0.5">
                    {item.system}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUBJECTS GRID */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Explore Available <span className="text-amber-500">Subjects</span>
          </h2>
          <p className="text-slate-600 text-sm">
            High-impact tutoring covering core concepts, exam questions, and practical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.accent} flex items-center justify-center text-white text-xl shadow-md mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#0A192F] mb-2 group-hover:text-amber-600 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {subject.desc}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#0A192F] transition-colors">
                  <span>Grade 1 – 12</span>
                  <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1 text-amber-500" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM VALUE PROPOSITION & CTA */}
      <section className="bg-slate-50 border-t border-slate-200/70 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Highlights */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
              Why Learn With Us
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-snug">
              Quality Education, Structured for <span className="text-amber-600">Your Child’s Future</span>
            </h3>

            <div className="space-y-2.5 pt-2">
              {benefits.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-amber-500 text-sm mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Direct CTA Card */}
          <div className="lg:col-span-5 bg-[#0A192F] rounded-2xl p-7 text-center text-white shadow-lg space-y-4 border border-slate-800">
            <h4 className="text-xl font-bold">Have Questions or Special Requests?</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Message us directly to discuss grade levels, timings, or trial classes with our academic team.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] text-sm"
            >
              <FaWhatsapp className="text-lg" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}