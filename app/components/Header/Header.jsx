"use client"

import Image from "next/image"

import "./header.scss"
import { StyledHeader } from "./StyledHeader"

export default function Header() {
  return (
    <div className="header">
      <div className="inner">
        <h1>Є-Shop</h1>

        <input type="text" />

        <div className="nav-links">
          <a
            href="/"
            className="nav-link"
          >
            <Image
              src="/icons/catalog.svg"
              alt="catalog icon"
              width={26}
              height={26}
            />
            <p>Catalog</p>
          </a>
          <a
            href=""
            className="nav-link"
          >
            <Image
              src="/icons/basket.svg"
              alt="basket icon"
              width={26}
              height={26}
            />
            <p>Basket</p>
          </a>
          <a
            href=""
            className="nav-link"
          >
            <Image
              src="/icons/profile.svg"
              alt="profile icon"
              width={26}
              height={26}
            />
            <p>Profile</p>
          </a>
        </div>
      </div>
    </div>
    
  )
}
