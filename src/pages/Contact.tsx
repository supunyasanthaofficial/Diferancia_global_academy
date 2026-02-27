import Header from "../components/Header";
import Header4 from "../assets/images/Header4.jpg";
import Map from "../components/Map";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <main>
      <Header
        title="Build Your Career  in Hospitality Join Us Today"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header4}
        height="400px"
        showButtons={false}
      />
      <ContactSection/>
      <Map/>
    </main>
  );
};

export default Contact;
