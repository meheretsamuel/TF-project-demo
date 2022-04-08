import React from 'react';

//Import Components for the landing pages
import Navbar from '../components/navbar/navbar';
import HeroSection from '../components/tutorials/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour , homeObjFive } from '../components/tutorials/Data';


function Tutorial() {
  return (
    <div className="Tutorial">
      {/* figure out how to pass props into this thing */}
      {/* @ts-ignore */}
      <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
    </div>

  )
}

export default Tutorial;