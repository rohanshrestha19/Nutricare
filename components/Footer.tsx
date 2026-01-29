
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-emerald-950 font-black text-2xl">+</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">NutriCare</span>
            </div>
            <p className="text-emerald-200/50 text-sm font-medium leading-relaxed mb-8">
              Architecting clinical-grade nutrition protocols mapped to your unique metabolic fingerprint. Precision health at your table.
            </p>
            <div className="flex space-x-4">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center text-[10px] font-black text-emerald-500 hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-400">Platform</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/story" className="text-emerald-200/60 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/news" className="text-emerald-200/60 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/meal-plans" className="text-emerald-200/60 hover:text-white transition-colors">Meal Plans</Link></li>
              <li><Link to="/features" className="text-emerald-200/60 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-emerald-200/60 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-400">Legal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-emerald-200/60 hover:text-white transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="text-emerald-200/60 hover:text-white transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="text-emerald-200/60 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-400">Reach Us</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="text-emerald-200/60 leading-relaxed italic">123 Wellness Blvd,<br />Suite 500, Health City</li>
              <li><a href="mailto:concierge@nutricare.bio" className="text-emerald-200/60 hover:text-white transition-colors">concierge@nutricare.bio</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-12 text-center">
          <p className="text-[10px] text-emerald-500/30 italic mb-8 max-w-2xl mx-auto uppercase tracking-widest">
            NutriCare+ provides clinical guidance and is not a substitute for professional medical advice. Always consult your physician.
          </p>
          <p className="text-xs text-emerald-500/40 font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} NutriCare+ Bio-Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
