
import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#F9F7F2]">
      {/* Cinematic Intro */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.6em] mb-8 block">The Genesis</span>
          <h1 className="text-7xl md:text-[100px] font-black text-[#1E3932] tracking-tighter leading-none mb-12">
            A Blueprint <br />
            <span className="text-[#C5A059] italic font-serif font-normal">Born from Care.</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic font-serif">
              "It started with a simple question: Why is the most powerful medicine—our food—the hardest one to manage?"
            </p>
          </div>
        </div>
        {/* Background Text */}
        <div className="absolute top-[10%] left-[-10%] text-[30vw] font-black text-slate-200/20 select-none -z-0 pointer-events-none">
          19
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden aspect-[3/4] shadow-2xl border-8 border-[#F9F7F2]">
              <img 
                src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&q=80&w=800" 
                alt="Early research days" 
                className="w-full h-full object-cover grayscale-[40%]" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C5A059] rounded-full flex items-center justify-center p-8 text-white shadow-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-center">Founded on Empathy</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-[#1E3932] tracking-tighter">The Journey.</h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
              <p>
                In 2019, our founders witnessed firsthand the struggle of managing complex clinical diets within a household. The "one-size-fits-all" approach to nutrition wasn't just ineffective—it was failing people who needed it most.
              </p>
              <p>
                NutriCare+ was conceptualized as a bridge between the clinical laboratory and the dinner table. We spent two years collaborating with endocrinologists, cardiologists, and culinary masters to develop an algorithm that doesn't just calculate calories, but orchestrates therapeutic nutrition.
              </p>
              <p>
                Today, we serve a global community of health-conscious individuals, athletes, and patients. Our story isn't about software; it's about the lives changed through the precision of what we eat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-[#1E3932] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <blockquote className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
            "We don't just sell meal plans. We provide the <span className="text-[#C5A059]">clinical roadmap</span> to a life without biological limits."
          </blockquote>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-6"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059]">Founder & CEO</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
      </section>
    </div>
  );
};

export default Story;
