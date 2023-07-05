import React,{ useContext } from 'react';
import Cardc from './Card';
import useStyles from './styles';
import { Context } from '../../Context/Context';
import Footer from '../../Footer/Footer';
import CardsHome from '../CardsHome/CardsHome';
import CardsHead2 from '../CardsHead2/CardsHome2';

const Home = () => {
  const classes = useStyles();
  const { products } = useContext(Context);

  return (
    <div>
          <Cardc />
          <CardsHome />
        <CardsHead2 />
        <Footer />
    </div>
    
  )
}

export default Home;

