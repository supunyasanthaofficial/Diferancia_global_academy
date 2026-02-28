import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

interface SliderData {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  title: string;
  data: SliderData[];
}

const Slider: React.FC<SliderProps> = ({ title, data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2 + 12;
      const scrollAmount = cardWidth * 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-serif">
      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A233A] whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
        >
          <ChevronLeft size={32} className="text-[#1A233A]" />
        </button>

        <div className="overflow-hidden px-10">
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto scroll-smooth snap-x py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[85vw] md:w-[calc(50%-60px)]"
              >
                <CourseCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
        >
          <ChevronRight size={32} className="text-[#1A233A]" />
        </button>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/course")}
          className="bg-[#1A233A] text-white px-12 py-3 rounded-lg font-bold text-lg hover:bg-black transition-all"
        >
          More
        </button>
      </div>
    </section>
  );
};

export default Slider;
