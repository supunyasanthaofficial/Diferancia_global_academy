import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import ApplyNow from "./pages/ApplyNow";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
