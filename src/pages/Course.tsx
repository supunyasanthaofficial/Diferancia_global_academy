import Header from "../components/Header";
import Header3 from "../assets/images/Header3.jpg";

const Course = () => {
  return (
    <main>
      <Header
        title="Explore our industry focused hospitality courses designed for real world success."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header3}
        height="400px"
        showButtons={true}
      />
    </main>
  );
};

export default Course;
