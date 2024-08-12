import Image from "next/image"
import "./CategoryButton.scss"
import { ICategory } from "@/store/products/products.types"
import Link from "next/link"

export default function CategoryButton({ category }: { category: ICategory }) {
  return (
    <Link href={`catalog/${category.slug}`}>
      <div className="category-button">
        <Image
          src={category.logoUrl}
          alt={category.name}
          fill
          sizes="(100%, 100%)"
          className="object-cover"
        />
      </div>
    </Link>
  )
}
