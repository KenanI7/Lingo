import React from 'react';
import Sidebar from '@/components/ui/sidebar';

const FAQPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg" style={{ minWidth: "0", minHeight: "100vh" }}>
        <h1 className="text-3xl font-semibold mb-4 text-center">FAQ</h1>
        <div className="w-full max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Question 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla libero. Fusce vitae quam ac justo tincidunt varius. Aliquam erat volutpat.</p>
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Question 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla libero. Fusce vitae quam ac justo tincidunt varius. Aliquam erat volutpat.</p>
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Question 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla libero. Fusce vitae quam ac justo tincidunt varius. Aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
