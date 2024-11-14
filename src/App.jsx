import './App.css'
import { AboutSection } from './components/AboutSection'
import { AlcalinaSection } from './components/AlcalinaSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { MembersSection } from './components/MembersSection'



export function App() {


  return (
    <div className="bg-blue-950 h-full w-auto font-inter overflow-x-hidden pt-32">
      <Header/>
      <AlcalinaSection />
      <AboutSection />
      <GallerySection />
      <MembersSection />
      <Footer />
    </div>
  )
}

