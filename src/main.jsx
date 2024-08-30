import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './chart.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import EmployeeList from './components/Employee/EmployeeList.jsx'
import Career from './components/Career/Career.jsx'
import Contact from './components/Contact/Contact.jsx'
import SignIn from './components/SignInAndSignUp/SignIn.jsx'
import Blog from './components/Blog/Blog.jsx'
import TestiMonials from './components/Testimonials/TestiMonials.jsx'
import DigitalMedia from './components/OurWorks/DigitalMedia.jsx'
import TvComDocs from './components/OurWorks/TvComDocs.jsx'
import Audio from './components/OurWorks/Audio.jsx'
import Exhibition from './components/OurWorks/Exhibition.jsx'
import PrintMedia from './components/OurWorks/PrintMedia.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<EmployeeList />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/testimonial' element={<TestiMonials />} />
        <Route path='/ourworks/digitalmedia' element={<DigitalMedia />} />
        <Route path='/ourworks/tvcomdocs' element={<TvComDocs />} />
        <Route path='/ourworks/audio' element={<Audio/>} />
        <Route path='/ourworks/exhibition' element={<Exhibition/>} />
        <Route path='/ourworks/printmedia' element={<PrintMedia/>} />
      </Route>
      <Route path='/signin' element ={<SignIn />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
