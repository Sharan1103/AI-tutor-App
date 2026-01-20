
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Medical Student",
      quote: "Lumina helped me pass my boards with confidence. The way it explains complex biology concepts is just magic.",
      avatar: "https://picsum.photos/64/64?random=11"
    },
    {
      name: "David Chen",
      role: "High School Senior",
      quote: "I used to hate math, but having a tutor that doesn't judge my mistakes changed everything. My grades shot up!",
      avatar: "https://picsum.photos/64/64?random=12"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Loved by Students Everywhere</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
              <img src={r.avatar} alt={r.name} className="w-20 h-20 rounded-full border-4 border-indigo-50" />
              <div>
                <p className="text-lg text-slate-700 italic mb-4">"{r.quote}"</p>
                <h4 className="font-bold text-slate-900">{r.name}</h4>
                <p className="text-slate-500 text-sm">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
