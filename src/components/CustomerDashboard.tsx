import React from 'react'
import { 
  ShoppingBag, Heart, User, Bell, Search, Filter,
  Star, MapPin, Package, CreditCard, MessageCircle
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const CustomerDashboard: React.FC = () => {
  const { profile, signOut } = useAuth()

  const recentOrders = [
    {
      id: '1',
      product: 'Handwoven Banarasi Silk Saree',
      artisan: 'Meera Devi',
      price: 15000,
      status: 'Delivered',
      image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?w=100&h=100',
      date: '2025-01-10'
    },
    {
      id: '2',
      product: 'Blue Pottery Vase',
      artisan: 'Rajesh Kumar',
      price: 2500,
      status: 'In Transit',
      image: 'https://images.pexels.com/photos/1084558/pexels-photo-1084558.jpeg?w=100&h=100',
      date: '2025-01-12'
    }
  ]

  const wishlistItems = [
    {
      id: '1',
      name: 'Madhubani Painting',
      artisan: 'Sunita Jha',
      price: 3500,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?w=100&h=100'
    },
    {
      id: '2',
      name: 'Kashmiri Pashmina Shawl',
      artisan: 'Abdul Rahman',
      price: 8500,
      image: 'https://images.pexels.com/photos/5749137/pexels-photo-5749137.jpeg?w=100&h=100'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text mr-8">कलाकृति</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for crafts..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-96"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-primary-600">
                <Bell className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <span className="font-medium text-gray-900">{profile?.username}</span>
              </div>
              <button
                onClick={signOut}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.username}!
          </h2>
          <p className="text-gray-600">Discover amazing crafts from talented artisans</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  Browse Products
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Heart className="h-5 w-5 mr-3" />
                  My Wishlist
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Package className="h-5 w-5 mr-3" />
                  Order History
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="h-5 w-5 mr-3" />
                  Profile Settings
                </button>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Textiles & Fabrics</a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Pottery & Ceramics</a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Paintings & Art</a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Jewelry</a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Home Decor</a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 py-1">Wooden Crafts</a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Package className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Wishlist Items</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CreditCard className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">₹45,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="card p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{order.product}</h4>
                        <p className="text-sm text-gray-600">by {order.artisan}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{order.price.toLocaleString()}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist */}
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Your Wishlist</h3>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">by {item.artisan}</p>
                      <p className="font-semibold text-primary-600">₹{item.price.toLocaleString()}</p>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard