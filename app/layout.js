import { Inter } from 'next/font/google'
import style from './styles.module.css'
import '../styles/global.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const interfont = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interfont.className}>
        <head />
      <body className={style.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
