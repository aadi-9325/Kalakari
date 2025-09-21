import React from 'react'
import { 
  Plus, Package, TrendingUp, Users, Star, Eye, Edit,
  BarChart3, MessageCircle, Camera, Mic, Brain
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const ArtisanDashboard: React.FC = () => {
  const { profile, signOut } = useAuth()

  const products = [
    {
      id: '1',
      name: 'Handwoven Silk Saree',
      price: 15000,
      stock: 5,
      views: 234,
      orders: 12,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?w=100&h=100'
    },
    {
      id: '2',
      name: 'Traditional Pottery Set',
      price: 3500,
      stock: 8,
      views: 156,
      orders: 8,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1084558/pexels-photo-1084558.jpeg?w=100&h=100'
    }
  ]

  const recentOrders = [
    {
      id: '1',
      customer: 'Priya Sharma',
      product: 'Handwoven Silk Saree',
      amount: 15000,
      status: 'Processing',
      date: '2025-01-15'
    },
    {
      id: '2',
      customer: 'Amit Kumar',
      product: 'Traditional Pottery Set',
      amount: 3500,
      status: 'Shipped',
      date: '2025-01-14'
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
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Orders</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Analytics</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-600" />
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
            Welcome, {profile?.username}!
          </h2>
          <p className="text-gray-600">Manage your craft business with AI-powered tools</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Package className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Monthly Sales</p>
                <p className="text-2xl font-bold text-gray-900">₹85,000</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* AI Tools */}
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">AI-Powered Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors">
                  <Mic className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Voice Product</div>
                  <div className="text-sm text-gray-600">Add products by voice</div>
                </button>
                
                <button className="p-4 bg-secondary-50 rounded-lg text-center hover:bg-secondary-100 transition-colors">
                  <Camera className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Smart Photos</div>
                  <div className="text-sm text-gray-600">AI photo enhancement</div>
                </button>
                
                <button className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Price Assistant</div>
                  <div className="text-sm text-gray-600">AI pricing suggestions</div>
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="card p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Your Products</h3>
                <button className="btn-primary flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </button>
              </div>
              
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">₹{product.price.toLocaleString()}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Stock: {product.stock}</span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {product.views}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-400" />
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-primary-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-primary-600">
                        <BarChart3 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <div className="card p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-sm py-2">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Product
                </button>
                <button className="w-full btn-secondary text-sm py-2">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Customer Messages
                </button>
                <button className="w-full btn-secondary text-sm py-2">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </button>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{order.customer}</p>
                        <p className="text-xs text-gray-600">{order.product}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Processing' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-primary-600">
                        ₹{order.amount.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500">{order.date}</span>
                    </div>
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

export default ArtisanDashboard