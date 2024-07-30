import { Inter } from "next/font/google"
import Header from "./components/Header/Header"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Shop",
  description: "My test e-shop",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
      </body>
    </html>
  )
}
