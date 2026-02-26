import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  height?: string;
  maxWidth?: string;
  showButtons?: boolean;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnLink?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  bgImage,
  height = "600px",
  maxWidth = "100%",
  showButtons = true,
  primaryBtnText = "Apply Now",
  secondaryBtnText = "More Details",
  primaryBtnLink = "/apply",
  secondaryBtnLink = "/about",
}) => {
  return (
    <header
      className="relative w-full flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,

        minHeight: height,
        maxWidth: maxWidth,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0a1128]/90 via-[#0a1128]/60 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-12">
        <div className="max-w-3xl text-white flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 drop-shadow-md">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base md:text-lg font-light mb-8 text-gray-200 max-w-xl">
              {subtitle}
            </p>
          )}

          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Link
                to={primaryBtnLink}
                className="bg-[#e68a00] hover:bg-[#ff9900] text-white px-8 py-3 rounded-xl text-base md:text-lg font-bold transition-all shadow-lg active:scale-95"
              >
                {primaryBtnText}
              </Link>

              <Link
                to={secondaryBtnLink}
                className="border-2 border-white hover:bg-white hover:text-[#0a1128] text-white px-8 py-3 rounded-xl text-base md:text-lg font-bold transition-all active:scale-95"
              >
                {secondaryBtnText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
