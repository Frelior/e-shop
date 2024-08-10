"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar } from "swiper/modules"
import "swiper/css"

import "swiper/css/navigation"
import "swiper/css/scrollbar"
import "./HorizontalScroller.scss"

export default function HorizontalScroller({
  children,
  isLoading,
  title,
  slidesPerView,
  className,
}: {
  children: React.ReactNode
  isLoading: boolean
  title: string
  slidesPerView: number
  className?: string | undefined
}) {
  return (
    <div>
      <h3 className="pb-[2.8rem] text-[3.2rem]">{title}</h3>
      {isLoading && <SwiperSlide>Loading...</SwiperSlide>}
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation={true}
        scrollbar={true}
        className={`${className} categorySwiper`}
        slidesPerView={slidesPerView}
        spaceBetween={16}
      >
        {children}
      </Swiper>
    </div>
  )
}
