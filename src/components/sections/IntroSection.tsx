import { motion } from "framer-motion";
import Button from "../ui/Button";
import IntroSectionImg from "/IntroSectionImg.webp";

export default function IntroSection() {
  return (
    <section className="bg-white text-[#0B1223]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              We Design Experiences That Define the Future
            </h2>
            <p className="text-[#0B1223]/70 max-w-xl mt-4 leading-relaxed">
              InfinityBleu combines design, technology, and innovation to craft
              digital ecosystems where brands, culture, and progress intersect.
              Our philosophy blends precision with imagination — every detail
              intentional, every interaction meaningful.
            </p>
            <div className="mt-8">
              <Button fillClassName="bg-[#245CFF]">Learn More</Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={IntroSectionImg}
              alt="InfinityBleu overview"
              className="w-full md:w-1/2 rounded-2xl shadow-[0_12px_24px_rgba(36,92,255,0.12)] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
