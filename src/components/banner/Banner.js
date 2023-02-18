import React from 'react'
import "./Banner.css"
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function Banner() {
  return (
    <div className='banner'>
      <h2>Swiper = react.js, core.js, vue.js, anguler.js</h2>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='swiper__image' src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='swiper__image' src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='swiper__image' src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='swiper__image' src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Banner