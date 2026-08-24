import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import InstructorsInfo from '../components/InstructorsInfo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <InstructorsInfo />
      <Footer />
    </main>
  )
}