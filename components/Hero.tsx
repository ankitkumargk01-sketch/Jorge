import React from 'react';
import { CheckCircle2, Star, Phone } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Decor - Dark Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-primary-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Dr. Mayank Karmalker
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Advanced Care. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-500">Gentle Touch.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Providing expert, ethical, and comfortable dental treatments in Quepem, Goa. Experience dentistry that prioritizes your peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button onClick={onBookAppointment} size="lg" className="bg-black text-white hover:bg-slate-900 border border-slate-700 shadow-lg shadow-black/20 transition-all duration-300">
                Book Appointment
              </Button>
              <a href="tel:09420724106" className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full border border-slate-700 text-slate-300 hover:border-white hover:text-white bg-slate-900/50 px-8 py-4 text-lg backdrop-blur-sm">
                <Phone className="mr-2" size={20} /> Call Clinic
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500" size={20} />
                <span>Multispeciality Clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500" size={20} />
                <span>Painless Treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500" size={20} />
                <span>Modern Setup</span>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-in slide-in-from-bottom-10 duration-1000 fill-mode-both z-30">
                    <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-500">
                        <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                        <p className="font-bold text-white text-lg">5.0 Rating</p>
                        <p className="text-xs text-slate-400">41 Happy Patients Reviews</p>
                    </div>
                </div>
             </div>

             {/* Decorative pattern dots */}
             <div className="absolute -top-12 -right-12 w-24 h-24 text-slate-800 opacity-50">
                <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 100 100">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2"></circle>
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)"></rect>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;