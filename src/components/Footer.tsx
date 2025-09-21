import React from 'react';
import { 
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin,
  Heart, Sparkles, Globe, Shield, Award, Users
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  कलाकृति
                </h3>
                <p className="text-sm text-gray-400">Kalakriti</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering Indian artisans with AI technology to showcase their heritage crafts 
                to the world. Preserving culture, creating opportunities.
              </p>
              <p className="text-gray-300 mb-6 font-hindi">
                भारतीय कारीगरों को आधुनिक तकनीक से सशक्त बनाना
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Browse Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Artisans</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Seller</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Textiles & Fabrics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pottery & Ceramics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paintings & Art</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Jewelry</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Decor</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wooden Crafts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Kalakriti Technologies</p>
                    <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <a href="mailto:support@kalakriti.com" className="text-gray-300 hover:text-white transition-colors">
                    support@kalakriti.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                    +91 12345 67890
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-sm"
                  />
                  <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-green-400 mb-2" />
              <span className="text-sm text-gray-300">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-primary-400 mb-2" />
              <span className="text-sm text-gray-300">Verified Artisans</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-secondary-400 mb-2" />
              <span className="text-sm text-gray-300">Global Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-purple-400 mb-2" />
              <span className="text-sm text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Kalakriti. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-red-400">
                <span className="text-sm">Made with</span>
                <Heart className="h-4 w-4 fill-current" />
                <span className="text-sm">in India</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <div className="flex items-center space-x-1 text-primary-400">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Powered by Google Cloud AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;