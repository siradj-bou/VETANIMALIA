import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../photo/imgs/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && 
          (!buttonRef.current || !buttonRef.current.contains(event.target))) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className="flex justify-between items-center p-3 sm:p-5 shadow-lg font-sans mx-4 mb-5 sm:mx-8 
      lg:mx-16 bg-white rounded-full mt-5 relative"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center z-10">
        <img src={logo} alt="logo" className="w-21 h-auto" />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex space-x-6 lg:space-x-10">
        <li>
          <Link to="/About" className="hover:text-orange-600 transition-colors duration-200 py-2 px-1 text-sm lg:text-base">À propos</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-orange-600 transition-colors duration-200 py-2 px-1 text-sm lg:text-base">Services</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-orange-600 transition-colors duration-200 py-2 px-1 text-sm lg:text-base">Produits</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-600 transition-colors duration-200 py-2 px-1 text-sm lg:text-base">Contact</Link>
        </li>
      </ul>

      {/* Desktop Action Buttons */}
      <div className="hidden sm:flex space-x-2 lg:space-x-3">
        <Link 
          to="/login" 
          className="px-3 lg:px-5 py-1 lg:py-2 bg-[#FFBD89] text-white hover:bg-orange-400 rounded-full transition duration-300 text-sm lg:text-base"
        >
          Se connecter
        </Link>
        <Link 
          to="/SignUp" 
          className="px-3 lg:px-5 py-1 lg:py-2 bg-[#FFBD89] text-white hover:bg-orange-400 rounded-full transition duration-300 text-sm lg:text-base"
        >
          Rendez Vous
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        ref={buttonRef}
        className="sm:hidden focus:outline-none z-10 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
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

      {/* Mobile Dropdown Menu */}
      <div 
        className={`sm:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-2xl mt-1 mx-4 z-50 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"}`}
        style={{ minWidth: "calc(100% - 2rem)" }}
      >
        <ul className="flex flex-col p-2 space-y-1">
          <li>
            <Link 
              to="/About" 
              className="block py-3 px-4 hover:bg-orange-50 rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="block py-3 px-4 hover:bg-orange-50 rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className="block py-3 px-4 hover:bg-orange-50 rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Produits
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="block py-3 px-4 hover:bg-orange-50 rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex p-2 border-t border-gray-100 space-x-2">
          <Link 
            to="/login" 
            className="flex-1 text-center px-2 py-2 bg-[#FFBD89] text-white hover:bg-orange-400 rounded-full transition duration-300 text-xs sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Se connecter
          </Link>
          <Link 
            to="/SignUp" 
            className="flex-1 text-center px-2 py-2 bg-[#FFBD89] text-white hover:bg-orange-400 rounded-full transition duration-300 text-xs sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Rendez Vous
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;