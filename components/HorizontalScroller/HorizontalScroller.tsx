'use client'
import {useGetProductsQuery} from "../../store/products/products-api"
export default function HorizontalScroller() {

    const {data, isLoading, error} = useGetProductsQuery(3)
    console.log(data);
    

  return (
    <div>HorizontalScroller</div>
  )
}
