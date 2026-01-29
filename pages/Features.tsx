
import React from 'react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const features = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
      title: "Personalized Recommendations",
      desc: "Our AI-driven engine suggests meals based on your specific clinical conditions and personal health bio-markers."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      title: "Smart Meal Calendars",
      desc: "Interactive weekly and monthly planning tools to keep your nutrition consistent without the stress of decision fatigue."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
      title: "Portion Controlled Recipes",
      desc: "Detailed instructions with exact macro-nutrient breakdowns and calculated portion sizes for every meal."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
      title: "Auto Grocery Lists",
      desc: "Convert your chosen meal plan into a sorted, eco-friendly shopping list instantly. Save time and reduce food waste."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: "Flexible Management",
      desc: "Change plans, skip weeks, or adjust your goals anytime. We scale with your lifestyle and health improvements."
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
      title: "Health-Focused AI Chat",
      desc: "24/7 nutrition assistance to answer questions about ingredients, substitutions, and healthy eating habits."
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 py-16 bg-[#FDF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-950 mb-4">Powerful Features for Better Living</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Everything you need to master your nutrition in one seamless digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-emerald-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your health?</h2>
            <p className="text-emerald-100 mb-10 max-w-xl mx-auto">
              Join thousands of users who have streamlined their health management with NutriCare+.
            </p>
            <Link
              to="/auth"
              className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Try NutriCare+ Today
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full -mr-20 -mt-20 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full -ml-20 -mb-20 blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Features;
