import { configureStore } from "@reduxjs/toolkit"
import { bannerApi } from "./banner/banner-api"
import { productsApi } from "./products/products-api"

export const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bannerApi.middleware)
      .concat(productsApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
