import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";

const slides = [
  {
    image: "/public/newimg1.jpeg",
    headline: "Designing Tomorrow's",
    headlineLine2: "Experience, Today",
    description:
      "Crafting the future of personalized experiences the world needs NEXT.",
    primaryCta: "Discover More",
  },
  {
    image: "/public/newimg2.jpeg",
    headline: " We Design",
    headlineLine2: "Experiences That Define the Future.",
    description:
      "Transform ideas into reality with our venture design approach and strategic partnerships.",
    primaryCta: "Explore Solutions",
  },
  {
    image: "/public/newimg3.jpeg",
    headline: "Empowering Ideas ",
    headlineLine2: "Through Design Systems",
    description:
      "Building integrated solutions that scale with your vision and accelerate growth.",
    primaryCta: "Learn More",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section
      aria-label="InfinityBleu hero"
      className="relative h-[90vh] w-full overflow-hidden bg-black"
    >
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={currentSlide.image}
            alt="Background visual"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 to-black/0" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center pl-6 pr-6 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-28">
        <div className="max-w-2xl text-left text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-bold leading-snug tracking-tight text-white text-3xl md:text-7xl">
                {currentSlide.headline} <br />
                {currentSlide.headlineLine2}
              </h1>

              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-prose">
                {currentSlide.description}
              </p>

              <div className="mt-6">
                <Button direction="right">{currentSlide.primaryCta}</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className="h-0.5 w-12 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: idx === activeIndex ? "100%" : "0%",
                  }}
                  transition={{
                    duration: idx === activeIndex ? 6 : 0.3,
                    ease: idx === activeIndex ? "linear" : [0.65, 0, 0.35, 1],
                  }}
                />
              </div>
              <div className="absolute inset-0 -m-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full border border-white/30 rounded-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
