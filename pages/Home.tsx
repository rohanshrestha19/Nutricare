import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden">
      {/* Immersive Hero: Layered Composition */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
        <div className="max-w-7xl w-full relative">
          {/* Background Decor Text */}
          <div className="absolute -top-20 -left-10 text-[15vw] font-black text-slate-200/40 select-none -z-10 leading-none tracking-tighter">
            VITALITY
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 relative z-20">
              <div className="flex items-center space-x-4 mb-8">
                <span className="w-12 h-px bg-[#C5A059]"></span>
                <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em]">The Scientific Standard</span>
              </div>
              
              <h1 className="text-7xl md:text-[120px] font-black text-[#1E3932] leading-[0.85] tracking-tighter mb-10">
                EAT <span className="text-[#C5A059] italic font-serif font-normal">for</span><br />
                PRECISION.
              </h1>
              
              <div className="max-w-lg mb-12">
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-[#1E3932] pl-6">
                  NutriCare+ transcends generic dieting. We architect clinical nutrition protocols mapped to your unique metabolic fingerprint.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link
                    to="/meal-plans"
                    className="group relative px-12 py-5 bg-[#1E3932] text-white rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Explore Ecosystem
                  </Link>
                  <a
                    href="#appointment"
                    className="px-12 py-5 bg-transparent text-[#1E3932] border-2 border-[#1E3932] rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#1E3932] hover:text-white transition-all"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="relative z-10">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A059] rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                    alt="Nutritional Precision" 
                  />
                </div>
                {/* Floating Bio-Badge */}
                <div className="absolute -bottom-10 -right-6 bg-[#1E3932] text-white p-8 rounded-3xl shadow-2xl border border-white/10 max-w-[240px]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Bio-Metric Sync</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[#C5A059]"></div>
                    </div>
                    <p className="text-[10px] font-bold text-white/60 leading-tight italic">
                      "Adjusting protein synthesis ratio based on current circadian rhythm..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology: Asymmetrical Grid */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Methodology</span>
              <h2 className="text-5xl font-black text-[#1E3932] tracking-tighter leading-none mb-8">
                Clinical<br />Intelligence.
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                We bridge the gap between medical diagnostics and the culinary arts. Every meal is a data-informed decision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 rounded-2xl bg-stone-50">
                  <div className="text-2xl font-black text-[#1E3932] mb-1">98%</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Adherence Rate</div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-stone-50">
                  <div className="text-2xl font-black text-[#1E3932] mb-1">45k+</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Bio-Profiles</div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="md:mt-24">
                <MethodologyCard 
                  title="Disease Reversal" 
                  desc="Protocols engineered to modulate inflammatory markers and glycemic response."
                  img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
                  accent="bg-emerald-500"
                />
              </div>
              <div>
                <MethodologyCard 
                  title="Neuro-Nutrition" 
                  desc="Fueling cognitive performance and long-term neuro-protection through dietary lipids."
                  img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
                  accent="bg-[#C5A059]"
                />
              </div>
              <div className="md:mt-24 md:col-span-2">
                <div className="relative h-96 rounded-[3rem] overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Full spectrum nutrition" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1E3932] to-transparent opacity-80"></div>
                   <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                      <div className="max-w-md">
                        <h3 className="text-4xl font-black text-white tracking-tighter mb-4">Metabolic Flexibility.</h3>
                        <p className="text-white/70 text-sm font-medium">Switch seamlessly between fuel sources with our ketogenic-adaptive protocols.</p>
                      </div>
                      <Link to="/features" className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1E3932] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Image Grid: High-Reliability Editorial Mosaic */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Visual Library</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E3932] tracking-tighter leading-none">
              The Architecture <br />
              <span className="text-[#C5A059] italic font-serif font-normal">of Every Bite.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
            {/* Main Large Piece */}
            <div className="col-span-2 row-span-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Clinical Nutrition Bowl" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1E3932]">
                Bio-Availability High
              </div>
            </div>
            {/* Small Upper Piece */}
            <div className="col-span-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Healthy Nutrients" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white font-black text-xs">+</div>
            </div>
            {/* Vertical Tall Piece */}
            <div className="col-span-1 row-span-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Fresh Organic Produce" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-[9px] font-black uppercase tracking-widest">Molecular Prep</span>
              </div>
            </div>
            {/* Small Square Piece */}
            <div className="col-span-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Balanced Mediterranean Diet" />
            </div>
            {/* Bottom Horizontal Wide Piece */}
            
          </div>
        </div>
      </section>

      {/* How It Works Section: Visually Explicit Step-wise Journey */}
      <section className="py-32 bg-[#F9F7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-28">
            <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">The Protocol</span>
            <h2 className="text-6xl md:text-8xl font-black text-[#1E3932] tracking-tighter leading-none mb-8">
              Your Precision <br />
              <span className="text-[#C5A059] italic font-serif font-normal">Journey Roadmap.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Experience a seamless transition from clinical insight to culinary execution with our structured four-phase evolution.
            </p>
          </div>

          <div className="relative">
            {/* Visual Flow Path (Desktop) */}
            <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0">
               {/* Glowing moving dot */}
               <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent animate-[flowPath_4s_infinite_linear]"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-8 relative z-10">
              <HowStep 
                num="01"
                stepLabel="Step One"
                title="Choose Your Goal"
                desc="Define your primary health objective. Our engine adapts to everything from Diabetes care to Elite Performance."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>}
              />
              <HowStep 
                num="02"
                stepLabel="Step Two"
                title="Personalized Plan"
                desc="Receive your curated biological blueprint. Calibrated for macro balance, micronutrient density, and glycemic load."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.346a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 00-.466 2.198l.565 1.283a2 2 0 001.476 1.228l1.39.231a6 6 0 003.885-1.12l.274-.183a6 6 0 013.885-1.12l1.39.231a2 2 0 001.476-1.228l.565-1.283a2 2 0 00-.466-2.198l-1.16-1.16zM12 9V4m0 0L9 7m3-3l3 3"/></svg>}
              />
              <HowStep 
                num="03"
                stepLabel="Step Three"
                title="Follow the Calendar"
                desc="Seamless execution with our interactive chef-led recipes and smart grocery syncing. No more decision fatigue."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
              />
              <HowStep 
                num="04"
                stepLabel="Step Four"
                title="Track & Optimize"
                desc="Dynamic biomarkers integration. We refine your protocol as your markers improve, ensuring continuous progress."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
                isLast
              />
            </div>
          </div>

          <div className="mt-28 text-center">
            <Link 
              to="/meal-plans" 
              className="group inline-flex items-center space-x-6 px-16 py-7 bg-[#1E3932] text-white rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(30,57,50,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Start Your Transformation</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes flowPath {
            0% { left: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}</style>
      </section>

      {/* Appointment Section: High Contrast Editorial Form */}
      <section id="appointment" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-[#1E3932] text-white flex flex-col justify-center">
              <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">Personal Consultation</span>
              <h2 className="text-5xl font-black tracking-tighter leading-none mb-8">
                Speak with a <br />
                <span className="text-[#C5A059] italic font-serif font-normal">Clinical Expert.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-12">
                Begin your precision health journey with a 1-on-1 diagnostic consultation. We'll analyze your current biomarkers and map out your therapeutic roadmap.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-sm font-bold tracking-tight">Biomarker Baseline Assessment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <span className="text-sm font-bold tracking-tight">45-Minute Clinical Deep-Dive</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center bg-white">
              {formSubmitted ? (
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-3xl font-black text-[#1E3932] tracking-tighter mb-2">Request Received.</h3>
                  <p className="text-slate-500 font-medium">A concierge will reach out to confirm your slot within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="w-full space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Name</label>
                      <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-[#F9F7F2] border-none focus:ring-2 focus:ring-[#C5A059] transition-all font-bold placeholder:text-slate-300" placeholder="Julian Vane" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                      <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-[#F9F7F2] border-none focus:ring-2 focus:ring-[#C5A059] transition-all font-bold placeholder:text-slate-300" placeholder="julian@vane.bio" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Health Goal / Condition</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-[#F9F7F2] border-none focus:ring-2 focus:ring-[#C5A059] transition-all font-bold text-slate-600">
                      <option>Diabetes Management</option>
                      <option>Longevity & Anti-Aging</option>
                      <option>Metabolic Performance</option>
                      <option>Neuro-Protection</option>
                      <option>Hormonal Balance</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Consultation Date</label>
                    <input required type="date" className="w-full px-6 py-4 rounded-2xl bg-[#F9F7F2] border-none focus:ring-2 focus:ring-[#C5A059] transition-all font-bold text-slate-600" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-[#1E3932] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-[#2a4d44] transition-all transform hover:scale-[1.02] active:scale-95">
                    Schedule Diagnostic
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-medium">
                    * NutriCare+ respects your privacy. All data is encrypted and HIPAA compliant.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Philosophy: Editorial Impact */}
      <section className="py-40 bg-[#1E3932] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A059]/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.8em] mb-12 block">The Philosophy</span>
          <blockquote className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-16 italic font-serif">
            "We believe the most <span className="text-[#C5A059] not-italic font-sans font-black">advanced technology</span> in the world isn't a computer—it's the <span className="underline decoration-[#C5A059]">human metabolism</span>."
          </blockquote>
          <div className="inline-flex items-center space-x-6">
            <div className="w-16 h-px bg-white/20"></div>
            <span className="text-sm font-black uppercase tracking-widest text-[#C5A059]">NutriCare+ Clinical Board</span>
            <div className="w-16 h-px bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* Testimonials: Clean Minimalist Grids */}
      <section className="py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-black text-[#1E3932] tracking-tighter">Clinical Testimonials.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ModernTestimonial 
              quote="The transition to clinical nutrition was the single most effective intervention for my chronic fatigue. It's truly transformative."
              author="Dr. Julian Vane"
              role="Biological Chemist"
              image="https://i.pravatar.cc/150?u=julian"
            />
            <ModernTestimonial 
              quote="Managing type-2 diabetes usually feels like a chore. NutriCare+ turned it into a culinary adventure with perfect glycemic stability."
              author="Sarah Jenkins"
              role="Member since 2022"
              image="https://i.pravatar.cc/150?u=sarah"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const MethodologyCard: React.FC<{ title: string; desc: string; img: string; accent: string }> = ({ title, desc, img, accent }) => (
  <div className="group cursor-default">
    <div className="relative rounded-[3rem] overflow-hidden aspect-square mb-8 shadow-xl">
      <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={title} />
      <div className={`absolute top-8 left-8 w-12 h-12 ${accent} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
        <div className="w-4 h-4 border-2 border-white rounded-full"></div>
      </div>
    </div>
    <h3 className="text-3xl font-black text-[#1E3932] mb-4 tracking-tighter leading-none">{title}</h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
  </div>
);

const HowStep: React.FC<{ 
  num: string; 
  stepLabel: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode;
  isLast?: boolean;
}> = ({ num, stepLabel, title, desc, icon, isLast }) => (
  <div className="flex flex-col items-center text-center group relative">
    {/* Large Background Step Label */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[80px] font-black text-[#1E3932]/[0.03] select-none group-hover:text-[#C5A059]/[0.05] transition-colors -z-0">
      {num}
    </div>

    <div className="relative mb-12 z-10 flex items-center justify-center w-full">
      {/* Icon Sphere */}
      <div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#1E3932] group-hover:bg-[#1E3932] group-hover:text-[#C5A059] transition-all duration-700 transform group-hover:-translate-y-4 border border-slate-50 group-hover:border-transparent">
        {icon}
      </div>

      {/* Explicit Flow Arrow (Desktop) */}
      {!isLast && (
        <div className="hidden lg:flex absolute left-full top-1/2 -translate-y-1/2 ml-4 w-12 h-12 items-center justify-center text-[#C5A059] group-hover:translate-x-4 transition-transform">
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7" />
          </svg>
        </div>
      )}
      
      {/* Step Badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#1E3932] px-6 py-2 rounded-full shadow-xl border-4 border-[#F9F7F2] transform group-hover:scale-110 transition-transform">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{stepLabel}</span>
      </div>
    </div>

    <div className="relative z-10 px-4 mt-4">
      <h3 className="text-2xl font-black text-[#1E3932] mb-5 tracking-tighter leading-none group-hover:text-[#C5A059] transition-colors">{title}</h3>
      <div className="w-8 h-px bg-[#C5A059]/40 mx-auto mb-6 transition-all group-hover:w-16 group-hover:bg-[#C5A059]"></div>
      <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">{desc}</p>
    </div>

    {/* Directional Arrows (Mobile) */}
    {!isLast && (
      <div className="lg:hidden mt-16 text-[#C5A059]">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </div>
    )}
  </div>
);

const ModernTestimonial: React.FC<{ quote: string; author: string; role: string; image: string }> = ({ quote, author, role, image }) => (
  <div className="flex gap-8 items-start bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 grayscale">
      <img src={image} className="w-full h-full object-cover" alt={author} />
    </div>
    <div>
      <p className="text-xl font-bold text-[#1E3932] leading-tight mb-8">"{quote}"</p>
      <div>
        <span className="block text-sm font-black text-[#1E3932] uppercase tracking-widest">{author}</span>
        <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mt-1">{role}</span>
      </div>
    </div>
  </div>
);

export default Home;