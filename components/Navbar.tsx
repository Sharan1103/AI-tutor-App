
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-nav sticky top-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
          L
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-slate-900">Lumina<span className="text-indigo-600">AI</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
        <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
        <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-5 py-2.5 text-slate-600 font-semibold hover:text-indigo-600 transition-all rounded-lg">
          Log In
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-indigo-200 transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
