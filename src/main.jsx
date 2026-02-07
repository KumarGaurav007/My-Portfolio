import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Hero from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "",
                element: <Hero/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "projects",
                element: <Projects/>
            },
            {
                path: "experience",
                element: <Experience/>
            },
            {
                path: "testimonials",
                element: <Testimonials/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = {router} />
        
    </StrictMode>,
)
