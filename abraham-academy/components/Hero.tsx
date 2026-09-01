export default function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}