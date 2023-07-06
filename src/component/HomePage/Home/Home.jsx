import React from 'react';
import Cardc from './Card';
import Services from '../Services/Services';
import Footer from '../../Footer/Footer';
import CardsHome from '../CardsHome/CardsHome';
import CardsHead2 from '../CardsHead2/CardsHome2';

const Home = () => {

  return (
    <div>
          <Cardc />
          <CardsHome />
        <CardsHead2 />
        <Services />
        <Footer />
    </div>
    
  )
}

export default Home;

