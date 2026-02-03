import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Vector.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "Movies & Shows", path: "/hazem" },
    { name: "Support", path: "/Mido/Support" },
    { name: "Subscriptions", path: "/Mariem" },
    { name: "Signup", path: "/Eman" },
    { name: "Login", path: "/Hoda" },
  ];

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-neutral-800 transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-black/30" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center 
        px-4 py-3 md:px-3 md:py-2">
        <Link to="/">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-8 w-8 md:h-6 md:w-6" />
          <p className="text-white font-bold text-sm md:text-xs lg:text-lg tracking-wide">
            StreamVibe
          </p>
        </div>
          </Link>
        <div className="hidden md:flex bg-[#141414] border border-neutral-700 
          rounded-full px-3 py-1 gap-2 shadow-sm">
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[12px] px-1 lg:px-2 py-1 lg:py-2 lg:rounded-full rounded-full font-medium transition duration-200 ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-red-600/20"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <button className="p-1.5 md:p-1 rounded-full hover:bg-red-600/20 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-4 md:h-4 text-gray-300 hover:text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
          <button className="p-1.5 md:p-1 rounded-full hover:bg-red-600/20 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-4 md:h-4 text-gray-300 hover:text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C8.7 6.2 8 7.4 8 8.8v5.4c0 .5-.2 1-.6 1.4L6 17h5m4 0v1a3 3 0 11-6 0v-1"
              />
            </svg>
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-red-600/20 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-neutral-700 px-4 py-3 flex flex-col gap-2">
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-red-600/20 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
