import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#001a41] text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">Abraham Online Academy</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/courses" className="hover:text-yellow-400">Courses</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}