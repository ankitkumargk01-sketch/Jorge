import React from 'react';
import { UserCheck, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Doctor Profile */}
          <div className="order-2 lg:order-1">
             <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary-500 rounded-tl-3xl"></div>
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" 
                        alt="Dr. Mayank Karmalker" 
                        className="w-32 h-32 rounded-2xl object-cover border-2 border-slate-700 shadow-lg"
                    />
                    <div>
                        <h4 className="text-2xl font-serif font-bold text-white mb-2">Dr. Mayank Karmalker</h4>
                        <p className="text-primary-400 font-medium mb-4 uppercase tracking-wider text-xs">Lead Dentist</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            An experienced professional committed to patient-focused care. Dr. Mayank believes in clear explanations, honest treatment planning, and gentle procedures that reduce fear.
                        </p>
                    </div>
                </div>
             </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
                <h2 className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-3">About The Clinic</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Welcome to <br/>House of Dentistry</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Our goal is simple — deliver painless, precise, and long-lasting dental solutions while making every visit comfortable. We offer a modern environment with a traditional approach to care.
                </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-primary-400 h-fit border border-slate-700">
                        <UserCheck size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1">Highly Experienced</h4>
                        <p className="text-slate-500 text-sm">Expert clinical team.</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-primary-400 h-fit border border-slate-700">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1">Modern & Clean</h4>
                        <p className="text-slate-500 text-sm">Hygienic, sterile setup.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-primary-400 h-fit border border-slate-700">
                        <HeartHandshake size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1">Stress-Free Care</h4>
                        <p className="text-slate-500 text-sm">Supportive environment.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-primary-400 h-fit border border-slate-700">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1">Trusted Local</h4>
                        <p className="text-slate-500 text-sm">Quepem's family dentist.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;