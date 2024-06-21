import React from 'react'
import "./cmgt.scss"
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { Suspense} from 'react';
import { Header } from 'Components/Header/Header';
import { Projects } from 'Pages/Projects/Projects';
import { Services } from 'Pages/Services/Services';
import { Skills } from 'Pages/Skills/Skills';
import { Contact } from 'Pages/Contact/Contact';
import { SidebarNavigation } from 'Components/SidebarNavigation/SidebarNavigation';
import { Footer } from 'Components/Footer/Footer';



export const ContentManageMent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  


  return (
    <div className='ContentManageMent'>
        <div className="header-alert-message">
     </div>
      <header className='dashboard-header'>
      <Header onpenSidebar={toggleSidebar} />

     </header>
            <article className='content-management__layout'>
 
           <div className={`content-management__sidebar ${isSidebarOpen  ? 'open' : ""}`}>
           <SidebarNavigation isOpen={isSidebarOpen} Onclose={toggleSidebar} />

           </div>
                <div className='content-management__content'>
            
                <Suspense fallback={<div>loading..</div>}>
                <Routes>
                            <Route path='support-me' element=""/>
                            <Route path='projects' element={<Projects />}/>
                            <Route path="services" element={<Services/>} />
                            <Route path="skills" element={<Skills/>} />
                            <Route path="contact" element={<Contact/>} />
                        </Routes>

                </Suspense>
  
                </div>
            </article>
              
        <Footer/>
    </div> 
  )
}
