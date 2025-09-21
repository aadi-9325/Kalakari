import React from 'react';
import { ArrowRight, Play, Sparkles, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 hero-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Marketplace
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connecting
                <span className="gradient-text"> Traditional Crafts </span>
                with Modern World
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering Indian artisans with AI technology to showcase their heritage crafts 
                to global customers. Breaking language barriers, preserving culture.
              </p>
              <p className="text-lg font-hindi text-gray-700">
                भारतीय कारीगरों को आधुनिक तकनीक से जोड़कर उनकी कला को दुनिया तक पहुंचाना
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Start Selling Your Crafts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">5000+</span>
                </div>
                <p className="text-gray-600">Active Artisans</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-gray-600">Craft Types</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="h-6 w-6 text-primary-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">10+</span>
                </div>
                <p className="text-gray-600">Languages</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?w=600&h=600"
                alt="Indian Artisan at Work"
                className="rounded-2xl shadow-2xl floating-animation"
              />
              
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 floating-animation" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Voice Active</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">हिंदी में बोलें</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 floating-animation" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-600">₹2.5L+</div>
                  <div className="text-xs text-gray-600">Monthly Earnings</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;