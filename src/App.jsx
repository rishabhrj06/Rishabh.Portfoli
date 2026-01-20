import React from "react"
import Navbar from "@/Layout/Navbar"
import Hero from "@/Section/Hero.jsx"
import Experience from "@/Section/Experience"
import About from "@/Section/About"
import Projects from "@/Section/Projects"
import Contact from "@/Section/Contact"
import Footer from "@/Layout/Footer"

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
        <Contact />
      </main>
      <Footer />
    </div>
      
    </>
  )
}

export default App
