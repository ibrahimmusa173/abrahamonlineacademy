import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[500px]">
        <Image 
          src="/banner.png" 
          alt="Abraham Online Academy Banner" 
          fill 
          className="object-cover"
        />
      </section>

      {/* Features Section - Based on your banner icons */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-900">Why Join Us?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {[
            { title: "Expert Instructors", icon: "👨‍🏫" },
            { title: "Quality Content", icon: "📚" },
            { title: "Practical Knowledge", icon: "⚙️" },
            { title: "Build Your Future", icon: "📈" },
            { title: "Learn Anywhere", icon: "🌍" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-blue-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900">NEW VIDEOS EVERY WEEK!</h2>
        <button className="mt-6 bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition">
          Browse Courses
        </button>
      </section>
    </main>
  )
}