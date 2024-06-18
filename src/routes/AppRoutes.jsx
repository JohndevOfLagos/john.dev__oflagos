import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/home/Home'
import { NotFound } from '../Pages/NotFound/NotFound'
import { ContentManageMent } from '../Components/Layouts/ContentManageMent'


export const AppRoutes = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/Home/*" element={<ContentManageMent />} />
       <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}
