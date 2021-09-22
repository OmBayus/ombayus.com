import React, { useEffect } from "react"
import {Switch,Route,useLocation} from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Shop from "./components/Shop/Shop"
import Contact from "./components/Contact/Contact"
import Donate from "./components/Donate/Donate"
import Metamask from "./components/Donate/Options/Metamask"
import Footer from "./components/Footer/Footer"

const App = ()=>{

    let location = useLocation();

    useEffect(()=>{
        window.scroll(0,0)
    },[location])

    return(
        <div>
            <Navbar/>
            <div className="py-5"></div>
            <div style={{minHeight:"100vh"}}>
                <div className="main pb-5 mb-5">
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>

                        <Route path="/about">
                            <About/>
                        </Route>

                        <Route path="/shop">
                            <Shop/>
                        </Route>

                        <Route path="/projects">
                            <Projects/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/donate" exact>
                            <Donate/>
                        </Route>
                        <Route path="/donate/metamask">
                            <Metamask />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default App