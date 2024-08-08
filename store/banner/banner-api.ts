import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IBannerItem } from "./banner.types"

export const bannerApi = createApi({
  reducerPath: "api/banner",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://picsum.photos/v2/list?page=2",
  }),
  endpoints: (build) => ({
    getBannerImages: build.query<IBannerItem[], number>({
      query: (limit) => `&limit=${limit}`,
    }),
  }),
})

export const { useGetBannerImagesQuery } = bannerApi
