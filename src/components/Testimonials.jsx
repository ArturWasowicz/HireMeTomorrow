// import Testimonials Image.........
import TestiImage from '../assets/testimonialImage.png'

// import Testimonials data.........
import { testimonialssData } from '../data/data'

// Import Swiper......................
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// import React Icons.........
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";



export default function Testimonials() {
  return (
    <section id='Testimonials' >
      <div className="container testimonials-container">
        <div className="testimonial-image">
          <img src={TestiImage} alt="" />
        </div>

        {/* ..............Swiper Slider........... */}
        <Swiper
          className='swiperWrapper'
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation,]}
          navigation={
            {
              prevEl: '.button-prev-slide',
              nextEl: '.button-next-slide'
            }
          }
        >
          <div className="title-content">
            <h3>Testimonials</h3>
            {/* ............Slider Button............ */}
            <div className="slider-button">
              <button className='button-prev-slide' ><GoArrowLeft /></button>
              <button className='button-next-slide' ><GoArrowRight /></button>
            </div>
          </div>

          {
            testimonialssData.map(({ text, clintName, profession }, index) => {
              return (
                <SwiperSlide key={index} className='slide'>
                  <p className="testiText">{text}</p>
                  <div className="line"></div>
                  <div className="info">
                    <h5>{clintName}</h5>
                    <small>{profession}</small>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
