import React from "react";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  buttonText = "View More",
  onButtonClick,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full transition-all hover:shadow-md max-w-[350px]">
      <div className="p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      </div>

      <div className="p-5 flex flex-col grow font-serif">
        <h3 className="text-xl font-bold text-[#1A233A] mb-3 min-h-[60px] leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 grow text-justify">
          {description}
        </p>

        <button
          onClick={onButtonClick}
          className="bg-[#C17900] text-white font-bold py-2.5 px-8 rounded-lg w-fit hover:bg-[#A66800] transition-colors self-center "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
