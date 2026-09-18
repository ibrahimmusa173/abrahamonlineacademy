import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa'; // Added missing icon import

export default function Navbar() {
  return (
    <>
      {/* TOP REGION ANNOUNCEMENT BAR */}
      <div className="bg-[#001a41] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <FaGlobe /> Region:
            </span>
            <div className="flex items-center gap-2.5 text-slate-300 flex-wrap justify-center">
              <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>🌍</span> Global
              </Link>
              <span>|</span>
              <Link href="/usa-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium text-white">
                <span>🇺🇸</span> USA
              </Link>
              <span>|</span>
              <Link href="/uae-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium text-white">
                <span>🇦🇪</span> UAE
              </Link>
              <span>|</span>
              <Link href="/landing/uk" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>🇬🇧</span> UK
              </Link>
              <span>|</span>
              <Link href="/landing/canada" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>🇨🇦</span> Canada
              </Link>
              <span>|</span>
              <Link href="/landing/australia" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>🇦🇺</span> Australia
              </Link>
              <span>|</span>
              <Link href="/landing/saudi-arabia" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>🇸🇦</span> Saudi Arabia
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-slate-300 text-[11px]">
            <span>📞 WhatsApp: +92 314 9500765</span>
            <span>•</span>
            <span className="text-amber-400 font-medium">100% Free Trial Available</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-[#001a41] text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">Abraham Online Academy</h1>
          <div className="space-x-6 flex items-center">
            <Link
              href="/"
              className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/blog"
              className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors"
            >
              Blog & Guides
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
