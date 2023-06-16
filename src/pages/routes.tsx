import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Projects } from "./Projects"

const AppRoutes = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={ <Home/> }/>

                <Route path="/about" element={ <About/> }/>

                <Route path="/projects" element={ <Projects/> }/>

            </Routes>
        
        </BrowserRouter>

    )

}

export { AppRoutes }