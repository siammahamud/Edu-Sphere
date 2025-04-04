export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay & Content */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30">
        </div> */}
    </section>
  );
}
