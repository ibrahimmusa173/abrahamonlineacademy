import React from 'react';

const subjects = [
  { name: "Mathematics", icon: "📐", desc: "Algebra, Calculus & Geometry tailored to your region.", color: "bg-blue-50" },
  { name: "Physics", icon: "⚛️", desc: "Fundamental laws of nature for Middle & High School.", color: "bg-purple-50" },
  { name: "Chemistry", icon: "🧪", desc: "Atomic structure and chemical reactions simplified.", color: "bg-green-50" },
  { name: "Computer Science", icon: "💻", desc: "Coding, AI, and digital literacy for the future.", color: "bg-red-50" },
  { name: "English Language", icon: "📖", desc: "Grammar, Literature & Creative Writing (ESL/Native).", color: "bg-orange-50" },
  { name: "Urdu Language", icon: "🖊️", desc: "Reading, writing, and speaking for overseas students.", color: "bg-teal-50" },
  { name: "Islamiat/Hifz", icon: "🕌", desc: "Islamic history, ethics, and basic Fiqh.", color: "bg-yellow-50" },
  { name: "Biology", icon: "🧬", desc: "Life processes and living organisms for all grade levels.", color: "bg-pink-50" },
];

const syllabuses = [
  { region: "United Kingdom", system: "GCSE / Key Stage 1-4", flag: "🇬🇧" },
  { region: "Australia", system: "ACARA Curriculum (Year 1-10)", flag: "🇦🇺" },
  { region: "UAE & Saudi Arabia", system: "British / American / MOE Syllabus", flag: "🇦🇪" },
  { region: "Canada & USA", system: "Ontario / Common Core Standards", flag: "🇨🇦" },
];

export default function Courses() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#001a41] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Global Academic Programs</h1>
          <p className="text-yellow-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Empowering students from <span className="font-bold">Grade 1 to 12</span> with curriculum-aligned coaching worldwide.
          </p>
        </div>
      </section>

      {/* 2. SYLLABUS FOCUS SECTION */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">International Standards</h2>
            <h3 className="text-3xl font-bold text-[#001a41] mb-10">Curriculum Support for Every Region</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {syllabuses.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                    <span className="text-4xl mb-3 block">{item.flag}</span>
                    <h4 className="font-bold text-lg text-gray-800">{item.region}</h4>
                    <p className="text-gray-500 text-sm">{item.system}</p>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. BEAUTIFUL SUBJECTS GRID */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001a41] mb-4">Explore Our Subjects</h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Circle Background */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full transition-transform group-hover:scale-[3] group-hover:bg-yellow-50/50 duration-700 pointer-events-none opacity-40"></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                {subject.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#001a41] mb-3 group-hover:text-blue-700 transition-colors">
                {subject.name}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm h-12 overflow-hidden">
                {subject.desc}
              </p>

              {/* Interactive Bottom Bar */}
              <div className="mt-8 flex items-center justify-between">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grades 1-12</span>
                 <div className="h-1 w-12 bg-gray-100 rounded-full overflow-hidden group-hover:w-full transition-all duration-500">
                    <div className="h-full w-full bg-yellow-500"></div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-gray-50 py-16 text-center">
         <h2 className="text-2xl font-bold text-blue-900 mb-6">Cant find a specific subject?</h2>
         <p className="text-gray-600 mb-8">We offer customized plans for special requirements and higher grades.</p>
        
      </section>
    </div>
  );
}