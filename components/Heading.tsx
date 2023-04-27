import React from 'react'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className={`text-3xl font-bold	 ${sourceSans3.className}`}>
      {/*  */}
      {children}
    </div>
  )
}
