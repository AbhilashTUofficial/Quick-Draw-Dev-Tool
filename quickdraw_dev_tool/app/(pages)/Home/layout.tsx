'use client'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isdark, setIsdark] = useState(true);
  useEffect(() => {
    console.log("called"+localStorage.getItem('isdark'))
  }, [isdark]);

    return (
    <html lang="en" data-theme={isdark?'dark':'light'} >
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
