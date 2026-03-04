import Header from "../components/Header";
import Header1 from "../assets/images/Header1.jpg";

const Diploma = () => {
  return (
    <main>
      <Header
        title="Explore our industry focused hospitality courses desiged for real world success."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header1}
        height="400px"
        showButtons={true}
      />
    </main>
  );
};

export default Diploma;
