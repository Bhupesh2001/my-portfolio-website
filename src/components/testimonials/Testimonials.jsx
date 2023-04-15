import React from 'react'
import './testimonials.css'
import TestimonialCard from './TestimonialCard'
import data from './data'
import { Pagination,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true,dynamicBullets: true}}
      navigation={true}
      >
        {
          data.map(({ avatar, name, review,scale }, index) => {
            return (
              <SwiperSlide>
                <TestimonialCard key={index} avatar={avatar} name={name} review={review}/>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials