// https://dummyjson.com/products
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct, IProductResponceObject, ICategory } from "./products.types"
import { randomNumber } from "../../helpers/randomNumber"

export const productsApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (build) => ({
    GetProducts: build.query<IProductResponceObject, number>({
      query: (limit) => `?limit=${limit}`,
    }),
    GetRandomProducts: build.query<IProductResponceObject, number>({
      query: (limit) => `?limit=${limit}&skip=${randomNumber(1, 194 - limit)}`,
    }),
    GetCategories: build.query<ICategory[], string>({
      query: (category) => `/categories/${category}`,
      transformResponse: (
        responce: ICategory[] // i dont have images for categories so i have to fetch images with text
      ) =>
        responce.map((category) => {
          const formattedName = category.name.replace(" ", "+")
          return {
            ...category,
            logoUrl: `https://placehold.co/250x250/jpeg?font=roboto&text=${formattedName}`,
          }
        }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetRandomProductsQuery,
} = productsApi
