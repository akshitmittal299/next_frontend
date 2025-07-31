import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NextShop - Your Premium Ecommerce Destination",
  description:
    "Discover premium products at unbeatable prices. Shop fashion, electronics, home decor and more with free shipping and easy returns.",
  keywords: "ecommerce, online shopping, fashion, electronics, home decor, deals",
  authors: [{ name: "NextShop Team" }],
  openGraph: {
    title: "NextShop - Your Premium Ecommerce Destination",
    description: "Discover premium products at unbeatable prices with free shipping.",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
