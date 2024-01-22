import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "../screens/About";
import Contact from '../screens/Contact';
import Projects from '../screens/Projects';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
        </Routes>
    </>
  )
}

export default AllRoutes