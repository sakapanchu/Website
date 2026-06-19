import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },

  {
    label: "Careers",
    href: "/careers",
    hasDropdown: true,
    dropdownItems: [
      { label: "Career", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },

  {
    label: "Products",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { label: "AI Products", href: "/products/ai" },
      { label: "SaaS Products", href: "/products/saas" },
    ],
  },

  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="w-full px-3 sm:px-6 bg-[#F1F1F1] py-5 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1430px] mx-auto bg-white rounded-[20px_20px_10px_10px] shadow-sm flex items-center h-[95px] px-3 sm:px-6 relative">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-[73px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-12 mx-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <div key={link.label} className="relative group">

                {/* Main Link */}
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 text-[16px] leading-6 whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "font-bold text-[#060606] underline decoration-[#F5B90C] decoration-[2.5px] underline-offset-[10px]"
                      : "font-normal text-[#060606] hover:text-[#F5B90C]"
                  }`}
                >
                  {link.label}

                  {link.hasDropdown && (
                    <svg
                      width="7"
                      height="5"
                      viewBox="0 0 7 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                    >
                      <path d="M3.5 3L0 0H7L3.5 3Z" fill="black" />
                    </svg>
                  )}
                </Link>

            
                {link.hasDropdown && (
                  <div
                    className="
                      absolute top-full left-0 mt-4
                      min-w-[200px]
                      bg-white
                      rounded-2xl
                      border border-[#E5E5E5]
                      shadow-lg
                      opacity-0 invisible
                      translate-y-3
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all duration-300
                      z-50
                      overflow-hidden
                      p-2
                    "
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="
                          block px-4 py-3
                          text-[15px]
                          text-gray-700
                          rounded-full
                          border border-transparent
                          transition-all duration-200

                          hover:text-[#FFC80B]
                          hover:border-[#FFC80B]
                          hover:shadow-[0_6px_18px_rgba(255,200,11,0.25)]
                          hover:bg-white
                          hover:ml-1
                        "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 ml-auto flex-shrink-0">

          {/* Language */}
          <button className="flex items-center gap-2 text-[14px] font-medium text-black hover:opacity-70 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 8C14 11.3115 11.3115 14 8 14M14 8C14 4.68851 11.3115 2 8 2M14 8H2M8 14C4.68851 14 2 11.3115 2 8M8 14C9.10467 14 10 11.3133 10 8C10 4.68667 9.10467 2 8 2M8 14C6.89533 14 6 11.3133 6 8C6 4.68667 6.89533 2 8 2M2 8C2 4.68851 4.68851 2 8 2"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {lang}
          </button>

          {/* Let's Talk Button */}
          <Link
            to="/contact"
            className="
              group
              flex items-center gap-2
              px-5 py-2.5
              rounded-[30px]
              border border-[#FFC80B]
              bg-[rgba(255,200,11,0.20)]
              text-[#7B5901]
              font-bold text-[14px]
              transition-all duration-300 ease-out
              hover:scale-110
              hover:-translate-y-1
              hover:bg-[#FFC80B]
              hover:text-black
              hover:shadow-[0_15px_35px_rgba(251,191,36,0.5)]
              active:scale-95
            "
            style={{
              boxShadow:
                "0 4px 16px 0 #FBBF24, 4px 4px 25px 0 rgba(251,191,36,0.30) inset",
            }}
          >
            Let's Talk
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M9.33333 12.6667L14 8.00004L9.33333 3.33337M14 8.00004H2"
                stroke="#7B5901"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-auto p-2 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-[10px] py-4 px-6 flex flex-col gap-3 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b border-gray-100 text-[16px]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-2.5 rounded-[30px] border border-[#FFC80B] bg-[rgba(255,200,11,0.20)] text-[#7B5901] font-bold text-[14px]"
            >
              Let's Talk
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}