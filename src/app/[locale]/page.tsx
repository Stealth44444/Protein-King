import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProductDetail from '@/components/sections/ProductDetail'
import MachineGallery from '@/components/sections/MachineGallery'
import Comparison from '@/components/sections/Comparison'
import Benefits from '@/components/sections/Benefits'
import ApplyForm from '@/components/sections/ApplyForm'

export default function LocalePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductDetail />
        <MachineGallery />
        <Comparison />
        <Benefits />
        <ApplyForm />
      </main>
      <Footer />
    </>
  )
}
