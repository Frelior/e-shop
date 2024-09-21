"use client"

import { useState } from "react"
import { companyRanker } from "../../helpers/companyRanker"

export interface InputData {
  engCount: string
  engPrecent: string
  engOffshores: string
  engOffshoresPrecent: string
  employees: string
  revenue: string
  funding: string
  locations: string
}

export default function NewInput() {
  const data: InputData = {
    engCount: "",
    engPrecent: "",
    engOffshores: "",
    engOffshoresPrecent: "",
    employees: "",
    revenue: "",
    funding: "",
    locations: "",
  }

  const [fullInput, setFullInput] = useState("")
  const [category, setCategory] = useState("")
  // const [rank, setRank] = useState("")
  let detectedCategory = ""
  let text = ""
  let rank: any = ""

  if (fullInput || (fullInput && category)) {
    const match = fullInput.match(/^([a-z\s&]+)\t(.+)$/i)
    let dataArray: string[] = []
    if (match) {
      const categoryDetected = match[1].trim()
      detectedCategory = categoryDetected
      dataArray = match[2].trim().split(/\s+/)
    }

    data.engCount = dataArray[0]
    data.engPrecent = dataArray[1]
    data.engOffshores = dataArray[2]
    data.engOffshoresPrecent = dataArray[3]
    data.employees = dataArray[4]
    data.revenue = dataArray[5]
    data.funding = dataArray[6]
    data.locations = dataArray[7]

    rank = companyRanker(data, category)?.rank
    console.log(rank)

    text = `Number of Employees: ${data.employees} with a total of ${
      data.engCount !== "N/A" ? data.engCount : "0"
    } Software Engineers${
      data.engCount === "N/A" || data.engCount === "0"
        ? "."
        : `, and ${
            data.engOffshores === "0" ||
            data.engOffshores === "" ||
            data.engOffshores === "N/A"
              ? "none"
              : `${data.engOffshoresPrecent}`
          } of them are from outsourcing regions.`
    } ${data.revenue === "N/A" ? "" : `Revenue: ${data.revenue}.`}
     ${
       data.funding && data.funding === "N/A"
         ? ""
         : `Total funding: ${data.funding}.`
     } `
  }

  return (
    <div className="flex flex-col gap-4 grow">
      <div>
        <input
          type="text"
          className="border border-black"
          placeholder="Category"
          // value={detectedCategory}
          onChange={(e) => {
            setCategory(e.currentTarget.value.toLowerCase())
          }}
        />
        <h1 className="text-2xl">Rank is: {rank}</h1>
      </div>
      <div className="">
        <h1 className="text-xl">{`Engineers: ${data.engCount}, Engineers %: ${data.engPrecent}, Offshores: ${data.engOffshores}, Offshores %: ${data.engOffshoresPrecent}, Employees: ${data.employees}, Revenue: ${data.revenue}, Funding: ${data.funding}, Locations: ${data.locations}`}</h1>
        <input
          className="w-full border border-black border-1"
          type="text"
          placeholder="Search"
          onKeyDown={(e) => {
            setCategory(detectedCategory.toLowerCase())
            if (e.key === "Enter" || e.key === "Shift") {
              setFullInput(e.currentTarget.value)

              navigator.clipboard.writeText(text)
            }
          }}
        />
      </div>

      <h1 className="text-3xl underline">{text}</h1>
      <h1 className="text-3xl">
        Detected Category: <span className="underline">{detectedCategory}</span>
      </h1>
      <h1 className="text-3xl">
        Detected Rank: <span className="underline text-5xl">{rank}</span>
      </h1>
    </div>
  )
}
