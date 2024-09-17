import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
     <Navbar />
     <Hero />
     <Services />
     <Projects />
    </main>
  )
}

export default App
