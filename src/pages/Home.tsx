import Header from "../components/Header";
import Header1 from "../assets/images/Header1.jpg";
import PartnerSection from "../components/PartnerSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/Slider";

import E1 from "../assets/images/E1.jpg";
import E2 from "../assets/images/E2.jpg";

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
        "Learn baking techniques with professional cleaning,maintennance,and ,safe,efficient practises.",
      image: E2,
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
      <PartnerSection />
    </main>
  );
};

export default Home;
