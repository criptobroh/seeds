import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { ProblemSection } from './components/problem/ProblemSection'
import { SolutionSection } from './components/solution/SolutionSection'
import { MethodologySection } from './components/methodology/MethodologySection'
import { PhasesSection } from './components/phases/PhasesSection'
import { ServicesSection } from './components/services/ServicesSection'
import { CTASection } from './components/cta/CTASection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <MethodologySection />
        <PhasesSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
