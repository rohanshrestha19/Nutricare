
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-24">
          <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#1E3932] tracking-tighter leading-none mb-12">
            The Intersection of <br />
            <span className="text-[#C5A059] italic font-serif font-normal">Science & Gastronomy.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-[#1E3932] pl-8">
            NutriCare+ was born from a simple realization: that the most powerful medical tool we possess is the food we choose to consume every day.
          </p>
        </div>

        {/* Why NutriCare Section - High Impact */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl border border-slate-100">
            <div className="lg:w-1/2">
              <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">The Advantage</span>
              <h2 className="text-5xl font-black text-[#1E3932] tracking-tighter mb-8 leading-none">Why NutriCare?</h2>
              <div className="space-y-10">
                <WhyItem 
                  title="Bio-Adaptive Algorithms" 
                  desc="Unlike generic apps, our system adjusts your micronutrient ratios in real-time based on your specific health markers and metabolic state." 
                />
                <WhyItem 
                  title="Clinical Board Approved" 
                  desc="Every meal plan is audited by our board of clinical dietitians and endocrinologists to ensure it meets strict therapeutic standards." 
                />
                <WhyItem 
                  title="Zero Decision Fatigue" 
                  desc="We handle the heavy lifting of planning, portioning, and shopping, leaving you with more energy to focus on your recovery and performance." 
                />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical Research" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C5A059] rounded-2xl -z-10 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-[#1E3932] rounded-[2rem] -z-10 -rotate-6"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision: High Contrast Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-[#1E3932] text-white p-16 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black opacity-10 pointer-events-none transition-all group-hover:opacity-20">01</div>
            <h3 className="text-3xl font-black mb-6 tracking-tight">Our Mission.</h3>
            <p className="text-white/70 leading-relaxed font-medium">
              To democratize clinical-grade nutrition. We make personalized wellness accessible, sustainable, and mathematically precise for every individual.
            </p>
          </div>
          <div className="bg-[#C5A059] text-white p-16 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black opacity-10 pointer-events-none transition-all group-hover:opacity-20">02</div>
            <h3 className="text-3xl font-black mb-6 tracking-tight">Our Vision.</h3>
            <p className="text-white/70 leading-relaxed font-medium">
              To become the global gold standard for digital nutrition therapy, bridging the gap between clinical advice and the dinner plate.
            </p>
          </div>
        </div>

        {/* Core Objectives: Minimalist List */}
        <div className="bg-white p-16 lg:p-24 rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-[#1E3932] tracking-tighter leading-none mb-6">Foundational Pillars.</h2>
              <p className="text-slate-500 font-medium">The non-negotiables that drive our innovation every single day.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              <ObjectiveItem text="Preventive healthcare through balanced, science-first nutrition" />
              <ObjectiveItem text="Bio-metric integration for hyper-personalization" />
              <ObjectiveItem text="Sustainable habit formation over short-term restriction" />
              <ObjectiveItem text="Transparency in clinical data and sourcing" />
            </div>
          </div>
          {/* Background Text */}
          <div className="absolute bottom-[-5%] left-[-5%] text-[15vw] font-black text-slate-50 opacity-50 select-none pointer-events-none -z-0">
            PILLARS
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="group">
    <div className="flex items-center space-x-4 mb-3">
      <div className="w-8 h-px bg-[#C5A059] transition-all group-hover:w-12"></div>
      <h4 className="text-xl font-black text-[#1E3932] tracking-tight">{title}</h4>
    </div>
    <p className="text-slate-500 text-sm font-medium leading-relaxed pl-12">{desc}</p>
  </div>
);

const ObjectiveItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] flex-shrink-0"></div>
    <span className="text-slate-700 font-bold tracking-tight text-sm leading-relaxed">{text}</span>
  </div>
);

export default About;
