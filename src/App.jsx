import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import emailjs from "@emailjs/browser";

export default function App() {
  useEffect(()=>{
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },[]);
  
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
