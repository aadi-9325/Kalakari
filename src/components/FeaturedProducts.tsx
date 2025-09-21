import React from 'react';
import { Star, Heart, ShoppingCart, MapPin, Award, Leaf } from 'lucide-react';
import { featuredProducts, categories } from '../data/mockData';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Traditional Crafts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover authentic handmade products from skilled artisans across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="card p-4 text-center hover:scale-105 transition-transform duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-hindi mb-2">
                    {category.nameHindi}
                  </p>
                  <p className="text-xs text-primary-600">
                    {category.productCount} products
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View All Products →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  {product.isAIGenerated && (
                    <div className="absolute bottom-4 left-4 bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      AI Enhanced
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {product.location}
                    </span>
                    {product.sustainabilityScore && (
                      <div className="flex items-center text-green-600 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        {product.sustainabilityScore}%
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-hindi mb-2">
                    {product.nameHindi}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">by {product.artisan}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;