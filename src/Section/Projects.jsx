import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import Button from '@/Components/Button'

const projects = [
  {
    title: "Web-Recipe",
    description: "something which you need to fill here",
    image: "/bg.jpg",
    tags: ["React", "Spring Boot"],
    link: "#",
    github: "https://github.com/rishabhrj06",
  },
  {
    title: "Web-Recipe",
    description: "something which you need to fill here",
    image: "/bg.jpg",
    tags: ["React", "Spring Boot"],
    link: "#",
    github: "https://github.com/rishabhrj06",
  },
  {
    title: "Web-Recipe",
    description: "something which you need to fill here",
    image: "/bg.jpg",
    tags: ["React", "Spring Boot"],
    link: "#",
    github: "https://github.com/rishabhrj06",
  },
  {
    title: "Web-Recipe",
    description: "something which you need to fill here",
    image: "/bg.jpg",
    tags: ["React", "Spring Boot"],
    link: "#",
    github: "https://github.com/rishabhrj06",
  },
]
const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
      <div className='container mx-auto px-6 relative z-10'>
        
        <div  className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-sm text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
          {/* Projects grid */}
          <div className='grid md:grid-cols-2 gap-8 '>
            {projects.map((project, id) => (
              <div key={id} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1' style={{ animationDelay: `${(id+1)*100}ms`}}>
                  <div className='relative overflow-hidden aspect-video'>
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                    <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>

                    {/* Overlay links */}
                    <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                      <a  target="_blank" rel="noopener noreferrer" href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                        <ArrowUpRight className='w-5 h-5'/>
                      </a>
                      <a  target="_blank" rel="noopener noreferrer" href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                        <Github className='w-5 h-5'/>
                      </a>
                    </div>
                  </div>

                  <div className='p-6 space-y-4 '>
                    <div className='flex items-start justify-between'>
                      <h3 className='text-lg md:text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                      <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:translate-y-1 transition-all'/>
                    </div>
                    <p className='text-muted-foreground text-sm text-start'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 '>{project.tags.map((tag, tagId) => (
                      <span key={tagId} className='p-4 py-1.5 rounded-full bg-surface text-xs md:text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-white transition-all duration-300'>{tag}</span>
                    ))}</div>
                  </div>

              </div>
            ))}
          </div>

        </div>
        
      </div> 
    </section>
  )
}

export default Projects