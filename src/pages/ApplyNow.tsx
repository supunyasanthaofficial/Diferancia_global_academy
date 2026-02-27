import Header from "../components/Header";
import Header6 from "../assets/images/Header6.jpg";
import ApplyNowSection from "../components/ApplyNowSection";

const ApplyNow = () => {
  return (
    <main>
      <Header
        title="We provide quality hospitality education with practical training for successful careers."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header6}
        height="400px"
        showButtons={true}
      />

      <ApplyNowSection />
    </main>
  );
};

export default ApplyNow;
