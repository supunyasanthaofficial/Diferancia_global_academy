import Header from "../components/Header";
import Header4 from "../assets/images/Header4.jpg";

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
    </main>
  );
};

export default Contact;
