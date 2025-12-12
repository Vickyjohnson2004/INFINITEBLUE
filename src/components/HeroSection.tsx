import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import Home1 from "/Home1.avif";
import Home3 from "/Home3.avif";
import Home4 from "/Home4.jpg";

const SLIDE_INTERVAL_MS = 6000; // 6s cycle
const SLIDE_DURATION_MS = 1000; // 1s slide

// Background images chosen to evoke modern luxury and cinematic feel
const imageList = [Home1, Home3, Home4];

export default function HeroSection() {
  const images = useMemo(() => imageList, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        setDirection(prev % 2 === 0 ? 1 : -1);
        return next;
      });
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const slideVariants = {
    enter: (dir: 1 | -1) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.3,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: 1 | -1) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0.3,
      scale: 0.95,
    }),
  } as const;

  return (
    <section
      aria-label="InfinityBleu hero"
      className="relative h-[90vh] w-full overflow-hidden bg-black"
    >
      {/* Background slider (horizontal slide using Framer Motion) */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={activeIndex}
            src={imageList[activeIndex]}
            alt="Background visual"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: SLIDE_DURATION_MS / 1000,
              ease: [0.65, 0, 0.35, 1], // Custom cubic-bezier for ultra-smooth motion
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Top-transparent to bottom-60% black gradient for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/65 to-black/0" />

      {/* Content */}
      <div
        className={[
          "relative z-10 h-full w-full",
          "flex items-center",
          "pl-6 pr-6 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-28",
        ].join(" ")}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-left text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-bold leading-snug tracking-tight text-white text-3xl md:text-7xl"
          >
            Designing Tomorrow's <br />
            Experience, Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-prose"
          >
            Crafting the future of personalized experiences the world needs
            NEXT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
            className="mt-6"
          >
            <Button direction="right">Discover More</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setDirection(idx > activeIndex ? 1 : -1);
              }}
              className="group relative cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* Background track */}
              <div className="h-0.5 w-12 bg-white/20 rounded-full overflow-hidden">
                {/* Active progress fill */}
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: idx === activeIndex ? "100%" : "0%",
                  }}
                  transition={{
                    duration:
                      idx === activeIndex ? SLIDE_INTERVAL_MS / 1000 : 0.3,
                    ease: idx === activeIndex ? "linear" : [0.65, 0, 0.35, 1],
                  }}
                />
              </div>
              {/* Hover effect */}
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
