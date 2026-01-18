import React from 'react'

const experiences = [
  {
    period: "2024 – Present",
    role: "Java Backend Developer (Fresher)",
    company: "Self Projects & Academic Work",
    description:
      "Developed backend applications using Java and Spring Boot. Built REST APIs, implemented authentication, handled database operations, and followed clean code and MVC architecture principles.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Hibernate",
      "JDBC",
      "REST API"
    ],
    current: true,
  },
  {
    period: "2023 – 2024",
    role: "Full Stack Developer (Student Projects)",
    company: "College Projects",
    description:
      "Designed and developed web applications as part of academic projects. Worked on frontend layouts and backend logic, integrated databases, and implemented CRUD operations.",
    technologies: [
      "Java",
      "Servlet",
      "JSP",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL"
    ],
    current: false,
  },
  {
    period: "2022 – 2023",
    role: "DSA & Problem Solving",
    company: "Self Learning",
    description:
      "Practiced Data Structures and Algorithms extensively using Java. Solved 300+ problems focusing on arrays, strings, hashing, recursion, and basic dynamic programming.",
    technologies: [
      "Java",
      "DSA",
      "LeetCode",
      "Collections Framework"
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className='overflow-hidden py-32 relative'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'/>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>

      <div className='container mx-auto px-6 relative z-18'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Career Journey</span>
          <h2 className='text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Experience that <span className='font-serif italic font-normal text-white'>speaks values.</span></h2>
          <p className='text-sm text-muted-foreground animate-fade-in animation-delay-200'>A timeline of my growth as a developer — from learning core concepts to building practical, scalable applications.</p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>

          <div className='space-y-12'>
            {experiences.map((exp, id) => (
              <div key={id} className='relative grid md:grid-cols-2 gap-8 animate-fade-in' style={{animationDelay: `${(id+1)*150}`}}>

                <div className='absolute left-0 md:left1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {exp.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
                </div>

                <div className={`pl-8 md:pl-0 ${id %2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className='text-sm text-primary font-medium'>{exp.period}</span>
                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                    <p className='text-muted-foreground'>{exp.company}</p>
                    <p className='text-sm text-muted-foreground mt-4'>{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${id % 2 === 0 ? "md:justify-end" : ""}`}>{exp.technologies.map((expTech, idx) => (
                      <span key={idx} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{expTech}</span>
                    ))}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience