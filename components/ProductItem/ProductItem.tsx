import { IProduct } from "@/store/products/products.types"
import "./ProductItem.scss"
import Image from "next/image"
import Button from "../Button/Button"
import Link from "next/link"
export default function ProductItem({
  product,
}: {
  product: IProduct | undefined
}) {
  const discountPrice = (
    product!.price *
    (1 - product!.discountPercentage / 100)
  ).toFixed(2)

  return (
    <div className="product-item">
      <div className="image-wrapper border-2 border-white rounded-3xl ">
        <Image
          src={product!.thumbnail}
          alt={product!.title}
          fill
          sizes="(100%, 100%)"
          className="object-cover "
        />
      </div>

      <div className="product-info">
        <Link
          href={""}
          className="product-title line-clamp-2"
        >
          {product!.title}
        </Link>

        <div className="product-price">
          <p className="price-discount">{discountPrice}$</p>
          <small className="price-original">{product!.price}$</small>
        </div>
        <div className="availability">
          <p className={product?.availabilityStatus.replaceAll(" ", "-")}>
            {product?.availabilityStatus}
          </p>
          <button className="favorite"></button>
        </div>
      </div>
      <Button title="Add to cart" />
    </div>
  )
}
