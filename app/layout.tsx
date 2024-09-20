import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "@/styles/_globals.scss"
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
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
