import Header from "../components/Header";
import Header5 from "../assets/images/Header5.jpg";
import CoursesSection from "../components/CoursesSection";

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
      <CoursesSection/>
    </main>
  );
};

export default Course;
