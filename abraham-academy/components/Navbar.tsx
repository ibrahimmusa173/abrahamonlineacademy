import Link from 'next/link';

export default function Navbar() {
  return (
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
          {/* New Blog Link matching your exact design token classes */}
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
  );
}
