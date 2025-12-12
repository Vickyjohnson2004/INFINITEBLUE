import { motion } from "framer-motion";
import AlternatingBlocksImg1 from "/AlternatingBlocksImg1.avif";
import AlternatingBlocksImg2 from "/AlternatingBlocksImg2.webp";
import AlternatingBlocksImg3 from "/AlternatingBlocksImg3.avif";

const blocks = [
  {
    title: "Empowering Ideas Through Design Systems",
    body: "We build frameworks for creativity — where technology enhances storytelling, and every interface reflects clarity, culture, and craft.",
    image: AlternatingBlocksImg1,
  },
  {
    title: "Platforms That Evolve With You",
    body: "Scalable, modular platforms that adapt to tomorrow — aligning experience, data, and operations into one cohesive fabric.",
    image: AlternatingBlocksImg2,
  },
  {
    title: "From Vision To Impact",
    body: "We turn north stars into measurable outcomes — designing with intent, engineering with precision, delivering with elegance.",
    image: AlternatingBlocksImg3,
  },
];

export default function AlternatingBlocks() {
  return (
    <section className="bg-white text-[#0B1223]">
      {blocks.map((block, index) => {
        const isReversed = index % 2 === 1;

        return (
          <div
            key={block.title}
            className="max-w-7xl mx-auto py-24 px-6 md:px-10"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-lg"
              >
                <h3 className="text-2xl md:text-4xl font-semibold">
                  {block.title}
                </h3>
                <p className="text-[#0B1223]/80 mt-4 leading-relaxed">
                  {block.body}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-[0_12px_24px_rgba(36,92,255,0.1)]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-[340px] md:h-[420px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
