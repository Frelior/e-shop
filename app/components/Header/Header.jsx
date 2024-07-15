"use client"

import { StyledHeader } from "./StyledHeader.js"

export default function Header() {
  return (
    <StyledHeader className="inner">
      <h1>Є-магазин</h1>
      <input
        className="border-2 border-black p-1 rounded-md"
        type="text"
        placeholder="Пошук"
      />
      <div className="flex gap-2">
        <a href="#">Каталог</a>
        <a href="#">Кошик</a>
        <a href="#">Профіль</a>
      </div>
    </StyledHeader>
  )
}
