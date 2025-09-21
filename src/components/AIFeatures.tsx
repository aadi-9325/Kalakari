import React from 'react';
import { 
  Mic, BookOpen, TrendingUp, Search, MessageCircle, Archive,
  Sparkles, Zap, Globe, Brain, Camera, BarChart3
} from 'lucide-react';
import { aiFeatures } from '../data/mockData';

const iconMap = {
  Mic,
  BookOpen,
  TrendingUp,
  Search,
  MessageCircle,
  Archive
};

const AIFeatures: React.FC = () => {
  return (
    <section id="ai-features" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Google Cloud AI
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            AI That Understands Indian Culture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced AI technology breaks down barriers and empowers artisans to succeed in the digital marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={feature.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <div className="bg-primary-500/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-primary-300 font-medium">✨ {feature.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Advanced AI Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 rounded-full p-2">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Natural Language Processing</h4>
                    <p className="text-gray-300 text-sm">
                      Understands context in Hindi, Tamil, Bengali, and 10+ regional languages
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-500 rounded-full p-2">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Computer Vision</h4>
                    <p className="text-gray-300 text-sm">
                      Automatically categorizes crafts, assesses quality, and suggests improvements
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Predictive Analytics</h4>
                    <p className="text-gray-300 text-sm">
                      Forecasts demand, optimizes pricing, and identifies market trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">AI Assistant Demo</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-primary-500/20 rounded-lg p-3">
                    <p className="text-sm">🎤 "मैं अपने मिट्टी के बर्तन बेचना चाहता हूं"</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-primary-300">
                      ✨ AI: "Great! I'll help you create a professional listing. 
                      Let me generate descriptions in English and Hindi, suggest optimal pricing, 
                      and set up your pottery shop."
                    </p>
                  </div>
                  <div className="bg-secondary-500/20 rounded-lg p-3">
                    <p className="text-sm">📸 *uploads pottery image*</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-secondary-300">
                      🔍 AI: "I see beautiful terracotta work! Category: Traditional Pottery. 
                      Suggested price: ₹1,200-1,500. Similar items selling well in Delhi, Mumbai."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Craft Business?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of artisans who are already using AI to grow their businesses and preserve their heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              <Zap className="mr-2 h-5 w-5" />
              Start Your AI Journey
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg border border-gray-600 transition-colors flex items-center justify-center">
              <Globe className="mr-2 h-5 w-5" />
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;