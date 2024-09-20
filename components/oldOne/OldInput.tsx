"use client"

import { useState } from "react"

export default function OldInput() {
  const data = {
    engCount: "",
    engPrecent: "",
    engOffshores: "",
    engOffshoresPrecent: "",
    employees: "",
    revenue: "",
    funding: "",
  }

  const [fullInput, setFullInput] = useState("")
  let text = ""

  if (fullInput) {
    const dataArray = fullInput.split(/\s+/)
    data.engCount = dataArray[0]
    data.engPrecent = dataArray[1]
    data.engOffshores = dataArray[2]
    data.engOffshoresPrecent = dataArray[3]
    data.employees = dataArray[4]
    data.revenue = dataArray[5]
    data.funding = dataArray[6]

    text = `Number of Employees: ${data.employees} with a total of ${
      data.engCount
    } Software Engineers, and ${
      data.engOffshores === "0" ||
      data.engOffshores === "" ||
      data.engOffshores === "N/A"
        ? "none"
        : `${data.engOffshoresPrecent}`
    } of them are from outsourcing regions. Revenue: ${data.revenue}`
  }

  return (
    <div className="flex flex-col gap-4 grow">
      <div className="border-2">
        <h1 className="text-xl">Full row</h1>
        <input
          className="w-full border boder-black"
          type="text"
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Alt") {
              setFullInput(e.currentTarget.value)
              navigator.clipboard.writeText(text)
            }
          }}
        />
      </div>
      {/* <h1>{fullInput}</h1> */}

      <p className="text-xl">{text}</p>
    </div>
  )
}
