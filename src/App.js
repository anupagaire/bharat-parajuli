import React, { useState } from 'react';
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

  const handleBellClick = () => {
    setShowVoteAnimation(true);
    setTimeout(() => {
      setShowVoteAnimation(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
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
