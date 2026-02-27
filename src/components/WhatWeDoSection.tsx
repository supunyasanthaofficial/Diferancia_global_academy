import A1 from "../assets/images/A1.png";

const WhatWeDoSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 font-sans">
      <div className="flex flex-cols md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What We Do
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed text-justify">
            <p className="font-semibold">
              Diferancia Global Academy (Pvt) Ltd provides leadership in
              professional education by delivering quality, industry-relevent
              training programs.We design and develop mordern curricula, prepare
              structed learning materials, and offer practical skill-based
              courses that mee current market demands.
            </p>
            <p className="font-semibold">
              Our focus includes professional training, carrer development
              programs, academic guidance, research-based learning, and
              specialized projects that support deverse educational and carrer
              pathways. through diploma and ceertification programs, we are
              committed to building knowledgeable, skilled, and confident
              professional ready for real-world success.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm shadow-lg">
            <img src={A1} alt="Camous" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDoSection;
