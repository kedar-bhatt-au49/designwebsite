import ServicePageMain from '@/app/Components/ServicePageMain'
import OurService from '@/app/Components/OurService'
import Footer from '@/app/Components/Footer'

function Service() {
  return (
    <div className="min-h-screen" style={{
      background: `linear-gradient(to top right,rgb(175, 177, 180), #ffffff,rgb(130, 131, 132))`
    }}>
      <ServicePageMain/>
      <OurService/>
      <Footer/>
    </div>
  )
}

export default Service
