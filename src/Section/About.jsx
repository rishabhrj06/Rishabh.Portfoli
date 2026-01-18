import { Code2, Lightbulb, Rocket, User } from 'lucide-react'
import React from 'react'

const highlights = [
  {
    icone: Code2,
    title: "Clean Code",
    description: "we will fill it out later"
  },
  {
    icone: Rocket,
    title: "Performance",
    description: "we will fill it out later"
  },
  {
    icone: User,
    title: "Collaboration",
    description: "we will fill it out later"
  },
  {
    icone: Lightbulb,
    title: "Innovation",
    description: "we will fill it out later"
  }
]
const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>

            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Learning, building, and improving 
              <span className='font-serif italic font-normal text-white'> with every line of code.</span>
            </h2>

            <div className='space-y-4 text-sm md:text-md lg:text-lg text-muted-foreground animate-fade-in animation-delay-200'>
               <p>
                  I’m a motivated software developer with a strong foundation in
                  frontend and backend development. My interest in technology started
                  with curiosity about how web applications work, and it has grown into
                  a passion for building clean, reliable, and user-focused solutions.
                </p>

                <p>
                  I primarily work with <span className="text-white glow-text">React</span> on the
                  frontend and <span className="text-white glow-text">Java & Spring Boot</span> on
                  the backend, creating full-stack applications with REST APIs, database
                  integration, and structured backend logic. I focus on writing
                  maintainable code and designing systems that scale well.
                </p>

                <p>
                  Beyond coding, I enjoy learning new technologies, improving my problem-
                  solving skills, and refining my projects to follow best practices.
                  I’m always looking for opportunities to grow as a developer and
                  contribute to meaningful real-world applications.
                </p>
            </div>

            <div className='glass rounded-2xl px-6 py-3 glow-border animate-fade-in animation-delay-300'>
              <p className=' text-foreground font-medium italic text-md md:text-lg lg:text-xl'>
                “Building scalable backend systems with Spring Boot, REST APIs, and SQL — always learning, always improving.”
              </p>
            </div>

          </div>

          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, id) => (
                <div key={id} className='glass p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(id+1)*100}ms`}}>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                    <item.icone className='w-6 h-6 text-primary'/>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
            ))}
          </div>

        </div>
          
      </div>
      

    </section>
  )
}

export default About