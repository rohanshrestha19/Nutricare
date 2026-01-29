
import React from 'react';

const MealPlans: React.FC = () => {
  const categories = [
    {
      title: "Disease-Specific",
      tagline: "Nutrition as Medicine",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      items: ["Diabetes Control", "Heart-Healthy", "Kidney Care", "PCOS Balance", "Gut Health"],
      theme: "bg-[#1E3932] text-white",
      btn: "bg-[#C5A059] text-[#1E3932]"
    },
    {
      title: "Fitness & Performance",
      tagline: "Fuel Your Potential",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      items: ["Weight Mastery", "Muscle Forge", "Rapid Fat Loss", "Endurance Pro", "Mindful Flow"],
      theme: "bg-white text-[#1E3932]",
      btn: "bg-[#1E3932] text-white"
    },
    {
      title: "Conscious Lifestyle",
      tagline: "Values on Your Plate",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
      items: ["Hyper-Vegan", "Senior Vitality", "Gluten-Free High", "Immunity Boost"],
      theme: "bg-[#C5A059] text-white",
      btn: "bg-[#1E3932] text-white"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em]">The Catalog</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#1E3932] tracking-tighter mt-6 leading-none">
            Find Your<br />Clinical Blueprint.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col rounded-[3rem] p-10 shadow-2xl transition-all duration-500 hover:-translate-y-4 ${cat.theme} ${idx === 1 ? 'lg:-translate-y-12' : ''}`}
            >
              <div className="flex-grow">
                <span className="inline-block px-3 py-1 rounded-full border border-current/20 text-[9px] font-black uppercase tracking-widest mb-6">
                  Tier {idx + 1}
                </span>
                <h2 className="text-4xl font-black tracking-tighter mb-2 leading-none">{cat.title}</h2>
                <p className="opacity-70 text-sm font-bold uppercase tracking-widest italic mb-10">{cat.tagline}</p>
                
                <div className="mb-12 space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 group cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30 group-hover:opacity-100 transition-all"></div>
                      <span className="text-sm font-bold tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-8">
                  <img src={cat.image} className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700" alt={cat.title} />
                </div>
                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all active:scale-95 ${cat.btn}`}>
                  Explore Plans
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Text Decoration */}
      <div className="absolute top-[40%] right-[-10%] text-[20vw] font-black text-slate-100/50 select-none -z-10 pointer-events-none">
        HEALTH
      </div>
    </div>
  );
};

export default MealPlans;
