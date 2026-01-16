import React from "react";
import Button from "../ui/Button";

const integrationLogos = [
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f9016814898_img-home-int-8.svg",
    alt: "SDGE",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f4df581489e_img-home-int-6.svg",
    alt: "Nabers",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f3b0a8148b2_img-home-int-14.svg",
    alt: "KMC Controls",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f90bb81489c_img-home-int-3.svg",
    alt: "Monnit",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8fefa48148ad_img-home-int-4.svg",
    alt: "Alberton",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f622281489b_img-home-int-7.svg",
    alt: "Zendesk",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f08f4814899_img-home-int-9.svg",
    alt: "EasyIO",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f55f88148b5_img-home-int-18.svg",
    alt: "DG Logik",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f622c8148ba_img-home-int-12.svg",
    alt: "Delta",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f57088148b8_img-home-int-13.svg",
    alt: "Corigo",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f29db8148af_img-home-int-20.svg",
    alt: "Eaton",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f6d008148b3_img-home-int-17.svg",
    alt: "Engie",
  },
];

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white py-20 text-center px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Data Integration
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We have already built an extensive library of drivers, APIs, and
          upload methods to make data ingestion as smooth as possible.
        </p>
      </div>

      <div className="mb-12">
        <a
          href="/platform/integrations"
          target="_blank"
          className="inline-block text-black px-8 py-3 shadow-lg transition font-medium"
        >
          <Button>See our Full List of Integrations </Button>
        </a>
      </div>

      {/* Grid with 2 rows */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
        {integrationLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center col-span-3 md:col-span-2"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
