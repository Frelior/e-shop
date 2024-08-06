import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "@/styles/_globals.scss"
import Header from "../components/Header/Header"

const roboto = Roboto({ weight: ["400", "700", "300"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-Shop",
  description: "My Next.js app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
