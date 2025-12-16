import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "../ui/Button";
import IntroSectionImg from "/IntroSectionImg.webp";

// Container for staggered animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade-up animation for text and buttons
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // ✅ TS-compatible cubic-bezier
    },
  },
};

export default function IntroSection() {
  return (
    <section className="bg-white text-[#0B1223] overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-40 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* TEXT */}
          <motion.div
            className="flex-1 md:pr-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              We Design Experiences That Define the Future
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#0B1223]/70 mt-4 leading-relaxed max-w-2xl"
            >
              InfinityBleu combines design, technology, and innovation to craft
              digital ecosystems where brands, culture, and progress intersect.
              Our philosophy blends precision with imagination — every detail
              intentional, every interaction meaningful.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button fillClassName="bg-[#245CFF]">Learn More</Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <motion.img
              src={IntroSectionImg}
              alt="InfinityBleu overview"
              className="w-full md:h-[500px] md:w-[500px] lg:w-[600px] rounded-sm shadow-[0_12px_24px_rgba(36,92,255,0.12)] object-cover"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
