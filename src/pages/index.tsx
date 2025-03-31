// @/src/pages/index.tsx
"use client"

import React from 'react';
import About from '@/Components/About';
import Banner from '@/Components/Banner';
import UpcomingEvents from '@/Components/Upcoming';
import Contact from '@/Components/Contact';
import {Intro} from '@/Components/Intro'
import Asme from '@/Components/Asme';


function HomePage() {
  return (
    <>
      <Intro/>
      <Banner />
      <Asme />
      <UpcomingEvents />
      <About />
      <Contact/>
    </>
  );
}

export default HomePage;