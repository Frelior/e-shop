"use client"
import "./HomePage.scss"
import Banner from "../components/Banner/Banner"
import HorizontalScroller from "../components/HorizontalScroller/HorizontalScroller"
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetRandomProductsQuery,
} from "@/store/products/products-api"
import { ICategory } from "@/store/products/products.types"
import { SwiperSlide } from "swiper/react"
import CategoryButton from "@/components/CategoryButton/CategoryButton"
import ProductItem from "@/components/ProductItem/ProductItem"
import { IProduct } from "../store/products/products.types"

export default function HomePage() {
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery("")
  const { data: randomProducts, isLoading: isLoadingRandomProducts } =
    useGetRandomProductsQuery(10)

  console.log(randomProducts)

  return (
    <>
      <Banner />

      <HorizontalScroller
        isLoading={isLoadingCategories}
        title="Categories"
        slidesPerView={6}
      >
        {categories?.map((category: ICategory) => (
          <SwiperSlide key={category.name}>
            <CategoryButton category={category} />
          </SwiperSlide>
        ))}
      </HorizontalScroller>

      <HorizontalScroller
        isLoading={isLoadingRandomProducts}
        title="Discounts"
        slidesPerView={5.5}
        className="border-t border-t-[2px]"
      >
        {randomProducts?.products.map((product: IProduct) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </HorizontalScroller>
    </>
  )
}
