import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Investment from './components/Investment';
import { Disclaimer } from './components/Disclaimer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Investment />
      <Disclaimer />
    </div>
  );
}

export default App;