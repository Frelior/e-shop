"use client"
import { useEffect } from "react"

export default function ProductPage({ params, searchParams }: any) {
  useEffect(() => {
    console.log(params, searchParams)
  })

  return <div>product</div>
}
