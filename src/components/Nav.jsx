import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-white/5 bg-app-bg/60 backdrop-blur-xl sticky top-0 z-50">
      {/* Brand / Logo */}
      <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform group-hover:scale-110">
          <span className="text-white font-bold text-xl uppercase">P</span>
        </div>
        <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors">
          PlayMate
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        <li>
          <Link to="/" className="text-[13px] font-semibold text-white/50 hover:text-white transition-all uppercase tracking-widest no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-[13px] font-semibold text-white/50 hover:text-white transition-all uppercase tracking-widest no-underline">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-[13px] font-semibold text-white/50 hover:text-white transition-all uppercase tracking-widest no-underline">
            About Us
          </Link>
        </li>
        {/* You can add more links here as needed */}
      </ul>

      <div className="hidden md:block">
        <button className="px-5 py-2 bg-white text-black font-bold text-xs rounded-full hover:bg-accent hover:text-white transition-all cursor-pointer">
          GET STARTED
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-white/50 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px] bg-white" : ""}`} />
        <span className={`block w-5 h-px bg-white/50 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-white/50 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px] bg-white" : ""}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0f0f11] border-b border-white/5 flex flex-col px-8 py-6 gap-6 md:hidden animate-in fade-in slide-in-from-top-2 shadow-2xl">
          <Link 
            to="/" 
            className="text-sm font-semibold text-white/60 hover:text-accent transition-colors no-underline uppercase tracking-widest"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-semibold text-white/60 hover:text-accent transition-colors no-underline uppercase tracking-widest"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link to="/about"
          className="text-sm font-semibold text-white/60 hover:text-accent transition-colors no-underline uppercase tracking-widest"
            onClick={() => setMenuOpen(false)}>About Us
          </Link>
          <button className="w-full py-4 bg-accent text-white font-bold rounded-xl">
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;