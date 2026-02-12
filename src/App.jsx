import { useNavigation, Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import { Footer } from "./layout/Footer"


function App() {
    const navigation = useNavigation();
    return (
        <div className="min-h-screen overflow-x-hidden ">
            {navigation.state === "loading" && <Loader />}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
