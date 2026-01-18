import React from 'react'

const Skills = () => {

  const techStack = [
  "Java",
  "Spring Boot",
  "Spring Framework",
  "Hibernate",
  "REST API",
  "MySQL",
  "Spring Security",
  "JWT Authentication",
  "React",
  "Tailwind CSS",
  "Maven",
  "Git",
  "GitHub",
  "MicroServices",
  "Docker",
  "Jenkins",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Postman"
];

  return (
    <div className='mt-20 animate-fade-in animation-delay-600'>
      <h2 className='text-sm text-muted-foreground mb-6 text-center'>Technologies I Work With</h2>
      <div className='relative whitespace-nowrap overflow-hidden'>
        <div className='flex gap-3 animate-marquee'>
          {[...techStack, ...techStack].map((skill, id) => 
            <div key={id} className='flex-shrink-0 px-8 py-4'>
              <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                {skill}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Skills