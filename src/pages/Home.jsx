import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import RightTab from '../components/RightTab';
import Universities from '../components/Universities';
import EnquireNow from '../components/EnquireNow';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import PopupModal from '../components/PopupModal';
import FAQ from '../components/FAQ';
import AboutDDG from '../components/AboutDDG';
import OurTeam from '../components/OurTeam';
import SEO from '../components/SEO';

function Home() {
  return (
    <div className="bg-gray-50 font-sans relative">
      <SEO 
        title="Study MBBS in Russia" 
        description="Your trusted partner in global medical education. We guide aspiring doctors to the best NMC & WHO recognized universities in Russia with 100% transparency."
        keywords="MBBS in Russia, Study Abroad, Medical Universities Russia, NMC approved universities"
      />
      <Navbar />
      <Hero />
      <Ticker />
      <RightTab />
      <Universities />
      <AboutDDG />
      <FAQ />
      <OurTeam />
      <EnquireNow />
      <Footer />
      <FloatingButtons />
      <PopupModal />
    </div>
  );
}

export default Home;