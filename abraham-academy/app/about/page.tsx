import Image from 'next/image'; // 1. Added the import

export default function About() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-500 pb-2">About Our Founder</h1>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        {/* Updated Image Container */}
        <div className="w-full md:w-1/3">
           <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src="/teacher.png" 
                alt="Tayyaba Amna" 
                fill 
                className="object-cover"
              />
           </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">Tayyaba Amna</h2>
          <p className="text-lg text-blue-700 font-medium">MSc Maths, B.Ed</p>
          <p className="mt-4 text-gray-600">
            A dedicated teacher and passionate educator with a focus on student growth and engagement. 
            With years of experience in schools like Dar E Arqam and The Educators, she specializes in 
            making complex topics simple and fun for students across Spain, USA, UK, and Australia.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Core Skills</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>AI Tools in Education</li>
            <li>Canva Design</li>
            <li>Classroom Management</li>
            <li>Effective Communication</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 italic">Learn Today, Lead Tomorrow. Providing quality education for a better future globally.</p>
        </div>
      </div>
    </div>
  );
}