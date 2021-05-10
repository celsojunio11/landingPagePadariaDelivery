import React from 'react';
import Navbar from './../components/Navbar'
import HeroSection from './../components/HeroSection'
import Cards from './../components/Cards'
import Contato from './../components/Form'
import Footer from './../components/Footer'
import { Demostracao } from '../components/Demostracao';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Demostracao />
      <Contato />
      <Footer />
    </>
  );
}

export default Home;