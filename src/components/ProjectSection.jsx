import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects=[
      {
        id:1,
        title:"Homygo - BookingWebApp",
        description:"Full-stack booking web app.Features include user authentication, place listings, image uploads, and a booking system.",
        image:"/projects/bookingWebApp.png",
        tags:["React.js","TailWind CSS","Node.js","Express.js","MongoDB Atlas","REST API","bcryptjs","JWT","cookie-parser","multer"],
        demoUrl:"#",
        githubUrl:"https://github.com/Gueddari-Wassim/Booking-WebApp",
      },
      {
        id:2,
        title:"Employra - Job Portal Web App",
        description:"🚀 Modern Full-stack job portal web app built with PERN stack (PostgreSQL, Express, React, Node.js) - Connecting job seekers with employers through an intuitive platform",
        image:"/projects/Employra.png",
        tags:["React.js","TailWind CSS","Moment.js","Framer Motion","Node.js","Express.js","PostgreSQL","Prisma ORM","JWT","bcryptjs","multer","REST API"],
        demoUrl:"#",
        githubUrl:"https://github.com/Gueddari-Wassim/Employra",
      },
      {
        id:3,
        title:"GeminiClone - AI Chat Interface with Gemini API",
        description:"GeminiClone is a responsive front-end web application that mimics the Gemini AI interface,It integrates with the Gemini API to provide AI-powered responses for various prompts",
        image:"/projects/GeminiClone.png",
        tags:["React.js","TailWind CSS","AIChat","Responsive Design","ChatInterface"],
        demoUrl:"#",
        githubUrl:"https://github.com/Gueddari-Wassim/Gemini-Clone",
      },
]

export default function ProjectSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-muted-foregound mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully 
          crafted with attention to detail, performance, and user experience
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project,key)=>(
          <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
            <div className='h-48 overflow-hidden'>
              <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
            </div>
            <div className='p-6'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag)=>(
                  <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                    {tag}
                  </span>
                ))}
              </div>
            <h3 className='mx-3 text-xl font-semibold mb-3'>{project.title}</h3>
            <p className='text-muted-foreground text-sm mb-4 mx-3'>{project.description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a href={project.demoUrl}
                    target='_blank'
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <ExternalLink size={20}/>
                  </a>
                  <a href={project.githubUrl}
                    target='_blank'
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20}/>
                  </a>
                </div>
            </div>
          </div>
        </div>
        ))}
        </div>
        <div className='text-center mt-12'>
          <a href="https://github.com/Gueddari-Wassim"
            target='_blank'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
}
