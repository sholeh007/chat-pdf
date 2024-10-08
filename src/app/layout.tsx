import Navbar from "@/components/Navbar"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn("min-h-screen antialiased grainy", roboto.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
