import React from 'react';

//Import Components for the landing pages
import Navbar from '../components/navbar/navbar';
import Splash from '../components/landingpage/Splash';
import PackageCards from '../components/landingpage/PackageCards';
import ContactUs from '../components/landingpage/ContactUs';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* @ts-ignore */}
      <Navbar />
      <div className="splash-wrapper">
        <Splash />
      </div>
      <div className="packagecards-wrapper" id="packages">
        <PackageCards />
      </div>
      <div className="contactus-wrapper">
        <ContactUs />
      </div>
    </div>

  )
}

export default LandingPage;