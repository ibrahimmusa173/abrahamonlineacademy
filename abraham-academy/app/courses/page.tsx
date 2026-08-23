import React from 'react';

const subjects = [
  { name: "Mathematics", icon: "📐", desc: "Algebra, Calculus & Geometry tailored to your region." },
  { name: "Physics", icon: "⚛️", desc: "Fundamental laws of nature for Middle & High School." },
  { name: "Chemistry", icon: "🧪", desc: "Atomic structure and chemical reactions simplified." },
  { name: "Computer Science", icon: "💻", desc: "Coding, AI, and digital literacy for the future." },
  { name: "English Language", icon: "📖", desc: "Grammar, Literature & Creative Writing (ESL/Native)." },
  { name: "Urdu Language", icon: "🖊️", desc: "Reading, writing, and speaking for overseas students." },
  { name: "Islamiat", icon: "🕌", desc: "Islamic history, ethics, and basic Fiqh." },
  { name: "Hifz Holy Quran", icon: "📜", desc: "Proper Tajweed and memorization with expert tutors." },
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
      {/* Hero Section */}
      <section className="bg-[#001a41] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Academic Programs</h1>
          <p className="text-yellow-400 text-xl max-w-2xl mx-auto">
            Providing Grade 1 to 10 coaching aligned with international standards for students worldwide.
          </p>
        </div>
      </section>

      {/* Syllabus Focus Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">We Teach According to Your Countries Syllabus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {syllabuses.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-yellow-500 text-center">
                <span className="text-3xl mb-2 block">{item.flag}</span>
                <h3 className="font-bold text-lg">{item.region}</h3>
                <p className="text-gray-600 text-sm">{item.system}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Our Subjects</h2>
            <p className="text-gray-500">Interactive online classes for Grades 1-10</p>
          </div>
          <div className="hidden md:block">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase">Personalized Learning</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="group p-8 border rounded-2xl hover:border-blue-900 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{subject.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{subject.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subject.desc}</p>
              <button className="mt-4 text-sm font-bold text-yellow-600 group-hover:text-blue-900">View Details →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Grade Level Section */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Structured for Every Stage</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-blue-900">1-5</div>
                <div>
                  <h4 className="font-bold text-xl">Primary Level</h4>
                  <p className="text-blue-100">Focusing on building strong foundations in Literacy, Numeracy, and Holy Quran.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-blue-900">6-8</div>
                <div>
                  <h4 className="font-bold text-xl">Middle School</h4>
                  <p className="text-blue-100">Introduction to specialized sciences (Physics, Chemistry) and advanced Math.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-blue-900">9-10</div>
                <div>
                  <h4 className="font-bold text-xl">Secondary / IGCSE Prep</h4>
                  <p className="text-blue-100">Intensive coaching for board exams and international certifications.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-20 -bottom-20 text-[200px] opacity-10 font-bold select-none">LEARN</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="mb-8 text-gray-600">Get a free assessment session for your child today.</p>
        <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-10 py-4 rounded-full font-bold transition">
          Book a Trial Lesson
        </a>
      </section>
    </div>
  );
}