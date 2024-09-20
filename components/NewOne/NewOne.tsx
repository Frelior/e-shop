"use client"

import { useState } from "react"

export default function NewInput() {
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
    data.engCount = dataArray[1]
    data.engPrecent = dataArray[2]
    data.engOffshores = dataArray[3]
    data.engOffshoresPrecent = dataArray[4]
    data.employees = dataArray[0]
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
    } of them are from outsourcing regions. ${
      data.revenue === "N/A" ? "" : `Revenue: ${data.revenue}`
    }`
  }

  return (
    <div className="flex flex-col gap-4 grow">
      <div className="border-2">
        <h1 className="text-xl">Full row NEW</h1>
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
