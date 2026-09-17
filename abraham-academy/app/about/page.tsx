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

    </div>
  );
}