import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Calm environment, clear explanations, and very gentle treatment. Highly recommended!",
      author: "Kanan Sheela",
      role: "Happy Patient",
      image: "https://ui-avatars.com/api/?name=Kanan+Sheela&background=14b8a6&color=fff"
    },
    {
      text: "Dr. Mayank gives excellent service with lots of experience. The treatment was painless and effective.",
      author: "Asmin Hateli",
      role: "Happy Patient",
      image: "https://ui-avatars.com/api/?name=Asmin+Hateli&background=14b8a6&color=fff"
    },
    {
      text: "The clinic is clean and modern, and the staff are super helpful. Very professional experience.",
      author: "Manisha Mashra",
      role: "Happy Patient",
      image: "https://ui-avatars.com/api/?name=Manisha+Mashra&background=14b8a6&color=fff"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
          {/* Header Text */}
          <div className="max-w-xl">
             <div className="inline-block p-3 bg-slate-900 rounded-2xl text-primary-500 mb-6 border border-slate-800">
                <Quote size={32} />
             </div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                What Our Patients Say
             </h2>
             <p className="text-slate-400 text-lg mb-8">
                We are proud to serve families in Quepem and across Goa.
             </p>
             <div className="flex gap-8 items-center bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div>
                    <span className="flex items-center gap-2 text-4xl font-bold text-white">
                        5.0 <Star className="fill-yellow-500 text-yellow-500" size={32} />
                    </span>
                    <span className="text-sm text-slate-500 mt-1 block">Based on 41 Google Reviews</span>
                </div>
             </div>
          </div>

          {/* Review Cards Stack */}
          <div className="space-y-6">
            {reviews.map((review, idx) => (
                <div 
                    key={idx} 
                    className={`bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-lg transition-transform hover:-translate-y-1 ${idx === 1 ? 'lg:translate-x-8 border-slate-700 bg-slate-800' : ''}`}
                >
                    <p className="text-slate-300 mb-6 text-lg italic font-light">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                        <img 
                            src={review.image} 
                            alt={review.author} 
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700"
                        />
                        <div>
                            <h5 className="font-bold text-white">{review.author}</h5>
                            <span className="text-xs text-primary-500 uppercase tracking-wider">{review.role}</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;