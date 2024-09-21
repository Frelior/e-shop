import { categoriesData } from "./categoriesData"

export function companyBlanker(category: string) {
  const categoryFounded = categoriesData[category]
  if (categoryFounded) {
    return categoryFounded
  } else {
    return null
  }
}
