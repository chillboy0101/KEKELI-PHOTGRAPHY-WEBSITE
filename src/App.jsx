import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <Helmet>
        <title>Professional Photography Portfolio | Stunning Visual Stories</title>
        <meta name="description" content="Explore a curated collection of professional photography including portraits, landscapes, and product photography. Bringing your visual stories to life through the lens." />
      </Helmet>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <Hero />
        <Gallery activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;