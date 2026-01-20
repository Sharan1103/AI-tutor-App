
import React from 'react';

const Statistics: React.FC = () => {
  return (
    <div className="bg-indigo-600 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-extrabold text-white mb-1">98%</p>
          <p className="text-indigo-100 text-sm font-medium">Student Satisfaction</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-white mb-1">1.2M+</p>
          <p className="text-indigo-100 text-sm font-medium">Questions Answered</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-white mb-1">15+</p>
          <p className="text-indigo-100 text-sm font-medium">Subjects Supported</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-white mb-1">2.5x</p>
          <p className="text-indigo-100 text-sm font-medium">Faster Learning Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
