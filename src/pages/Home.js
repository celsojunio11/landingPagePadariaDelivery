import React from 'react';
import Navbar from './../components/Navbar'
import HeroSection from './../components/HeroSection'
import Cards from './../components/Cards'
import Form from './../components/Form'
import Footer from './../components/Footer'


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Form />
      <Footer />
    </>
  );
}

export default Home;