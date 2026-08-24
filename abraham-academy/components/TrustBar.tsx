import { FaGraduationCap, FaGlobe, FaLaptopCode, FaAward } from 'react-icons/fa';

export default function TrustBar() {
  const items = [
    { icon: <FaAward />, text: "High Quality Education" },
    { icon: <FaLaptopCode />, text: "Flexible Learning" },
    { icon: <FaGlobe />, text: "Trusted By Learners" },
    { icon: <FaGraduationCap />, text: "Success Is Our Mission" },
  ];

  return (
    <div className="bg-[#001a41] text-white py-4 border-t border-yellow-500/30">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            <span className="text-yellow-500 text-lg">{item.icon}</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}