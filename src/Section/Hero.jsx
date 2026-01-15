import React from 'react'
import Button from '@/Components/Button'
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
     <div className='absolute inset-0'>
        <img src="/bg.jpg" alt="Image File"  className='w-full h-full object-cover opacity-40'/>
     </div>
     <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/' />

     <div>
        {[...Array(30)].map((_, index) => (
            <div key={index} className='h-1 w-1 absolute rounded-full opacity-40 shadow shadow-white/40'
              style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite` ,
              animationDelay: `${Math.random() * 5}s`

              }}
            />
        ))}
     </div>

     {/*Content*/}
     <div className='container mx-auto px-6 py-32 pb-20 relative z-10'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='inline-flex items-center gap-2 rounded-full px-4 py-2 glass text-sm text-primary'>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />Full Stack • Java Developer 
            </span>
          </div>

          <div className='space-y-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100'>
              Specializing in <br /> <span className='text-primary glow-text'>Spring Boot, REST APIs, databases,</span> <br />
              <span className='font-serif italic font-normal text-white'>and performance-driven web applications.</span>
            </h1>
            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
              Hi, I’m Rishabh — a software engineer specializing in Java and Spring Boot. I build scalable, reliable web applications with a strong focus on clean architecture and performance.
            </p>
          </div>

          <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
            <Button size="default">
              Contact Me <ArrowRight className='w-5 h-5' />
            </Button>

            <Button size="default" className='bg-transparent focus-visible:ring-white hover:border hover:border-white hover:bg-transparent'>
              Download CV <Download />
            </Button>
          </div>

          <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
            <span className='text-sm text-muted-foreground'>Follow Me: </span>
            {[{icon: Linkedin, href:"https://www.linkedin.com/in/rishabh-prasad-singh-88827820b"},
              {icon: Github, href:"https://github.com/rishabhrj06"}
            ].map((social, id) => 
                  <a key={id} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                    {<social.icon className='h-5 w-5' />}
                  </a>)}
          </div>

        </div>

        <div className='relative animate-fade-in animation-delay-300'>
          <div className='relative max-w-md mx-auto'>
            <div className='absolute rounded-3xl animate-pulse inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl'/>
            <div className='relative glass rounded-3xl p-2 glow-border'>
              <img src="/Rishabh.png" alt="Rishabh_Prasad_Singh.img" className='w-full aspect-[4/5] object-cover rounded-2xl border border-border/50'/>
            </div>
          </div>
        </div>

      </div>
     </div>
     

    </section>
  )
}

export default Hero