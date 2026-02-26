import Header from "../components/Header";
import Header2 from "../assets/images/Header2.jpg";

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
    </main>
  );
};

export default About;
