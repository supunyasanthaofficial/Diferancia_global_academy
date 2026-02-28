import CourseCard from "./CourseCard";
import C1 from "../assets/images/C1.jpg";
import C2 from "../assets/images/C2.jpg";
import C3 from "../assets/images/C3.jpg";
import C4 from "../assets/images/C4.jpg";
import C5 from "../assets/images/C5.jpg";
import C6 from "../assets/images/C6.jpg"
import E1 from "../assets/images/E1.jpg";
import E2 from "../assets/images/E2.jpg";
import E3 from "../assets/images/E3.jpg"

const CoursesSection: React.FC = () => {
  const sections = [
    {
      category: "Hotel and Tourism Management",
      courses: [
        {
          title: "Diploma in Housekeeping Operations",
          description:
            "Professional housekeping trainiing fo clean,safe,and effeicient environments.",
          image: C1,
        },
        {
          title: "Diploma in Cooking",
          description:
            "Learn cooking techniques with professional cleaning and maintenance for safe,efficient spaces.",
          image: C2,
        },
        {
          title: "Diploma in Food & Beverage",
          description:
            "Learn cooking, cleaning, and maintaining safe, efficient spaces.",
          image: C3,
        },
        {
          title: "Certificate in Front Office Management",
          description:
            "Learn professional cleaning,maintenance, and organizational skills for a safe, efficient workspace.",
          image: C4,
        },
        {
          title: "Certificate in Pastry & Bakery",
          description:
            "Learn baking techniques with professional cleaning,maintenance,and safe, efficient practices.",
          image: C5,
        },
        {
          title: "Certificate in Hotel and Tourism Management",
          description:
            "Learn baking techniques with professional cleaning, maintenance, and safe, efficient practices.",
          image: C6,
        },
      ],
    },
    {
      category: "Education",
      courses: [
        {
          title: "Certificate in English",
          description:
            "Develop language skills while leaning professional cleaning,maintenance, and efficient environment.",
          image: E1,
        },
        {
          title: "Certificate in Information Technology",
          description:
            "Gain IT skills while learning professional cleaning, maintenance, and efficient workspce.",
          image: E3,
        },
        {
          title: "Certificate in Psychology",
          description:
            "Understand human behavior,mental processes, and practical applications in everyday life.",
          image: E2,
        },
        
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-serif">
    
      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-[1.5px] bg-black flex-1 max-w-62.5[250px]"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a233a] whitespace-nowrap">
          Our Courses
        </h2>
        <div className="h-[1.5px] bg-black flex-1 max-w-62.5[250px]"></div>
      </div>

    
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          <h3 className="text-xl font-bold text-black border-b-2 border-black w-fit mb-10">
            {section.category}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {section.courses.map((course, courseIndex) => (
              <CourseCard
                key={courseIndex}
                title={course.title}
                description={course.description}
                image={course.image}
                onButtonClick={() => console.log(`${course.title} clicked`)}
              />
            ))}
          </div>

       
          {section.category === "Hotel and Tourism Management" && (
            <div className="flex justify-center mt-12">
              <button className="bg-[#1a233a] text-white px-12 py-3 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-lg">
                More
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default CoursesSection;
