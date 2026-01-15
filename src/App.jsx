import React from "react"
import Navbar from "@/Layout/Navbar"
import Hero from "@/Section/Hero.jsx"
import Experience from "@/Section/Experience"
import About from "@/Section/About"
import Projects from "@/Section/Projects"
import Testimonials from "@/Section/Testimonials"
import Contact from "@/Section/Contact"

function App() {
  return (
    <>
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero /> 
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
      
    </>
  )
}

export default App
