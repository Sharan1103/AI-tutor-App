
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">L</div>
            <span className="text-xl font-bold">Lumina AI</span>
          </div>
          <p className="max-w-sm leading-relaxed">
            The future of education is personal. Lumina AI empowers learners worldwide to unlock their full potential through intelligent, accessible, and affordable tutoring.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:row justify-between items-center gap-4">
        <p>&copy; 2024 Lumina AI Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
