import React from 'react';
import { Smile, Facebook, Twitter, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary-900/30 p-2 rounded-lg text-primary-400 border border-primary-900/50">
                  <Smile size={20} />
                </div>
                <span className="text-xl font-serif font-bold text-white">
                  House of <span className="text-primary-500">Dentistry</span>
                </span>
            </div>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Quality Dentistry. Comfortable Care.<br/>
                Dr. Mayank Karmalker and team are dedicated to providing the best oral health solutions in Goa.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 text-slate-400 border border-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 text-slate-400 border border-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all">
                    <Instagram size={18} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#services" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Treatments</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
           <div>
            <h4 className="font-bold text-white mb-6">Treatments</h4>
            <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Root Canals</a></li>
                <li><a href="#" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Cosmetic Dentistry</a></li>
                <li><a href="#" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Dental Implants</a></li>
                <li><a href="#" className="text-slate-500 hover:text-primary-400 transition-colors text-sm">Teeth Whitening</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Find Us</h4>
            <ul className="space-y-4">
                <li className="flex gap-3 text-slate-500 text-sm">
                    <MapPin size={18} className="text-primary-500 shrink-0" />
                    <span>First Floor, Shop No. 3, Market, Dita Classic,<br />Quepem, Goa – 403705</span>
                </li>
                <li className="flex gap-3 text-slate-500 text-sm">
                    <Phone size={18} className="text-primary-500 shrink-0" />
                    <a href="tel:09420724106" className="hover:text-primary-400 transition-colors">094207 24106</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} House of Dentistry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;