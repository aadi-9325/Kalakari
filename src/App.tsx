import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ArtisanSpotlight from './components/ArtisanSpotlight';
import AIFeatures from './components/AIFeatures';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import CustomerDashboard from './components/CustomerDashboard';
import ArtisanDashboard from './components/ArtisanDashboard';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <ArtisanSpotlight />
      <AIFeatures />
      <Footer />
    </>
  );
};

const AppContent: React.FC = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/auth" element={!user ? <AuthForm /> : <Navigate to="/dashboard" />} />
      <Route 
        path="/dashboard" 
        element={
          user ? (
            profile?.role === 'customer' ? <CustomerDashboard /> : <ArtisanDashboard />
          ) : (
            <Navigate to="/auth" />
          )
        } 
      />
      <Route 
        path="/" 
        element={user ? <Navigate to="/dashboard" /> : <HomePage />} 
      />
    </Routes>
  );
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;