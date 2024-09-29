import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Github from './components/github'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"github",
        element:<Github/>
      },
    ]
    
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
<RouterProvider router={router}/>


    {/* <App /> */}
  </React.StrictMode>
)
