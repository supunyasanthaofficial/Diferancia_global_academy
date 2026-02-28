import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo2 from "../assets/images/Logo2.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-6 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <img src={Logo2} alt="Diferancia Logo" className="h-16 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Diferancia Global Academy (Pvt) Ltd is a professional training
            institute providing quality, industry-focused courses that equip
            students with practical skills for career success.
          </p>

          <div className="flex space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        <div className="md:pl-12">
          <h3 className="text-xl font-serif mb-6 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className="hover:text-orange-400 transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/apply"
                className="hover:text-orange-400 transition-colors"
              >
                Apply Now
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-serif mb-6  pb-2 inline-block">
            OUR CONTACTS
          </h3>
          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <FaMapMarkedAlt className="text-white mt-1 shrink-0" size={24} />
              <p className="text-sm">
                No.15/I/C, New Digana Road,
                <br />
                Kundasale, Kandy
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-white shrink-0" size={24} />
              <p className="text-sm">081 2 267 755 / 077 3 640 718</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-white shrink-0" size={24} />
              <p className="text-sm">info@diferanciaglobal.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-[13px] tracking-wide text-gray-400">
        <p className="text-center leading-loose">
          © {new Date().getFullYear()} All Rights Reserved | Diferancia Global
          Academy | Designed & Developed by{" "}
          <a
            href="https://everefficient.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 font-bold"
          >
            EVER EFFICIENT Business Management (Pvt) Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
