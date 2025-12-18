'use client'; 

import { useState } from 'react'; 
import Navbar from './components/navbar';
import Hero from './components/hero';
import Categories from './components/categories';
import MenCollection from './components/MenCollection';
import WomenCollection from './components/WomenCollection';
import About from './components/About';
import OffersCollection from './components/OffersCollection';
import Footer from './components/footer'



export default function Home() {
  
  const [view, setView] = useState('home'); 

  return (
    <main>
      <Navbar />
      <Hero />
      
    
      <Categories setView={setView} />
      
     
      <MenCollection setView={setView} />
      <WomenCollection setView={setView} />
      <OffersCollection setView={setView} />
      
      <About />
      <Footer />
    </main>
  );
}