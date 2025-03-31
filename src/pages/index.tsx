// @/src/pages/index.tsx
"use client";

import React, { useState, useEffect } from 'react';
import About from '@/Components/About';
import Banner from '@/Components/Banner';
import Contact from '@/Components/Contact';
import { Intro } from '@/Components/Intro';
import Asme from '@/Components/Asme';
import Loader from '@/pages/Loader';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already been shown
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded) {
      // If the loader has already been shown, skip it
      setLoading(false);
    } else {
      // Show the loader and set a timer
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true'); // Mark the loader as shown
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return loading ? <Loader /> : (
    <>
      <Intro />
      <Banner />
      <Asme />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;