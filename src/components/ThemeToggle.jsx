import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import cn from '../lib/utils';

export default function ThemeToggle() {

    const[isDarkMode,setIsDarkMode]=useState(false);

    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme')
        if(storedTheme==='dark'){
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        }
        else{
            localStorage.setItem('theme','light');
            setIsDarkMode(false);
        }
    },[]);
    
    function toggleTheme(){
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-60 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none hover:bg-foreground/10", // Fixed focus outline and added hover effect
                isDarkMode ? "bg-background/80 backdrop-blur-sm" : "bg-background/80 backdrop-blur-sm"
            )}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300'/>
            ):(
                <Moon className='h-6 w-6 text-blue-900'/>
            )}
        </button>
    );
};