import React from "react"
import { useHistory } from "react-router"

import { Row,Col, Container } from "react-bootstrap"

//style
import "./Home.css"

const Home = ()=>{

    const history = useHistory()

    return(
        <Container className="home">
            <Row>
                <Col md={6}>
                    <div className="text">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3">I'm a <span>web designer</span> based in Turkey</h1>
                        <p><button className="aboutBtn py-3 px-4" onClick={()=>history.push("/about")}>About me</button> <button className="projectsBtn py-3 px-4" onClick={()=>history.push("/projects")} >My works</button></p>
                    </div>
                </Col>
                <Col md={6}>
                    <img src="/profil.png" alt="profil" className="profil" />
                </Col>
            </Row>           
        </Container>
    )
}

export default Home