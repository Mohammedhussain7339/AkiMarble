import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';
import Productpage from './Productpage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


function Homepage() {
  return (
    <>
    <div className="firsthome">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
      </Swiper>
      </div>
      <Productpage></Productpage>
      <div className="secondhome">
        <div className="box"></div>
        <div className="box box1"> 
          <div className="subbox"></div>
          <div className="subbox"></div>
          <div className="subbox"></div>
          <div className="subbox"></div>
        </div>
      </div>
      <div className="categoriesContainer">
        <h1>Shop By Categories</h1>
        <div className="categoriesbox">
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
          <div className="subcatbox"><img src="https://vogal-demo.myshopify.com/cdn/shop/files/headphones.jpg?v=1673514647" alt="" /></div>
        </div>
        <div className="extraContainer">
          <div className="extrabox">
              <img src="https://vogal-demo.myshopify.com/cdn/shop/files/soundbar.jpg?v=1673513742" alt="" />
          </div>
          <div className="extrabox">
              <img src="https://vogal-demo.myshopify.com/cdn/shop/files/soundbar.jpg?v=1673513742" alt="" />
          </div>
        </div>
        <div>        
          <h1>Latest Blog</h1>
          <div className="blogContainer">
          <div className="blogbox">
          <img src="https://vogal-demo.myshopify.com/cdn/shop/files/soundbar.jpg?v=1673513742" alt="" />
          <div>
            <b>Lorem, ipsum dolor.</b>
          </div>
          </div>
          <div className="blogbox"></div>
          <div className="blogbox"></div>
        </div>
        </div>

      <Footer></Footer>
      </div>
    </>

  )
}

export default Homepage
