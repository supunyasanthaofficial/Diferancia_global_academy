import React from "react";
import Logo3 from "../assets/images/Logo3.png";
import G1 from "../assets/images/G1.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-7xl mx-auto font-serif">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Ready to reimagine your career?
          </h1>
          <p className="text-2xl text-gray-800 leading-relaxed text-justify md:text-left">
            Diferancia Global Academy (Pvt) Ltd is a professional education and
            training institute committed to delivering quality, industry-focused
            courses that empower students with practical skills and knowledge
            for career success.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end self-center">
          <img
            src={Logo3}
            alt="Diferancia Global Academy Logo"
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>
      </div>

      <hr className="border-gray-400 -mt-20 mb-20 w-full" />

      <div className="flex flex-col md:flex-row items-stretch gap-8 mb-12 -mt-12">
        <div className="md:w-1/3 flex items-center">
          <p className="text-gray-800 font-medium text-2xl leading-snug text-center md:text-left">
            Organization dedicated to addressing today's challenges and emerging
            opportunities, bringing everything together under one unified
            vision.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-around border-l-0 md:border-l-2 border-black py-2">
          <div className="flex-1 text-center">
            <h2 className="text-5xl font-bold text-black">560</h2>
            <p className="text-xl text-gray-800">Fellows</p>
          </div>
          <div className="flex-1 text-center border-l-2 border-black px-4">
            <h2 className="text-5xl font-bold text-black">10</h2>
            <p className="text-xl text-gray-800">Teachers</p>
          </div>
          <div className="flex-1 text-center border-l-2 border-black px-4">
            <h2 className="text-5xl font-bold text-black">12</h2>
            <p className="text-xl text-gray-800">Programs</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 mb-12" />

      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <div className="lg:w-1/2 w-full">
          <img
            src={G1}
            alt="Students and Professionals"
            className="rounded-3xl shadow-lg w-full object-cover h-[300px] md:h-[450px]"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-4xl font-bold text-[#1A233A] mb-6">
            About Diferancia Global Academy
          </h2>
          <ul className="space-y-4 text-2xl text-gray-900 font-medium">
            {[
              "Industry-focused and career-oriented",
              "Experienced and qualified",
              "Practical, real-world training",
              "Modern learning",
              "Skill development and career",
              "Commitment to academic",
              "Supportive and student-friendly",
              "Preparation for local and international opportunities",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
       <hr className="border-gray-400  relative left-1/2 -translate-x-1/2 mt-10" />
    </section>
  );
};

export default AboutSection;
