import React from 'react'
import './achievement.css'
import AchievementCard from './AchievementCard'
import data from './data'
import { Pagination,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>Every Milestone Matters</h5>
      <h2>Achievements</h2>
      <Swiper className="container achievement__container"
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
                <AchievementCard key={index} avatar={avatar} name={name} review={review}/>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Achievement