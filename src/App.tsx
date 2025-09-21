import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ArtisanSpotlight from './components/ArtisanSpotlight';
import AIFeatures from './components/AIFeatures';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <ArtisanSpotlight />
      <AIFeatures />
      <Footer />
    </div>
  );
}

export default App;