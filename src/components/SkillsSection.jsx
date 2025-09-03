import { JapaneseYen } from 'lucide-react'
import React, { useState } from 'react'
import cn from '../lib/utils';


const skills = [
    //Front
    {name:"HTML/CSS",category:"frontend"},
    {name:"JavaScript",category:"frontend"},
    {name:"React.js",category:"frontend"},
    {name:"TailWind CSS",category:"frontend"},
    {name:"Flutter",category:"frontend"},
    //Back
    {name:"Node.js",category:"Backend"},
    {name:"Express.js",category:"Backend"},
    {name:"MongoDB",category:"Backend"},
    {name:"PostgreSQL",category:"Backend"},
    {name:"Prisma ORM",category:"Backend"},
    {name:"MySQL",category:"Backend"},
    //Tools
    {name:"Git/Github",category:"tools"},
    {name:"Figma",category:"tools"},
    {name:"VScode",category:"tools"},
    {name:"Postman",category:"tools"},
]

const categories=["All","frontend","Backend","tools"];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills=skills.filter(
        (skill)=>activeCategory==="All" || skill.category===activeCategory
    );

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category,key)=>(
                    <button key={key}
                    className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activeCategory===category
                        ?"bg-primary text-primary-foreground"
                        :'bg-secondary/70 text-foreground hover:bd-secondary'
                    )}
                    onClick={()=>setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className='bg-card p-6 rounded-lg shadow-sx card-hover'>
                        <div className='text-center mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}
