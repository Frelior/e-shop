// https://dummyjson.com/products
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct, IProductResponceObject } from "./products.types"

export const productsApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (build) => ({
    GetProducts: build.query<IProductResponceObject, number>({
      query: (limit) => `?limit=${limit}`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
