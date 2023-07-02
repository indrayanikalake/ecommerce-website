import React, { useEffect } from 'react';
import './card.css';
import { clothes, cosmetics, laptop, show } from '../../../assets';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';



const Cardc = () => {
  useEffect(() => {
    let index = 0;
    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".dot");

    const changeSlide = () => {
      if (index < 0) {
        index = slides.length - 1;
      }

      if (index > slides.length - 1) {
        index = 0;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }

      slides[index].style.display = "block";
      dots[index].classList.add("active");

      index++;

      setTimeout(changeSlide, 2000);
    };

    changeSlide();
  }, []);

  return (
   
    <div id="slider">
      <div className="slides">
         <video src={ show }  type='video/mp4' autoPlay={true} loop muted width='100%'/>
         <div className='slides_overlay'>
           <h4 className='headtext__cormorant'>The Generics</h4>
           <p className='p__cormorant'>Get our latest Album</p>
           <Button component={NavLink} to='/music' className='custom__button' style={{background:'#f5edd2'}}>Shop Now</Button>
        </div>
    </div>
       <div className="slides">
         <video src={ clothes }  type='video/mp4' autoPlay={true} loop muted width='100%'/>
         <div className='slides_overlay'>
           <h4 className='headtext__cormorant'>New fashion Clothes</h4>
           <p className='p__cormorant'>New and Fresh arrival in store</p>
           <button className='custom__button'>Shop Now</button>
        </div>
    </div>

      <div className="slides">
         <video src={ cosmetics }  type='video/mp4' autoPlay={true} loop muted width='100%'/>
          <div className='slides_overlay'>
               <h4 className='headtext__cormorant'>Cosmetic Products</h4>
               <p className='p__cormorant'>Get top Makeup Brands</p>
               <button className='custom__button' >Shop Now</button>
          </div>
      </div>

      <div className="slides">
        <video src={laptop} type='video/mp4' autoPlay={true} loop muted width="100%" height='80%' />
        <div className='slides_overlay'>
          <h4 className='headtext__cormorant'>Latest Laptops</h4>
          <p className='p__cormorant'>Get latest vesions with discounts</p>
          <button className='custom__button' >Shop Now</button>
         </div>
      </div>

      <div className="slides">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiGTk3Uo9P4O-Ow6tPiCyZuLm3zmgNGHY3Q&usqp=CAU"
         alt='music' width="100%" />
        <div className='slides_overlay'>
          <h4 className='headtext__cormorant'>Music Albums</h4>
          <p className='p__cormorant'>New and Fresh songs in store</p>
          <button className='custom__button' >Shop Now</button>
         </div>
      </div>

      <div className="slides">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIGGjdHhRy0xriPaDz8rON6YBWslkUwfFhw&usqp=CAU"
       alt='waterPannel' width="100%" />
       <div className='slides_overlay'>
          <h4 className='headtext__cormorant'>Water Pannel Wall</h4>
          <p className='p__cormorant'>Get best of the best</p>
          <button className='custom__button' >Shop Now</button>
         </div>
      </div>

      
    <div id="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Cardc;
