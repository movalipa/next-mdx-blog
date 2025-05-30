import type { Metadata } from "next"


import "@/app/globals.css"
import { danaFont } from "@/fonts/font"

export const metadata: Metadata = {
  title: "مهماندار",
  description: "مهماندار | مدیریت هتل و مهمانسرا",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${danaFont.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
