import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProductSection from './components/ProductSection/ProductSection';

import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="tunisianet-app">
      <Header />
      <Navigation />
      <main>
        
        <ProductSection />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;