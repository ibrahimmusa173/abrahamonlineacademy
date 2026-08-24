import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[500px]">
      <Image 
        src="/banner.png" 
        alt="Abraham Online Academy Banner" 
        fill 
        className="object-cover"
        priority
      />
    </section>
  )
}