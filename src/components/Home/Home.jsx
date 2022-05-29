import React from "react"
import { useHistory } from "react-router"
import Zoom from 'react-reveal/Zoom';

import { Row,Col, Container } from "react-bootstrap"

//style
import "./Home.css"

const Home = ()=>{

    const history = useHistory()

    return(
        <Container className="home">
            <Row className="w-100">
                <Col md={6}>
                    <Zoom>
                        <div className="text">
                            <span className="subheading">Hello!</span>
                            <h1 className="mb-4 mt-3">I'm a <br/><span>Software Developer</span><br/> based in Turkey</h1>
                            <p><button className="aboutBtn py-3 px-4" onClick={()=>history.push("/about")}>About me</button> <button className="projectsBtn py-3 px-4" onClick={()=>history.push("/projects")} >My works</button></p>
                        </div>
                    </Zoom>
                </Col>
                <Col md={6}>
                    <Zoom>
                        <img src="/profil.png" alt="profil" className="profil" />
                    </Zoom>
                </Col>
            </Row>           
        </Container>
    )
}

export default Home
