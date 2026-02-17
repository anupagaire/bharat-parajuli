import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import GunasoBox from './components/GunasoBox';
import Footer from './components/Footer';
import BellIcon from './components/BellIcon';
import VoteAnimation from './components/VoteAnimation';

function App() {
  const [showVoteAnimation, setShowVoteAnimation] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // Track if header should be visible

  const handleBellClick = () => {
    setShowVoteAnimation(true);
    setTimeout(() => {
      setShowVoteAnimation(false);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      // Show header only if scrollY is within Hero section
      setShowHeader(window.scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {showHeader && <Header />}
      <Hero />
      <About />
      <Manifesto />
      <Achievements />
      <Gallery />
      <GunasoBox />
      <Footer />
      <BellIcon onClick={handleBellClick} />
      {showVoteAnimation && <VoteAnimation />}
    </div>
  );
}

export default App;
