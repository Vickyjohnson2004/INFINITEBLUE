import React from "react";
import FeatureGrid1 from "../../../public/FeatureGrid1.jpg";
import FeatureGrid2 from "../../../public/FeatureGrid2.jpg";
import FeatureGrid3 from "../../../public/FeatureGrid4.jpg";
import Button from "../ui/Button";

const successStories = [
  {
    title:
      "Fifth Third approaches 25% average monthly energy savings using portfolio benchmarking",
    info: "Success Story",
    description:
      "Fifth Third Bank’s leadership and building management teams report saving as much as 25-26% monthly by reducing energy consumption across 500 buildings.",
    image: FeatureGrid1,
    link: "https://www.switchautomation.com/success-stories/fifth-third-bank",
  },
  {
    title:
      "K-12 Career Exploration Campus—Indoor Air Quality Improvement Through Smart Building Solutions",
    info: "Success Story",
    description:
      "To maintain optimal indoor air quality (IAQ) and meet global health and wellness standards, the district adopted the RESET Air Standard across several campuses, incorporating real-time IAQ monitoring technologies with building operating practices.",
    image: FeatureGrid2,
    link: "https://www.switchautomation.com/success-stories/k-12-career-exploration-campus---indoor-air-quality-improvement-through-smart-building-solutions",
  },
  {
    title:
      "Switch Dx³ combines with Microsoft Azure to provide key capabilities as part of Oxford’s Smart Building strategy",
    info: "Success Story",
    description:
      "Oxford deployed Switch Dx³ across 17 buildings connected to the Switch Platform to gain a continuous audit of the devices and systems connected to its building networks.",
    image: FeatureGrid3,
    link: "https://www.switchautomation.com/success-stories/switch-dx3-combines-with-microsoft-azure-to-provide-key-capabilities-as-part-of-oxfords-smart-building-strategy",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 text-black py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <div className="md:max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            A standardized connection for your available device data
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Using connected data, Switch has helped property owners and building
            managers save energy, reduce operating costs, optimize efficiency,
            and meet their sustainability goals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button>Explore Success Stories</Button>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-sm text-blue-600 font-semibold">
                  {story.info}
                </h3>
                <h2 className="text-xl font-bold">{story.title}</h2>
                <p className="text-gray-700 flex-1">{story.description}</p>
                <a
                  href={story.link}
                  target="_blank"
                  className="mt-4 inline-block text-gray-800 px-5 py-2 rounded-full transition font-medium text-center"
                >
                  <Button>Learn more </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
