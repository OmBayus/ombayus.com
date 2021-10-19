import React, { useEffect, useState } from "react"
import {Switch,Route,useLocation} from "react-router-dom";
import { socket } from "./socket";
import TrafficService from "./services/traffic"

//components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Msg from "./components/Msg";

const Home = React.lazy(()=>import("./components/Home/Home"))
const About = React.lazy(()=>import("./components/About/About"))
const Projects = React.lazy(()=>import("./components/Projects/Projects"))
const Shop = React.lazy(()=>import("./components/Shop/Shop"))
const Order = React.lazy(()=>import("./components/Order/Order"))
const Contact = React.lazy(()=>import("./components/Contact/Contact"))
const Donate = React.lazy(()=>import("./components/Donate/Donate"))
const Metamask = React.lazy(()=>import("./components/Donate/Options/Metamask"))
const NotFound = React.lazy(()=>import("./components/404/404"))

const App = ()=>{
    let location = useLocation();
    const [msg,setMsg] = useState({
        open:false,
        msg:""
    })

    useEffect(()=>{
        TrafficService()
    },[])

    useEffect(()=>{
        window.scroll(0,0)
    },[location])

    useEffect(()=>{
        socket.on("Msg",data=>{
            setMsg({
                open:true,
                msg:data
            })
        })
    },[])

    return(
            <div style={{position:"relative"}}>
                <Msg msg={msg} setMsg={setMsg}  />
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

                            <Route path="/order/:id">
                                <Order/>
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

                            <Route>
                                <NotFound/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
    )
}

export default App