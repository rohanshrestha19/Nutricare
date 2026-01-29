
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99",
      period: "/week",
      desc: "Essential meal planning for individuals.",
      features: [
        "Weekly meal plans",
        "Access to basic categories",
        "Macro-nutrient overview",
        "Mobile app access"
      ],
      cta: "Subscribe Now",
      highlight: false
    },
    {
      name: "Pro Plan",
      price: "$19.99",
      period: "/week",
      desc: "Comprehensive nutrition and clinical guidance.",
      features: [
        "Everything in Basic",
        "Detailed step-by-step recipes",
        "Auto-generated grocery lists",
        "Clinical nutrition insights",
        "Priority AI Chat support"
      ],
      cta: "Start Pro Trial",
      highlight: true
    },
    {
      name: "Family Plan",
      price: "$34.99",
      period: "/week",
      desc: "Healthy living for the whole household.",
      features: [
        "Everything in Pro",
        "Support for up to 5 users",
        "Shared grocery management",
        "Child & Senior specific plans",
        "Custom clinical constraints"
      ],
      cta: "Get Family Plan",
      highlight: false
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-950 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Invest in your longevity with plans designed for any lifestyle or budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 flex flex-col shadow-sm border transition-all duration-300 hover:shadow-xl ${
                plan.highlight ? 'border-emerald-400 scale-105 z-10' : 'border-emerald-50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-emerald-950 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-emerald-900">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/auth"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.highlight
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-100'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            Questions about our plans? <a href="#" className="text-emerald-600 font-bold underline">Contact our billing team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
