import Footer from './components/standards/footer'
import Header from './components/standards/header'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dm = DM_Sans({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata = {
  title: 'PAN',
  description: 'PAN: The coin that never grows!',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dm.className}>
      <body>
        <Header />
        <div className=''>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
