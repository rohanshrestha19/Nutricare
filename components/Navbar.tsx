
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [

    { name: 'Meal Plans', path: '/meal-plans' },
     { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Story', path: '/story' },
    { name: 'News', path: '/news' },
   
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 pt-4`}>
      <nav className={`mx-auto max-w-6xl transition-all duration-500 rounded-full border border-white/20 backdrop-blur-xl shadow-2xl ${
        scrolled ? 'bg-white/70 py-2' : 'bg-transparent py-4'
      }`}>
        <div className="px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#1E3932] rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white font-black text-xl">+</span>
            </div>
            <span className="text-xl font-extrabold text-[#1E3932] tracking-tighter">NutriCare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full ${
                  isActive(link.path) 
                    ? 'text-[#1E3932] bg-[#1E3932]/10' 
                    : 'text-slate-600 hover:text-[#1E3932] hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/auth"
              className="ml-4 bg-[#1E3932] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#2a4d44] transition-all shadow-lg hover:shadow-[#1E3932]/20 active:scale-95"
            >
              Start
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1E3932]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 px-6 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest ${
                  isActive(link.path) ? 'bg-[#1E3932]/10 text-[#1E3932]' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#1E3932] text-white py-4 rounded-2xl font-black uppercase tracking-widest"
            >
              Start Journey
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
