import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import cn from '../lib/utils'
import { Menu, X } from 'lucide-react';

const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skills", href:"#skills"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#contact"},
]

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10) // Fixed: changed screenY to scrollY
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
        )}>
            <div className='container flex items-center justify-between'>
                <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Wassim </span>Portfolio
                    </span>
                </a>
                
                {/* desktop nav - Fixed spacing and centering */}
                <div className='pr-35 hidden md:flex items-center gap-8'> 
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* mobile nav button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className='md:hidden p-2 text-foreground z-50'
                    aria-label={isMenuOpen ? "close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                {/* mobile menu */}
                <div className={cn(
                    'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
                    'transition-all duration-300 md:hidden',
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className='flex flex-col items-center gap-8'>
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.href}
                                className='text-foreground/80 hover:text-primary transition-colors duration-300 text-xl'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};