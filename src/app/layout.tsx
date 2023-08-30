import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aamani Machani - Profolio Website',
  description: 'Frontend developer with 2+ years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} pt-[90px]`}>
          <div>
            <div className="fixed w-full z-50 h-auto top-0 left-0">
              <NavBar />
              <SideBar />
            </div>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
