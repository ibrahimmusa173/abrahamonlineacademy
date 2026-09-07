import Image from 'next/image'

export default function InstructorsInfo() {
  const points = [
    "Diverse Expertise — Specialists in Mathematics, Science, & Languages.",
    "Qualified Professionals — Tutors with strong academic backgrounds.",
    "Years of Experience — Proven success in online teaching.",
    "Global Teaching — Connecting students from UK, UAE, USA, and beyond.",
    "Student-Focused — Personalized guidance for every learner."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <Image src="/expert-teacher.png" alt="Study Desk" fill className="object-cover" />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Learn From Highly Qualified <br/> 
            <span className="text-yellow-600">Expert Instructors</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Abraham Online Academy brings together professional instructors teaching students across different countries. 
            We ensure you are not limited by location, providing academic support and specialized knowledge anywhere in the world.
          </p>
          
          <ul className="space-y-3">
            {points.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="bg-yellow-500 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                {point}
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </section>
  );
}