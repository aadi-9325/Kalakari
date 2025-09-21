import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Mic, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);

  const toggleVoiceSearch = () => {
    setIsVoiceSearch(!isVoiceSearch);
    if (!isVoiceSearch) {
      setTimeout(() => setIsVoiceSearch(false), 3000);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">
                कलाकृति
              </h1>
              <p className="text-xs text-gray-600">Kalakriti</p>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search for crafts, artisans, or regions..."
              />
              <button
                onClick={toggleVoiceSearch}
                className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                  isVoiceSearch ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-primary-500'
                }`}
              >
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-gray-700 hover:text-primary-600 font-medium">
              Categories
            </a>
            <a href="#artisans" className="text-gray-700 hover:text-primary-600 font-medium">
              Artisans
            </a>
            <a href="#ai-features" className="text-gray-700 hover:text-primary-600 font-medium">
              AI Features
            </a>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-primary-600">
                <Globe className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-primary-600 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="btn-primary">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="relative mb-4">
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <a href="#categories" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Categories
              </a>
              <a href="#artisans" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Artisans
              </a>
              <a href="#ai-features" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                AI Features
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <button className="btn-secondary text-sm">Sign In</button>
                <button className="text-gray-700">
                  <ShoppingCart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;