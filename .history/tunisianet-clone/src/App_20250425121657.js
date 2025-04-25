import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProductSection from './components/ProductSection/ProductSection';
import InfoSections from './components/InfoSection/InfoSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="tunisianet-app">
      <Header />
      <Navigation />
      <main>
        <h1 className="main-title">Climatisation</h1>
        <ProductSection />
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;