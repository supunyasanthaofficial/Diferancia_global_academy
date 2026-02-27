import Header from "../components/Header";
import Header5 from "../assets/images/Header5.jpg";

const Course = () => {
  return (
    <main>
      <Header
        title="Explore our industry focused hospitality courses designed for real world success."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header5}
        height="400px"
        showButtons={true}
      />
    </main>
  );
};

export default Course;
