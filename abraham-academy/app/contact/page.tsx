export default function Contact() {
  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Get In Touch</h1>
      <form className="space-y-4 bg-white p-8 shadow-xl rounded-xl border border-gray-100">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input type="text" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="tayyaba@example.com" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full p-3 border rounded h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
        </div>
        <button className="w-full bg-blue-900 text-white p-3 rounded font-bold hover:bg-blue-800 transition">
          Send Message
        </button>
      </form>
      
      <div className="mt-10 text-center text-gray-600">
        <p>📞 +92 3135061127</p>
        <p>📧 tayyabamusa747@gmail.com</p>
      </div>
    </div>
  );
}