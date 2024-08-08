import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "@/styles/_globals.scss"
import Header from "../components/Header/Header"
import Provider from "../components/Provider/Provider"
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
    <Provider>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          <main className="container">{children}</main>
        </body>
      </html>
    </Provider>
  )
}
