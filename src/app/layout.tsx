import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/src/components/layout/header"
import Footer from "@/src/components/layout/footer"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Bottum Hotel",
  description: "Book a luxury hotel room in Cambodia.",
  keywords: ["Bottum Hotel", "Hotel Booking", "Luxury Stay", "Team", "About Us", "Travel"],
  authors: [{ name: "Thouern Chanthat", url: "https://www.aicambodia.com/wp-content/uploads/2023/05/A-group-of-Angkor-balloons-flying-over-a-lake-with-Angkor-Wat-Temple-background-400x400.jpg" }],
  creator: "Bottum Hotel Team",
  openGraph: {
    title: "Stay at Bottum Hotel – Luxury & Comfort in Cambodia",
    description: "Enjoy 5-star experience with clean rooms and quality service.",
    url: "https://imgs.search.brave.com/jQ6k8xf2EhS3Ua5Q2osqTvddTj0g20qsZgpnov6BsNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXRh/bGVudHVtLm5ldC91/cGxvYWQvMDE2L3Ux/NjIxLzAvMC8wMDBk/NWFjYS53ZWJw",
    siteName: "MyHotel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://imgs.search.brave.com/jQ6k8xf2EhS3Ua5Q2osqTvddTj0g20qsZgpnov6BsNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXRh/bGVudHVtLm5ldC91/cGxvYWQvMDE2L3Ux/NjIxLzAvMC8wMDBk/NWFjYS53ZWJw",
        width: 1200,
        height: 630,
      },
      {
        url: "https://imgs.search.brave.com/jQ6k8xf2EhS3Ua5Q2osqTvddTj0g20qsZgpnov6BsNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXRh/bGVudHVtLm5ldC91/cGxvYWQvMDE2L3Ux/NjIxLzAvMC8wMDBk/NWFjYS53ZWJw",
        width: 1200,
        height: 630,
      },
    ],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
