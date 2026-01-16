import { motion } from "framer-motion";
import Button from "../ui/Button";
import React from "react";

const stats = [
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd8567f74f0f552fc5627b_switch-buildings.svg",
    value: "6K+",
    label: "Buildings Connected",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd856712d8988dedb0e2a9_switch-floorare.svg",
    value: "42M",
    label: (
      <>
        Total Floor Area (ft<sup>2</sup>)
      </>
    ),
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd8567bd3f60fbbee31aa6_switch-datapoints.svg",
    value: "276B",
    label: "No. of Data Points",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd856701fea039134767a1_switch-optimization.svg",
    value: "2.5x",
    label: "Optimization Opportunities",
  },
];

const features = [
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f37c08148c1_img-home-why-1.svg",
    title: "A single score for digital readiness",
    text: "Get an on-demand digital audit of your building network, systems, devices, and firmware with the Switch Dx³ discovery tool.",
    link: "/platform/switch-dx3",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f4c298148c2_img-home-why-2.svg",
    title: "Advanced AI engine for autonomous operations",
    text: "Apply advanced analytics to your IoT framework for demand-based control to automate building operations.",
    link: "/platform/switch-rx-a-digital-building-prescription",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f21388148c9_img-home-why-3.svg",
    title: "High-level view of your portfolio",
    text: "Harmonize building data into a singular data model for a unified portfolio workspace.",
    link: "/platform/switch-opx",
  },
];

const IntroSection = () => {
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
            <div className="mt-8 mb-6">
              <Button>Learn More</Button>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border bg-gray-100 rounded-2xl p-8 hover:border-blue-800 transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-18 h-18 mb-6"
              />
              <h3 className="text-xl text-black font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-8">{feature.text}</p>
              <a
                href={feature.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-br-2xl font-medium transition-all hover:gap-3 hover:bg-blue-50"
              >
                <Button>Learn More</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
