import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle/>
      <StarBackground/>
      <NavBar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}
