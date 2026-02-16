import React from 'react';
import { Sparkles, Activity, ShieldCheck, Microscope, MonitorSmartphone, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "General Dentistry",
      description: "Our foundation of care includes routine checkups, ultrasonic scaling & polishing to remove plaque, and aesthetic tooth-colored fillings.",
    },
    {
      icon: <Activity size={32} />,
      title: "Restorative Treatments",
      description: "Restore your bite and comfort. We specialize in painless single-visit root canal treatments (RCT), high-strength ceramic crowns, and bridges.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Cosmetic Dentistry",
      description: "Achieve the smile you've always wanted. Our cosmetic solutions include professional teeth whitening, veneers, and smile designing.",
    },
    {
      icon: <Microscope size={32} />,
      title: "Specialized Rehabilitation",
      description: "For complex cases involving multiple teeth or jaw issues, we offer full mouth diagnosis and rehabilitation.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Preventive Care",
      description: "Prevention is better than cure. We offer fluoride applications and gum therapy to protect teeth from decay.",
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Digital Diagnostics",
      description: "We utilize advanced technology like intraoral cameras and digital X-rays for precise evaluation and accurate diagnosis.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-900"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Comprehensive Oral Healthcare</h3>
          <p className="text-slate-400 text-lg">
            High-quality dental solutions under one roof with a focus on your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 rounded-2xl p-8 hover:bg-slate-900 transition-all duration-300 border border-slate-800 hover:border-primary-900/50 flex flex-col"
            >
              <div className="w-14 h-14 bg-slate-800 text-primary-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shrink-0 border border-slate-700 group-hover:border-primary-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;