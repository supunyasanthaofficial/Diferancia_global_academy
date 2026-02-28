import Header from "../components/Header";
import Header1 from "../assets/images/Header1.jpg";
import PartnerSection from "../components/PartnerSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/Slider";
import L1 from "../assets/images/L1.png"
import E1 from "../assets/images/E1.jpg";
import E2 from "../assets/images/E2.jpg";
import StudentFeedback from "../components/StudentFeedBack";

const Home = () => {
  const OurPrograms = [
    {
      title: "Certificate in Front Office Management ",
      description:
        "Learn professional cleaning,maintenance,and organizational skills for a safe, efficient workspace",
      image: E1,
    },
    {
      title: "Certificate in Pastry & Bakery",
      description:
        "Learn baking techniques with professional cleaning,maintennance,and,safe,efficient practises.",
      image: E2,
    },
    {
      title: "Certificate in Pastry & Bakery",
      description:
        "Learn baking techniques with professional cleaning,maintennance,and,safe,efficient practises.",
      image: E2,
    },
    {
      title: "Certificate in Pastry & Bakery",
      description:
        "Learn baking techniques with professional cleaning,maintennance,and ,safe,efficient practises.",
      image: E2,
    },
     {
      title: "Certificate in Pastry & Bakery",
      description:
        "Learn baking techniques with professional cleaning,maintennance,and ,safe,efficient practises.",
      image: E2,
    },
  ];
  const feedbacks = [
    {
      name: "Kavindu Perera",
      course: "Certificate in Front Office Management",
      rating: 5,
      review:
        "This course completely changed my career path. The trainers were highly experienced and the practical sessions were incredibly useful. I got placed in a 5-star hotel within 2 months of completing the program!",
      image: L1,
    },
    {
      name: "Nimasha Fernando",
      course: "Certificate in Pastry & Bakery",
      rating: 5,
      review:
        "Amazing learning experience! The bakery course gave me both the skills and confidence to start my own small business. Highly recommend this to anyone passionate about baking.",
      image: L1,
    },
    {
      name: "Tharindu Silva",
      course: "Certificate in Front Office Management",
      rating: 4,
      review:
        "Very professional training environment. The staff is supportive and the curriculum is well-structured. I feel job-ready after completing this course.",
      image: L1,
    },
    {
      name: "Sanduni Jayawardena",
      course: "Certificate in Pastry & Bakery",
      rating: 5,
      review:
        "I always dreamed of working in a professional kitchen. This course made that dream a reality. The hands-on training and guidance from instructors was top-notch.",
      image: L1,
    },
  ];
  return (
    <main>
      <Header
        title="Build Your Career  in Hospitality"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header1}
        height="400px"
        showButtons={true}
      />
      <AboutSection />
      <Slider title="Our Programs" data={OurPrograms} />
      <StudentFeedback feedbacks={feedbacks}/>
      <PartnerSection />
    </main>
  );
};

export default Home;
