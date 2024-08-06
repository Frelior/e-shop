import Link from "next/link"
import styles from "./NavLink.module.scss"
import { INavLink } from "./NavLinkInterfaces"
import Image from "next/image"

export default function NavLink({ title, href, imageSrc = null }: INavLink) {
  return (
    <Link
      href={href}
      className={styles.link}
    >
      <Image
        src={imageSrc || ""}
        alt={title}
        width={26}
        height={22}
      />
      <p>{title}</p>
    </Link>
  )
}
