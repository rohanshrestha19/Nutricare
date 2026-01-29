
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="animate-in fade-in duration-1000 min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left: Branding & Visual */}
      <div className="lg:w-1/2 relative bg-[#1E3932] p-12 flex flex-col justify-between overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 text-white group">
            <div className="w-12 h-12 bg-[#C5A059] rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-[#1E3932] font-black text-2xl">+</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">NutriCare</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
            Your Health,<br />
            <span className="text-[#C5A059]">Refined.</span>
          </h2>
          <p className="text-white/60 font-medium leading-relaxed">
            Clinical-grade nutrition isn't just about data. It's about a lifestyle of discipline and elegance. Welcome to the sanctuary of smart eating.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right: Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-[#F9F7F2]">
        <div className="w-full max-w-md animate-in slide-in-from-right duration-500">
          <div className="mb-12">
            <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em]">Secure Portal</span>
            <h3 className="text-4xl font-black text-[#1E3932] tracking-tighter mt-4">
              {isLogin ? 'Sign In.' : 'Create Account.'}
            </h3>
            <p className="mt-4 text-slate-500 text-sm font-medium">
              {isLogin ? "Don't have an account yet?" : "Already part of the movement?"}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#1E3932] font-black hover:underline"
              >
                {isLogin ? 'Join NutriCare+' : 'Sign In'}
              </button>
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-0 transition-all font-bold placeholder:text-slate-300"
                  placeholder="Alexander Knight"
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input
                type="email"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-0 transition-all font-bold placeholder:text-slate-300"
                placeholder="knight@wellness.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
              <input
                type="password"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-0 transition-all font-bold placeholder:text-slate-300"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#1E3932] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-[#2a4d44] transition-all transform hover:scale-[1.02] active:scale-95"
            >
              {isLogin ? 'Access Portal' : 'Register Now'}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                HIPAA Protected
              </span>
              <span>v2.4 Gold Status</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
