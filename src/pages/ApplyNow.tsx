import Header from "../components/Header";
import Header2 from "../assets/images/Header2.jpg";
import ApplyNowSection from "../components/ApplyNowSection";

const ApplyNow = () => {
  return (
    <main>
      <Header
        title="Apply Now"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header2}
        height="400px"
        showButtons={true}
      />
      <section className="bg-[#0a1128]">
        <ApplyNowSection/>

      </section>
    </main>
  );
};

export default ApplyNow;
