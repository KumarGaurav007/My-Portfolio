import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import Hero from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"
import { Footer } from "./layout/Footer"


function App() {

    return (
        <div className="min-h-screen overflow-x-hidden ">
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
