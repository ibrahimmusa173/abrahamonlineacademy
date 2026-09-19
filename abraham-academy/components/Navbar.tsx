import Link from 'next/link'; 
import { FaGlobe } from 'react-icons/fa'; 

export default function Navbar() { 
  return ( 
    <nav className="bg-[#001a41] text-white py-2 px-4 sticky top-0 z-50 shadow-lg"> 
      <div className="container mx-auto flex justify-between items-center"> 
        
        {/* LEFT COLUMN: BRAND TITLE & REGION BAR */}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-2xl font-bold text-yellow-500 leading-tight">Abraham Online Academy</h1> 
          
          {/* REGION SELECTION BAR */}
          <div className="flex items-center gap-2 flex-wrap text-xs"> 
            <span className="text-amber-400 font-semibold flex items-center gap-1"> 
              <FaGlobe /> Region: 
            </span> 
            <div className="flex items-center gap-2.5 text-slate-300 flex-wrap"> 
              <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium text-white"> 
                <span>🌍</span> Global 
              </Link> 
              <span>|</span> 
              <Link href="/usa-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1 "> 
                <span>🇺🇸</span> USA 
              </Link> 
              <span>|</span> 
              <Link href="/uae-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1 "> 
                <span>🇦🇪</span> UAE 
              </Link> 
              <span>|</span> 
              <Link href="/uk-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1"> 
                <span>🇬🇧</span> UK 
              </Link> 
              <span>|</span> 
              <Link href="/canada-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1"> 
                <span>🇨🇦</span> Canada 
              </Link> 
              <span>|</span> 
              <Link href="/australia-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1"> 
                <span>🇦🇺</span> Australia 
              </Link> 
              <span>|</span> 
              <Link href="/saudi-arabia-tutoring" className="hover:text-amber-400 transition-colors flex items-center gap-1"> 
                <span>🇸🇦</span> Saudi Arabia 
              </Link> 
            </div> 
          </div>
        </div>

        {/* RIGHT COLUMN: MAIN NAVIGATION LINKS */}
        <div className="space-x-6 flex items-center"> 
          <Link href="/" className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors" > 
            Home 
          </Link> 
          <Link href="/about" className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors" > 
            About 
          </Link> 
          <Link href="/courses" className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors" > 
            Courses 
          </Link> 
          <Link href="/blog" className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors" > 
            Blog & Guides 
          </Link> 
          <Link href="/contact" className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#001a41] rounded-sm px-1 transition-colors" > 
            Contact 
          </Link> 
        </div> 

      </div> 
    </nav> 
  ); 
}
