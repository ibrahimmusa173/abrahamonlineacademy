import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const phoneNumber = "923135061127"; // Your WhatsApp number without '+'
  const message = encodeURIComponent("Hi! I am interested in joining Abraham Online Academy. Can I get more details?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-[#001a41] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-yellow-400 text-lg">Reach out directly for admissions and inquiries</p>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side: WhatsApp Direct Action */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 flex flex-col items-center text-center justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mb-6 shadow-lg animate-bounce">
              <FaWhatsapp />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Chat on WhatsApp</h2>
            <p className="text-gray-600 mb-8">Click the button below to start a direct conversation with our academy head.</p>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              Contact Directly
            </a>
            <p className="mt-4 text-sm text-gray-400">Response time: Usually within an hour</p>
          </div>

          {/* Right Side: Other Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
              <div className="text-blue-900 text-2xl mt-1"><FaEnvelope /></div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-600">tayyabamusa747@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
              <div className="text-blue-900 text-2xl mt-1"><FaMapMarkerAlt /></div>
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p className="text-gray-600">Flat No. 6, 3rd Floor, Green Valley Apartments Faizabad, Rawalpindi</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
              <div className="text-blue-900 text-2xl mt-1"><FaClock /></div>
              <div>
                <h3 className="font-bold text-lg">Support Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM (PKT)</p>
                <p className="text-xs text-blue-600 font-semibold">Available for Global Students 24/7 via WhatsApp</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}