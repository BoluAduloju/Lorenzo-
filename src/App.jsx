import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";




const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
     <Navbar />
     <Hero />
     <Services />
     <Projects />
     <About />
     <Reviews />
     < Contacts />
     <Footer />
    </main>
  )
}

export default App
