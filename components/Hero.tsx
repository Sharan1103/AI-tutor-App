
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-20 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm font-semibold">
            ✨ Intelligence that scales with you
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Master Any Subject <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">With Your AI Tutor</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Lumina provides personalized, 1-on-1 tutoring sessions powered by the world's most advanced AI. Learn faster, retain more, and achieve your academic goals effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all transform hover:-translate-y-1">
              Start Learning for Free
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Watch Demo
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/32/32?random=${i}`} alt="user" />
              ))}
            </div>
            <span>Joined by 50,000+ students worldwide</span>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200 border-8 border-white">
            <img src="https://picsum.photos/800/600?education" alt="AI Tutoring Experience" className="w-full object-cover" />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-1"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-50 -z-1"></div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-50 animate-bounce hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
              <p className="text-sm font-bold">Progress +25%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
