import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
      setIsCoursesOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Courses",
      path: "#",
      subLinks: [
        { name: "Certificate Courses", path: "/courses/certificate" },
        { name: "Diploma Programs", path: "/courses/diploma" },
      ],
    },
    { name: "Apply Now", path: "/apply" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="relative bg-[#0a1128] text-white shadow-lg z-[100]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center shadow-md"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <div
                  className="flex items-center gap-1 cursor-pointer text-base lg:text-lg font-semibold hover:text-orange-400 transition-colors"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isCoursesOpen ? "rotate-180" : ""}`}
                  />

                  {isCoursesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white text-[#0a1128] rounded-xl shadow-xl py-3 border border-gray-100 animate-in fade-in slide-in-from-top-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-2.5 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-base lg:text-lg font-semibold hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#e68a00] hover:bg-[#ff9900] text-white px-6 lg:px-8 py-2.5 rounded-full text-base lg:text-lg font-bold transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#0a1128] shadow-2xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-[110] md:hidden border-r border-white/10`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="bg-white px-4 py-2 rounded-lg inline-block w-max mb-4">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() =>
                        setIsMobileCoursesOpen(!isMobileCoursesOpen)
                      }
                      className="flex items-center justify-between w-full text-xl font-medium border-b border-white/5 pb-2 hover:text-orange-400"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={isMobileCoursesOpen ? "rotate-180" : ""}
                      />
                    </button>

                    {isMobileCoursesOpen && (
                      <div className="pl-4 mt-2 space-y-3 bg-white/5 rounded-lg py-3">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-gray-300 hover:text-orange-400"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-medium border-b border-white/5 pb-2 hover:text-orange-400"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#e68a00] text-center text-white py-3 rounded-full text-lg font-bold shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[105] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
