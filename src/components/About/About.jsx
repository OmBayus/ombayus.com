import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Row,Col, Container } from "react-bootstrap"

import "./About.css"

const About = ()=>{

    const [data,setData] = useState({
        public_repos:0

    })

    useEffect(()=>{
        axios.get("https://api.github.com/users/ombayus").then(res=>{
            setData(res.data)
        })
    },[])
    return(
        <Container>
            <Row className="py-4">
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <img src="/profil.png" alt="profil" className="profil" />
                </Col>
                <Col md={6}>
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 about-heading">
                                <h1>About</h1>
                                <h2 className="mb-4">About Me</h2>
                                <p>I am an allround web developer. I am a junior programmer with good knowledge of front-end techniques. I love structure and order. I love spending time learning web tools.</p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span>Name:</span> <span>Ömer Bayramçavuş</span></li>
                                    <li className="d-flex"><span>Year of birth:</span> <span>2000</span></li>
                                    <li className="d-flex"><span>Address:</span> <span>Çankaya / Ankara</span></li>
                                    <li className="d-flex"><span>Email:</span> <span>info@ombayus.com</span></li>
                                    <li className="d-flex"><span>Phone: </span> <span>+90 551 609 30 25</span></li>
                                </ul>
                            </div>
                            </div>
                        <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                            <div className="text">
                                <p className="mb-4">
                                    <span className="number">{data.public_repos} </span>
                                    <span>Project complete</span>
                                </p>
                                <button onClick={()=>{
                                    window.open("https://github.com/OmBayus?tab=repositories", "_blank")
                                }} className="aboutBtn py-3 px-4">Go My Repositories</button>
                            </div>
                        </div>
                </Col>
            </Row>           
        </Container>
    )
}

export default About