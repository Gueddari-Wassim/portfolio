import { AppWindow, AppWindowMac, Briefcase, Code, Database, Server, Smartphone, User } from 'lucide-react'
import React from 'react'

export default function AboutSection() {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Full Stack Developer</h3>
                    <p className='text-muted-foreground'>
                        I specialize in creating responsive,accessible,and performant
                        web/mobile applications using modern technologies.
                    </p>
                    <p className='text-muted-foreground'>
                        I'm passionate about creating elegant solutions to complex
                        problems and im constantly learning new technologies and 
                        techniques to stay at the forefront of the ever-evolving web
                        landscape
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Get In Touch
                        </a>
                        <a href="/myycv.pdf" download="Wassim_Gueddari_CV.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download CV
                        </a>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <AppWindow className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-smeibold text-lg'>FrontEnd Development</h4>
                                <p className='text-muted-foreground'>
                                    Creating responsive websites,web applications,Mobile applications
                                    with modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Database className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-smeibold text-lg'>BackEnd Development</h4>
                                <p className='text-muted-foreground'>
                                    builds reliable, secure, and scalable server-side applications,
                                    APIs, and databases to power modern web and mobile apps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Smartphone className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-smeibold text-lg'>Mobile Development</h4>
                                <p className='text-muted-foreground'>
                                    develops smooth, responsive, and user-friendly applications for
                                    Android using modern frameworks and tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
