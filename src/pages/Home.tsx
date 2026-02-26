import Header from "../components/Header";
import Header1 from "../assets/images/Header1.jpg";

const Home = () => {
  return (
    <main>
      <Header
        title="Build Your Career  in Hospitality"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header1}
        height="400px"
        showButtons={true}
      />
    </main>
  );
};

export default Home;
