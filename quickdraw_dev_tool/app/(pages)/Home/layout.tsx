'use client'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { useState, useEffect } from 'react';
import MenuBtn from '@/app/Components/NaviagationBar/MenuBtn';
import NavigationBar from '@/app/Components/NaviagationBar/NavigationBar';
import TitleBtn from '@/app/Components/NaviagationBar/TitleBtn';
import TrailingBtns from '@/app/Components/NaviagationBar/TrailingBtns';

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
      <NavigationBar >    
        <MenuBtn />
        <TitleBtn />
        <TrailingBtns />
      </NavigationBar>
        {children}</body>
    </html>
  )
}
