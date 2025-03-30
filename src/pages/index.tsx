// @/src/pages/index.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import About from '@/Components/About';
import Banner from '@/Components/Banner';
import Contact from '@/Components/Contact';
import { Intro } from '@/Components/Intro';
import Asme from '@/Components/Asme';
import Loader from '@/pages/Loader';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : (
    <>
      <Navbar />
      <Intro />
      <Banner />
      <Asme />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
