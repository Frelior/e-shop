import Link from "next/link"
import styles from "./Header.module.scss"
import NavLink from "../NavLink/NavLink"

const Header = () => {
  return (
    <header className={`${styles.outer}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={`${styles.logo}`}
        >
          E-Shop
        </Link>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            placeholder="Search"
          />
        </div>
        <nav>
          <NavLink
            href="/catalog"
            title="Catalog"
            imageSrc="/icons/icon_catalog.svg"
          />
          <NavLink
            href="/cart"
            title="Cart"
            imageSrc="/icons/icon_cart.svg"
          />
          <NavLink
            href="/profile"
            title="Profile"
            imageSrc="/icons/icon_profile.svg"
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
