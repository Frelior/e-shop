"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "./Banner.scss"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation, Autoplay } from "swiper/modules"
import { useGetBannerImagesQuery } from "@/store/banner/banner-api"
import { IBannerItem } from "@/store/banner/banner.types"

export default function Banner() {
  const { data, isLoading, error } = useGetBannerImagesQuery(3)
  console.log(data);
  

  return (
    <div className={`banner h-[26rem]`}>
      <Swiper
        modules={[Navigation, Autoplay]}
        className={`h-full`}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={true}
        autoplay={{ delay: 6000 }}
      >
        {isLoading && <SwiperSlide>Loading...</SwiperSlide>}
        {data?.map((bannerItem: IBannerItem) => (
          <SwiperSlide key={bannerItem.id}>
            <Image
              src={bannerItem.download_url}
              alt={bannerItem.author}
              fill
              className="object-cover"
              priority
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
