// src/app/_components/hero.tsx
/**
 * Hero Section - just for the landing page
 */
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center duration-700 items-center text-center bg-cover bg-center leading-relaxed" 
        style={{ backgroundImage: "url('/assets/bg-hero.webp')" }}>
      <Image className="hover:scale-105 transition-transform duration-700" 
      src='/assets/uaant-logo.webp' alt="UAANT Logo" width={160} height={160} layout="fixed" />
      
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white hover:scale-105 transition-transform duration-700 leading-loose">
        Ukrainian-Australian Association <br /> of Northern Territory
      </h1>
      
      
    </section>
  );
}
