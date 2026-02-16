import React from 'react';
import { MapPin, Phone, Clock, CalendarDays, Navigation, ExternalLink } from 'lucide-react';
import Button from './Button';

interface ContactProps {
    onBookAppointment: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBookAppointment }) => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Information Side */}
            <div>
                <h2 className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">Visit Us</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Contact & <br/>Booking Details</h3>
                
                <p className="text-slate-400 text-lg mb-10">
                    Get professional dental advice and quality treatment in a caring environment. Call us now or book online to schedule your visit.
                </p>

                <div className="space-y-8">
                    {/* Address */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400 shrink-0 border border-slate-700">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                            <p className="text-slate-400 leading-relaxed mb-3">
                                First Floor, Shop No. 3, Market,<br/>
                                Dita Classic, Quepem, Goa – 403705
                            </p>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=House+of+Dentistry+Multispeciality+Dental+Clinic+Quepem+Goa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-primary-500/50 text-primary-400 hover:text-primary-300 transition-all duration-300 text-sm font-medium group"
                            >
                                <Navigation size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                                Get Directions
                                <ExternalLink size={12} className="opacity-50" />
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400 shrink-0 border border-slate-700">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                            <p className="text-slate-400 mb-2">
                                <a href="tel:09420724106" className="hover:text-white transition-colors">094207 24106</a>
                            </p>
                            <p className="text-xs text-slate-500">Available during clinic hours</p>
                        </div>
                    </div>

                    {/* Timings */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400 shrink-0 border border-slate-700">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Clinic Timings</h4>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-400">
                                <div>
                                    <span className="block text-slate-200 font-medium text-sm">Morning</span>
                                    <span className="text-sm">Open until 1:30 PM</span>
                                </div>
                                <div>
                                    <span className="block text-slate-200 font-medium text-sm">Evening</span>
                                    <span className="text-sm">Reopens at 3:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlighted CTA - Enhanced Visibility */}
                <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 p-1 rounded-2xl relative group border border-slate-700">
                     {/* Gradient Border Effect */}
                     <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-2xl opacity-50"></div>
                     
                     <div className="relative bg-slate-950 p-8 rounded-xl flex flex-col items-start gap-4 shadow-2xl">
                        <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                            <CalendarDays size={140} className="text-white" />
                        </div>
                        
                        <div className="relative z-10 w-full">
                            <h4 className="text-2xl font-serif font-bold text-white mb-2">Ready to smile?</h4>
                            <p className="text-slate-400 max-w-sm mb-6">Book your appointment online easily. We look forward to seeing you.</p>
                            
                            <Button onClick={onBookAppointment} size="lg" className="w-full sm:w-auto bg-black hover:bg-slate-900 text-white shadow-xl shadow-black/50 border border-slate-700 flex items-center justify-center transition-all duration-300">
                                <CalendarDays className="mr-2" size={20} />
                                Book Appointment Now
                            </Button>
                        </div>
                     </div>
                </div>
            </div>

            {/* Map / Visual Side */}
            <div className="relative h-full min-h-[400px] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-xl group">
                {/* Placeholder for Map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.620023477156!2d74.0683!3d15.2346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDE0JzA0LjYiTiA3NMKwMDQnMDUuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, filter: 'grayscale(1) invert(1) contrast(0.8) brightness(0.8)'}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    title="Clinic Location"
                ></iframe>
                
                {/* Improved Location Card */}
                <div className="absolute bottom-6 left-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-2xl max-w-[280px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                     <div className="flex items-start gap-3">
                        <div className="bg-primary-600 p-2 rounded-lg shrink-0 mt-0.5">
                            <MapPin size={18} className="text-white" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm leading-tight mb-1">House of Dentistry</p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Centrally located in Quepem Market
                            </p>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=House+of+Dentistry+Multispeciality+Dental+Clinic+Quepem+Goa" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 text-xs font-medium hover:text-primary-300 mt-2 inline-flex items-center gap-1"
                            >
                                Open in Maps <ExternalLink size={10} />
                            </a>
                        </div>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;