import './globals.css'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Providers from './GlobalRedux/provider'

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
        <Providers>
          <Header />
          <main className='flex-1'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
