import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             {/* Logo Icon / Stylized Text */}
            <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-serif font-bold tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
                  House of <span className="text-primary-400">Dentistry</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 hidden sm:block">
                    Dr. Mayank Karmalker
                </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-300 hover:text-white font-medium text-sm tracking-wide transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-3">
              <a href="tel:09420724106" className="hidden lg:inline-flex items-center justify-center font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">
                +91 94207 24106
              </a>
              <Button onClick={onBookAppointment} size="sm" className="bg-black text-white border border-slate-700 hover:bg-slate-900 transition-colors">
                Book Visit
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 font-medium p-3 hover:bg-slate-800 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:09420724106"
            className="text-center font-medium p-3 text-primary-400 border border-primary-900/50 bg-primary-900/10 rounded-lg"
          >
            Call 094207 24106
          </a>
          <Button onClick={() => { onBookAppointment(); setMobileMenuOpen(false); }} className="w-full bg-primary-600 text-white">
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;