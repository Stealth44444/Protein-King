import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProductDetail from '@/components/sections/ProductDetail'
import PPNPartnership from '@/components/sections/PPNPartnership'
import MachineGallery from '@/components/sections/MachineGallery'
import Comparison from '@/components/sections/Comparison'
import FacilityTypes from '@/components/sections/FacilityTypes'
import Profit from '@/components/sections/Profit'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ApplyForm from '@/components/sections/ApplyForm'

export default function LocalePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProductDetail />
        <PPNPartnership />
        <MachineGallery />
        <Comparison />
        <FacilityTypes />
        <Profit />
        <Process />
        <Testimonials />
        <FAQ />
        <ApplyForm />
      </main>
      <Footer />
    </>
  )
}
