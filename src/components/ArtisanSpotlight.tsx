import React from 'react';
import { Star, MapPin, Award, MessageCircle, Users, TrendingUp } from 'lucide-react';
import { featuredArtisans } from '../data/mockData';

const ArtisanSpotlight: React.FC = () => {
  return (
    <section id="artisans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Master Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the stories behind the crafts. Each artisan brings generations of knowledge and passion to their work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredArtisans.map((artisan) => (
            <div key={artisan.id} className="card overflow-hidden">
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{artisan.name}</h3>
                  <p className="text-sm opacity-90">{artisan.craft}</p>
                </div>
                {artisan.isVerified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                    <Award className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artisan.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{artisan.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {artisan.story}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-primary-600">{artisan.experience}</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-primary-600">{artisan.totalSales}</div>
                    <div className="text-xs text-gray-600">Products Sold</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Languages:</div>
                  <div className="flex flex-wrap gap-2">
                    {artisan.languages.map((language) => (
                      <span
                        key={language}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    <Users className="h-4 w-4 mr-1" />
                    Follow
                  </button>
                  <button className="flex-1 btn-secondary text-sm py-2">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering Artisans with AI
            </h3>
            <p className="text-gray-600">
              See how our AI-powered platform is transforming lives and preserving heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">300% Income Increase</h4>
              <p className="text-sm text-gray-600">
                Average income increase for artisans using our AI tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-sm text-gray-600">
                Connect with customers from 50+ countries worldwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Heritage Preserved</h4>
              <p className="text-sm text-gray-600">
                Traditional techniques documented and shared digitally
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;