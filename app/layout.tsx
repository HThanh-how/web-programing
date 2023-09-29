import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer' 
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar/>
          {children}
          <Footer/>
        </ChakraProvider>
       

      
        </body>
    </html>
  )
}
