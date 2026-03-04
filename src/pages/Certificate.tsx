import Header from "../components/Header";
import Header6 from "../assets/images/Header6.jpg";
import CoursesSection from "../components/CoursesSection";

const Certificate = () => {
  return (
    <main>
      <Header
        title="Explore our industry focused hospitality courses desiged for real world success."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header6}
        height="400px"
        showButtons={true}
      />
      <CoursesSection/>
    </main>
  );
};

export default Certificate;
