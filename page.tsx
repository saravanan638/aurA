import Header from './components/Header'
import EventContent from './components/EventContent'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-white relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Particles />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <Header />
        <EventContent />
        <Footer />
      </div>
    </main>
  )
}

