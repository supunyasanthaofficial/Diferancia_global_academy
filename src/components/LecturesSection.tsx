import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import LB1 from "../assets/images/LB1.jpg";
import LB2 from "../assets/images/LB2.png";
import LB3 from "../assets/images/LB3.png";
import L1 from "../assets/images/L1.png";

interface Lecturer {
  id: number;
  name: string;
  qualification: string;
  image: string;
  avatar?: string;
}

const lecturers: Lecturer[] = [
  {
    id: 1,
    name: "Mr.Eminem",
    qualification: "Certificate in Information Technology",
    image: LB1,
    avatar: L1,
  },
  {
    id: 2,
    name: "Mr.Optimus Prime",
    qualification: "Certificate in English",
    image: LB2,
  },
  {
    id: 3,
    name: "Mr.Megatron",
    qualification: "Certificate in Front Office Management",
    image: LB3,
  },
];

const LecturerSection: React.FC = () => {
  return (
    <div className="bg-white pt-13">
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="h-[2px] w-12 md:w-64 bg-black"></div>
        <h2 className="text-4xl md:text-6xl font-serif mx-4 md:mx-12 text-[#1A233A] whitespace-nowrap">
          Lecturers
        </h2>
        <div className="h-[2px] w-12 md:w-64 bg-black"></div>
      </div>

      <section className="bg-[#D9D9D9] py-20 px-4 md:px-10">
        <div className="relative max-w-6xl mx-auto flex items-center">
          <button className="absolute left-[-20px] md:left-[-60px] z-10 p-2 text-black hover:scale-110 transition-transform hidden lg:block">
            <ChevronLeft size={54} strokeWidth={1} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {lecturers.map((lecturer) => (
              <div
                key={lecturer.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={lecturer.image}
                    alt={`${lecturer.name} background`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4">
                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-md">
                      {lecturer.avatar ? (
                        <img
                          src={lecturer.avatar}
                          alt={lecturer.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <svg
                            className="w-12 h-12 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 min-h-[150px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lecturer.name}
                  </h3>
                  <p className="text-gray-600 font-medium leading-snug">
                    {lecturer.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-[-20px] md:right-[-60px] z-10 p-2 text-black hover:scale-110 transition-transform hidden lg:block">
            <ChevronRight size={54} strokeWidth={1} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LecturerSection;
