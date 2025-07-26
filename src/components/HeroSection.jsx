import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight '>
                    <span className='opacity-0 animate-fade-in'> Hi I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Wassim</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Gueddari</span>
                </h1>
            </div>
            <p className='mt-2 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                Driven and motivated computer systems engineering student with a strong interest in software development,
                including web and mobile applications. Eager to explore the latest technologies and continuously expand my technical skill set.
                I enjoy solving complex problems through coding and have a solid foundation in programming, ready to contribute to impactful projects
            </p>
            <div className='pt-5 opacity-0 animate-fade-in-delay-4'>
                <a href="#projects" className='cosmic-button'>
                    View My Work
                </a>
            </div>
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'>scroll</span>
            <ArrowDown className='h-5 w-5 text-primary'/>
        </div>
    </section>
  )
}
