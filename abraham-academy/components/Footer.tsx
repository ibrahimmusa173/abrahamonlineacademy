import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#000d21] text-white pt-14">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* 1. ADVANCED SOCIAL ICONS */}
        <div className="flex gap-5 mb-10">
          {[
            { 
              icon: <FaFacebookF />, 
              link: "https://www.facebook.com/profile.php?id=61593394480120", 
              color: "hover:bg-blue-600",
              ariaLabel: "Visit our Facebook page"
            },
            { 
              icon: <FaLinkedinIn />, 
              link: "https://pk.linkedin.com/in/asia-aman-32bb6464", 
              color: "hover:bg-blue-700",
              ariaLabel: "Connect with us on LinkedIn" 
            },
            { 
              icon: <FaYoutube />, 
              link: "https://www.youtube.com/@AbrahamOnlineAcademy", 
              color: "hover:bg-red-600",
              ariaLabel: "Watch free classes on YouTube" 
            },
            { 
              icon: <FaInstagram />, 
              link: "https://www.instagram.com/musa.aman.9883739", 
              color: "hover:bg-pink-600",
              ariaLabel: "Follow us on Instagram" 
            },
          ].map((social, index) => (
            <Link 
              key={index} 
              href={social.link}
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2 shadow-lg ${social.color} hover:text-white`}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* 2. NAVIGATION LINKS */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg font-medium tracking-wide">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-yellow-500 transition-colors duration-300">Courses</Link>
            </li>
            {/* Added Blog Link to Footer Navigation Grid */}
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition-colors duration-300">Blog & Guides</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* 3. ACADEMY TAGLINE */}
        <div className="text-center mb-10 opacity-60 italic text-sm max-w-md">
          Empowering students globally with the best online education system. Quality education for a better future.
        </div>
      </div>
    </footer>
  );
}
