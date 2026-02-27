import React from "react";

import P1 from "../assets/images/P1.jpg";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";

interface Partners {
  id: number;
  name: string;
  logo: string;
}

const PartnerSection: React.FC = () => {
  const partners: Partners[] = [
    { id: 1, name: "Eco SWP Lodge", logo: P1 },
    { id: 2, name: "Hotel Casamara", logo: P2 },
    { id: 3, name: "The Royal Mall", logo: P3 },
    { id: 4, name: "Royal Mansion Resort", logo: P4 },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="flex items-center justify-center mb-16">
        <div className="h-[1.5px] w-20 md:w-64 bg-black"></div>
        <h2 className="text-4xl md:text-5xl font-serif mx-6 md:mx-10 text-[#1A233A]">
          Our Partners
        </h2>
        <div className="h-[1.5px] w-20 md:w-64 bg-black"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
