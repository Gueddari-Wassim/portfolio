import { Stars } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function StarBackground() {

    const[Star,setStar]=useState([]);
    const[meteors,setMeteors]=useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResise=()=>{
            generateStars();
        }
        window.addEventListener('resze',handleResise)
        return ()=>window.removeEventListener('resize',handleResise)
    },[]);

    function generateStars(){
        const numberOfStars=Math.floor(window.innerWidth*window.innerHeight / 10000);
        const newStars=[]
        for (let i =0 ; i<numberOfStars;i++){
            newStars.push({
                id:i,
                size: Math.random()*3+1,
                x: Math.random()*100,
                y: Math.random()*100,
                opacity: Math.random()* 0.5+0.5,
                animtionDuration: Math.random()*4+2,
            });
        }
        setStar(newStars);
    };
    

    function generateMeteors(){
        const numberOfMeteors= 5
        const newMeteors=[];
        for (let i =0 ; i<numberOfMeteors;i++){
            newMeteors.push({
                id:i,
                size: Math.random()*2+1,
                x: Math.random()*100,
                y: Math.random()*20,
                delay: Math.random()*15,
                animtionDuration: Math.random()*3+3,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {Star.map((Star)=>(
                <div key={Star.id} className='star animate-pulse-subtle'style={{
                    width: Star.size+"px",
                    height: Star.size+"px",
                    left: Star.x+"%",
                    top: Star.y+"%",
                    opacity: Star.opacity,
                    animationDuration:Star.animationDuration+"s",
                }} />
            ))}

            {meteors.map((meteor)=>(
                <div key={meteor.id} className='meteor animate-meteor'style={{
                    width: meteor.size*50+"px",
                    height: meteor.size*2+"px",
                    left: meteor.x+"%",
                    top: meteor.y+"%",
                    animationDelay: meteor.delay,
                    animationDuration:meteor.animationDuration+"s",
                }} />
            ))}
        </div>
    )
}
