
'use client'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import PowerSection from './Components/PowerSection'
import WhyUsSection from './Components/WhyUsSection'
import ChooseUsSection from './Components/WhyChoseus'
import StatsSection from './Components/StatsSection'
import FeatureSection from './Components/FeatureSection'
import ServiceSection from './Components/SectionService'
import Newsletter from './Components/NewsLater'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PowerSection />
      <WhyUsSection />
      <div className="-mt-20">
        <ChooseUsSection />
      </div>
      <div className="-mt-20">
        <StatsSection/>
      </div>
      <div className="-mt-20">
        <FeatureSection />
      </div>
      <div className="-mt-20">
        <ServiceSection />
      </div>   
      <ContactUs/>
      <Newsletter />
      <Footer/>
    </>
  )
}
