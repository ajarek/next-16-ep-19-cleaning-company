import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import AboveNavbar from "@/components/AboveNavbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "sonner"


const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Sprzątanie biur i domów",
  description: "Profesjonalne sprzątanie biur i domów",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl' suppressHydrationWarning>
      <body
        className={`${robotoFont.variable} antialiased`}
      > 
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <AboveNavbar />
        <Navbar />
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
