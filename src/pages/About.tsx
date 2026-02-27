import Header from "../components/Header";
import Header2 from "../assets/images/Header2.jpg";
import WhatWeDoSection from "../components/WhatWeDoSection";
import LecturerSection from "../components/LecturesSection";
import PartnerSection from "../components/PartnerSection";

const About = () => {
  return (
    <main>
      <Header
        title="We provide quality hospitality education with practical trainiing for successful careers."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header2}
        height="400px"
        showButtons={true}
      />
      <WhatWeDoSection/>
      <LecturerSection/>
      <PartnerSection/>
    </main>
  );
};

export default About;
