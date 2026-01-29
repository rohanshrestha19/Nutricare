
import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      category: "Clinical Breakthrough",
      date: "Oct 24, 2024",
      title: "New Study Confirms AI-Adjusted Diets Reduce Glycemic Variability by 40%",
      desc: "Our recent partnership with the Global Endocrine Center has produced groundbreaking data on real-time nutrient modulation.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Company Update",
      date: "Sep 12, 2024",
      title: "NutriCare+ Expands Clinical Board with Renowned Longevity Experts",
      desc: "We are proud to welcome Dr. Aris Thorne and Prof. Elena Vance to guide our next generation of anti-inflammatory protocols.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Industry Award",
      date: "Aug 05, 2024",
      title: "Named 'Digital Health Solution of the Year' at HealthTech Summit 2024",
      desc: "Recognition of our commitment to bridging the gap between clinical advice and the culinary experience.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Feature Launch",
      date: "Jul 19, 2024",
      title: "Introducing 'Sync-Bio': Real-time Integration with Wearable Health Data",
      desc: "Your meal plan now adjusts dynamically based on your sleep quality, activity levels, and resting heart rate.",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 py-32 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">The Bulletin</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1E3932] tracking-tighter leading-none mb-4">
              News & <br />
              <span className="text-[#C5A059] italic font-serif font-normal">Insights.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium">Tracking the evolution of precision nutrition and our global impact.</p>
          </div>
          <div className="hidden md:block">
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#1E3932] rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Newsletter</span>
                <span className="block text-sm font-bold text-[#1E3932]">Join 50k+ Subscribers</span>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsItems.map((news, idx) => (
            <NewsCard key={idx} {...news} />
          ))}
        </div>

        {/* Press Contact */}
        <div className="mt-32 p-12 lg:p-20 bg-[#1E3932] rounded-[4rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter mb-6">Press & Media.</h2>
            <p className="text-white/70 max-w-xl mx-auto font-medium mb-10">
              For media inquiries, interview requests, or high-resolution clinical data assets, please reach out to our communications team.
            </p>
            <a href="mailto:press@nutricare.bio" className="inline-block px-12 py-5 bg-[#C5A059] text-[#1E3932] rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl">
              Contact Media Desk
            </a>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCard: React.FC<{ category: string; date: string; title: string; desc: string; image: string }> = ({ category, date, title, desc, image }) => (
  <div className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="relative h-64 overflow-hidden">
      <img src={image} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={title} />
      <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-[#1E3932] uppercase tracking-widest">
        {category}
      </div>
    </div>
    <div className="p-10">
      <span className="block text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] mb-4">{date}</span>
      <h3 className="text-2xl font-black text-[#1E3932] mb-6 leading-tight tracking-tight group-hover:text-[#C5A059] transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{desc}</p>
      <button className="text-[10px] font-black uppercase tracking-widest text-[#1E3932] border-b-2 border-[#1E3932]/10 pb-1 group-hover:border-[#C5A059] transition-all">
        Read Full Release
      </button>
    </div>
  </div>
);

export default News;
