import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <Services />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

