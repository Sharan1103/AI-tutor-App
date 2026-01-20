
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Adaptive Learning Paths",
      description: "Our AI analyzes your strengths and weaknesses to create a study plan that adjusts in real-time.",
      icon: "🎯",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "24/7 Interactive Q&A",
      description: "Never get stuck again. Our AI tutor is available day and night to answer complex questions instantly.",
      icon: "💬",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Detailed Progress Analytics",
      description: "Visualize your journey with deep insights into your learning habits and retention rates.",
      icon: "📈",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Lumina AI?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Traditional education is one-size-fits-all. Lumina is built specifically for you, providing the support you need, when you need it.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
