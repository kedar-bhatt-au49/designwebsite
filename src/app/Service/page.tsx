import ServicePageMain from '@/app/Components/ServicePageMain'
import OurService from '@/app/Components/OurService'
import Footer from '@/app/Components/Footer'

function Service() {
  return (
    <div className="min-h-screen" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url('/Services-Background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <ServicePageMain/>
      <OurService/>
      <Footer/>
    </div>
  )
}

export default Service
