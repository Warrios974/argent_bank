import './globals.css'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
  return (
    <html lang="en">
      <body className='h-screen flex flex-col text-text-primary'>
        <Header />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
