import React, { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

interface Feedback {
  name: string;
  course: string;
  rating: number;
  review: string;
  image: string;
}

interface StudentFeedbackProps {
  feedbacks: Feedback[];
}

const StudentFeedback: React.FC<StudentFeedbackProps> = ({ feedbacks }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;

        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollRef.current.offsetWidth / 2 + 12,
            behavior: "smooth",
          });
        }
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "text-[#C17900] fill-[#C17900]"
            : "text-gray-300 fill-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-serif">
      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A233A] whitespace-nowrap">
          Student Feedback
        </h2>
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden px-2">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x py-4 justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[85vw] md:w-[calc(50%-12px)]"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col gap-4">
                  <Quote
                    size={32}
                    className="text-[#C17900] fill-[#C17900] opacity-80"
                  />

                  <p className="text-gray-600 text-sm leading-relaxed text-justify grow">
                    {feedback.review}
                  </p>

                  <div className="flex gap-1">
                    {renderStars(feedback.rating)}
                  </div>

                  <div className="h-[px] bg-gray-200 w-full"></div>

                  <div className="flex items-center gap-4">
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C17900]"
                    />
                    <div>
                      <h4 className="text-[#1A233A] font-bold text-sm">
                        {feedback.name}
                      </h4>
                      <p className="text-gray-500 text-xs">{feedback.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
