import { InputData } from "../components/NewOne/NewOne"
import { companyBlanker } from "./companyBlanker"
import {
  categoriesBelow200High,
  categoriesBelow200Medium,
  categoriesHospitality,
  categoriesRetail,
} from "./categoriesData"

export function companyRanker(data: InputData, category: string) {
  const categoryDetermined = companyBlanker(category)
  const rankNames: { [key: number]: string } = {
    1: "Low",
    2: "Medium",
    3: "High",
  }

  if (categoryDetermined) {
    return {
      rank: categoryDetermined,
      reason: "Category Rank is Determined",
    }
  }

  if (categoriesBelow200High.includes(category)) {
    let rank = 1
    let revenueRank = 1
    let employeesRank = 1

    if (data.revenue !== "<$5M" && data.revenue !== "N/A") {
      const formattedRevenue = +data.revenue
        .replace("$", "")
        .replace(".", "")
        .replace(",", "")
        .slice(0, -1)
      if (formattedRevenue >= 10 && formattedRevenue < 100) {
        revenueRank = 3
      } else if (formattedRevenue >= 100) {
        revenueRank = 2
      }
    }

    if (data.employees !== "N/A" && data.employees !== "0") {
      const formattedEmployees = +data.employees
        .replace("$", "")
        .replace(".", "")
        .replace(",", "")

      if (formattedEmployees >= 50 && formattedEmployees < 200) {
        employeesRank = 3
      } else if (formattedEmployees >= 200) {
        employeesRank = 2
      }
    }

    rank = Math.floor((revenueRank + employeesRank) / 2)

    return {
      rank: rankNames[rank],
      reason: "Ranked acc to revenue and employees",
    }
  }

  if (categoriesBelow200Medium.includes(category)) {
    return {
      category: "below 200 medium",
      reason: "Category Rank is Determined",
    }
  }

  if (categoriesHospitality.includes(category)) {
    return {
      category: "hospitality",
      reason: "Category Rank is Determined",
    }
  }

  if (categoriesRetail.includes(category)) {
    return {
      category: "retail",
      reason: "Category Rank is Determined",
    }
  }
}
