'use client'
import React from 'react'
import CompanyInfoGrid from '../Components/CompanyInfoGrid'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cool-website-background-01.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/40" />
      </div>

      {/* Content */}
      <Navbar />
      <CompanyInfoGrid />
    </div>
  )
}

export default Page
