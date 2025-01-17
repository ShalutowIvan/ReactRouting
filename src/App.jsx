import { useState } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
// import './App.css'


import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Notfoundpage from './pages/Notfoundpage'; 
import Singlepage from './pages/Singlepage'; 
import { Createpost, createPostAction } from './pages/Createpost'; 
// import  from './pages/Createpost'; 
// 

import Editpost from './pages/Editpost'; 

import Layout from './components/Layout'

import { RouterProvider } from "react-router-dom"
import Router from './Router'

function App() {
  

  return (
    
      <RouterProvider router={ Router }></RouterProvider>

        
  )
}

export default App



      // <Routes>
      //   <Route path="/" element={<Layout />}>
      //     <Route index element={<Homepage />} />        
      //     <Route path="posts" element={<Blogpage />} />          
      //     <Route path="posts/:id" element={<Singlepage />} />
          
      //     <Route path="posts/:id/edit" element={<Editpost />} />
      //     <Route path="about" element={<Aboutpage />} />
      //     <Route path="about-us" element={<Navigate to="/about" replace />} />
      //     <Route path="*" element={<Notfoundpage />} />
          
      //     {/*<Route path="posts/new" element={<Createpost />} />*/}
      //     <Route path="posts/new" element={
      //       <Createpost />
      //     } action={createPostAction} />


      //   </Route>
      // </Routes>