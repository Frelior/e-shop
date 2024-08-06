"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Banner.scss"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"

export default function Banner() {
  return (
    <div className={`banner h-[26rem]`}>
      <Swiper
        modules={[Navigation]}
        className={`h-full`}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
