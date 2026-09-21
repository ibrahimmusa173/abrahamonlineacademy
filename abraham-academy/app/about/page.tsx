import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Our Founders & Mission | Certified Tutors",
  description:
    "Meet Tayyaba Amna (MSc Maths, B.Ed) and Asia Aman (MS Electrical Eng.). 10+ years of global online teaching experience serving students in Spain, USA, UK, and Australia.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app/about",
  },
};

export default function About() {
  return (
    <div className="container mx-auto p-8 max-w-5xl space-y-20">
      
      {/* =========================================
          MAIN PAGE H1 
          ========================================= */}
      <div className="pt-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a]">
          Leadership & Vision at Abraham Online Academy
        </h1>
      </div>

      {/* =========================================
          FIRST PROFILE: TAYYABA AMNA (FOUNDER) 
          ========================================= */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 border-b-2 border-yellow-500 pb-3">
          About Our Founder
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <div className="w-full md:w-1/3">
             <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image 
                  src="/teacher1.jpg" 
                  alt="Tayyaba Amna" 
                  fill 
                  className="object-cover"
                />
             </div>
          </div>

          {/* Bio */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900">Tayyaba Amna</h3>
            <p className="text-lg text-blue-600 font-medium mb-4">MSc Maths, B.Ed</p>
            <p className="text-gray-600 leading-relaxed text-justify">
              A dedicated teacher and passionate educator with a focus on student growth and engagement. With 10 years of online teaching experience alongside years of classroom experience in schools like Dar E Arqam, The Educators, and Exalter Education System School, she specializes in making complex topics simple and fun for students across Spain, USA, UK, and Australia.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f0f4f8] p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Core Skills</h4>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Student Growth</li>
              <li>Student Learning</li>
              <li>Classroom Management</li>
              <li>Effective Communication</li>
            </ul>
          </div>
          <div className="bg-[#fefce8] p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h4>
            <p className="text-gray-700 italic text-justify">
              Learn Today, Lead Tomorrow. Providing quality education for a better future globally.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECOND PROFILE: ASIA AMAN (MANAGING DIR.) 
          ========================================= */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 border-b-2 border-yellow-500 pb-3">
          About Our Managing Director
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <div className="w-full md:w-1/3">
             <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image 
                  src="/teacher.jpg" 
                  alt="Asia Aman" 
                  fill 
                  className="object-cover object-top"
                />
             </div>
          </div>

          {/* Bio */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900">Asia Aman</h3>
            <p className="text-lg text-blue-600 font-medium mb-4">MS Electrical Engineering, BS Computer Engineering</p>
            <p className="text-gray-600 leading-relaxed text-justify">
              A visionary leader driving technical innovation and operational excellence. Leveraging a strong engineering background, Asia bridges the gap between technology and operations, ensuring scalable processes, strategic management, and a robust infrastructure to support our global educational mission.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f0f4f8] p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Core Skills</h4>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Systems Architecture</li>
              <li>Technical Leadership</li>
              <li>Strategic Operations</li>
              <li>Project Management</li>
            </ul>
          </div>
          <div className="bg-[#fefce8] p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h4>
            <p className="text-gray-700 italic text-justify">
              Integrating cutting-edge technology and efficient systems to empower education and foster continuous global learning.
            </p>
          </div>
        </div>
      </section>



        {/* =========================================
      GLOBAL FACULTY & TEACHER MATCHING
      ========================================= */}
  <section className="space-y-10">
    
    {/* Section Header */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 border-b-2 border-yellow-500 pb-3">
      Our Global Certified Faculty & Teacher Matching
    </h2>

    <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg">
      Beyond our core leadership, Abraham Online Academy powers learning through a carefully selected international network of certified educators, subject-matter experts, and curriculum specialists.
    </p>

    {/* 4 Pillars Grid (Using Previous #f0f4f8 and #fefce8 Card Colors) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Pillar 1 */}
      <div className="bg-[#f0f4f8] p-8 rounded-xl shadow-sm border-l-4 border-[#1e3a8a]">
        <h3 className="text-xl font-bold mb-2 text-gray-900">1. Rigorous Qualification & Vetting</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Every tutor holds university-level degrees in their domain and undergoes strict academic screening, background checks, and practical teaching evaluations.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="bg-[#fefce8] p-8 rounded-xl shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold mb-2 text-gray-900">2. Fluent English & Communication</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Our educators possess native or bilingual English fluency, ensuring flawless articulation, clear explanations, and strong rapport with overseas students.
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="bg-[#fefce8] p-8 rounded-xl shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold mb-2 text-gray-900">3. Regional Board Mastery</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Specialists trained in specific global frameworks—including Cambridge IGCSE, Edexcel, UK A-Levels, US Common Core, AP, SAT, IB, and ACARA standards.
        </p>
      </div>

      {/* Pillar 4 */}
      <div className="bg-[#f0f4f8] p-8 rounded-xl shadow-sm border-l-4 border-[#1e3a8a]">
        <h3 className="text-xl font-bold mb-2 text-gray-900">4. Timezone & Cultural Alignment</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Classes are scheduled seamlessly according to your local time zone across the UK, UAE, Saudi Arabia, USA, Canada, and Australia.
        </p>
      </div>

    </div>

    {/* 3-Step Teacher Matching Box */}
    <div className="bg-[#f0f4f8] p-8 md:p-10 rounded-xl shadow-sm space-y-8 border border-blue-100">
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">
          How We Match Your Child With Their Dedicated Tutor
        </h3>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          We do not assign generic teachers. We use a personalized placement process to ensure a 100% academic fit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-2">
          <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white font-bold text-xs rounded-full">Step 1</span>
          <h4 className="text-lg font-bold text-gray-900">Submit Requirements</h4>
          <p className="text-gray-600 text-xs leading-relaxed">
            Share your childs grade, country, school curriculum, target subject, and specific learning goals.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-2">
          <span className="inline-block px-3 py-1 bg-yellow-500 text-[#1e3a8a] font-bold text-xs rounded-full">Step 2</span>
          <h4 className="text-lg font-bold text-gray-900">Faculty Allocation</h4>
          <p className="text-gray-600 text-xs leading-relaxed">
            Our academic coordinator pairs your child with a certified tutor experienced in your exact school board.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-2">
          <span className="inline-block px-3 py-1 bg-[#1e3a8a] text-white font-bold text-xs rounded-full">Step 3</span>
          <h4 className="text-lg font-bold text-gray-900">100% Free Trial Class</h4>
          <p className="text-gray-600 text-xs leading-relaxed">
            Experience a 1-on-1 interactive lesson on our digital whiteboard before formal enrollment.
          </p>
        </div>

      </div>

      {/* CTA Button */}
      <div className="text-center pt-2">
        <a
          href="https://wa.me/923149500765?text=Hi!%20I%20would%20like%20to%20request%20a%20teacher%20match%20for%20my%20child."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all text-sm"
        >
          Request Your Customized Teacher Match
        </a>
      </div>

    </div>

  </section>

    </div>
  );
}