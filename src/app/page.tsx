import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Comparison from '@/components/sections/Comparison'
import Benefits from '@/components/sections/Benefits'
import Numbers from '@/components/sections/Numbers'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Comparison />
        <Benefits />
        <Numbers />
      </main>
    </>
  )
}
