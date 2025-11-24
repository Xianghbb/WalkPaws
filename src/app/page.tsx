import Header from '@/components/layout/Header'
import HeroSection from '@/components/home/HeroSection'
import FeatureSection from '@/components/home/FeatureSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <main className="w-full">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}