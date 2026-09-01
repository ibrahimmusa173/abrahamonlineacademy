import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGlobe,
  FaArrowRight 
} from 'react-icons/fa';

export default function Contact() {
  const phoneNumber = "923135061127";
  const message = encodeURIComponent(
    "Hi! I am interested in joining Abraham Online Academy. Can I get more details?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 antialiased">
      
      {/* Compact & Polished Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00102b] via-[#001a41] to-[#00255c] pt-10 pb-14 px-4 text-center text-white border-b border-blue-900/40">
        {/* Subtle Background Glow Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-2.5">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 shadow-sm">
            Get In Touch
          </span>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            We’d Love to Help You <span className="text-amber-400">Grow</span>
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Have questions about admissions or schedules? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* Main Content Area - Fixed Overlap & Clean Spacing */}
      <main className="container mx-auto px-4 -mt-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: WhatsApp Action Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-44 h-44 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Online Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-700">Online • Instant Support</span>
              </div>

              {/* WhatsApp Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-500/20 mb-5 group-hover:scale-105 transition-transform duration-300">
                <FaWhatsapp />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Chat on WhatsApp
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Start a direct conversation with our admissions team for immediate course guidance and enrollment.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-5 rounded-2xl font-semibold text-base transition-all duration-200 transform active:scale-[0.98] shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-3 group/btn"
              >
                <FaWhatsapp className="text-xl" />
                <span>Start Direct Chat</span>
                <FaArrowRight className="text-xs transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
              <p className="text-center text-xs text-slate-400">
                Typical reply time: <span className="text-slate-600 font-medium">Under 15 minutes</span>
              </p>
            </div>
          </div>

          {/* Right Column: Detail Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* Email Card */}
            <a 
              href="mailto:tayyabamusa747@gmail.com"
              className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 hover:border-blue-200 transition-all flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#001a41] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#001a41] group-hover:text-white transition-colors duration-200">
                <FaEnvelope />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm mb-0.5">Email Inquiries</h3>
                <p className="text-slate-500 text-xs mb-1">For admissions, partnerships, and verification</p>
                <span className="text-blue-900 font-semibold text-sm group-hover:underline">
                  tayyabamusa747@gmail.com
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-0.5">Campus & Office</h3>
                <p className="text-slate-500 text-xs mb-1.5">Faizabad Campus</p>
                <p className="text-slate-700 text-sm font-medium leading-snug">
                  Flat No. 6, 3rd Floor, Green Valley Apartments,<br />
                  Faizabad, Rawalpindi, Pakistan
                </p>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-lg flex-shrink-0">
                <FaClock />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                    Mon – Sat
                  </span>
                </div>
                <p className="text-slate-700 text-sm font-medium mb-2">
                  9:00 AM – 9:00 PM <span className="text-slate-400 font-normal">(PKT)</span>
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-950 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-lg w-fit">
                  <FaGlobe className="text-blue-700 flex-shrink-0" />
                  <span className="font-medium">International students supported 24/7 via WhatsApp</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}