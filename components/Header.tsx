import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JQ</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Japanese Quest
              </h1>
              <p className="text-sm text-gray-500">
                AI-Powered Learning Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;