import React from "react"
import { Container,Col, Row } from "react-bootstrap"
import projects from "../../utils/projects.json"

import "./Projects.css"

const Projects = ()=>{
    return(
        <Container>
            <Row className="justify-content-center py-5 mt-2">
                <Col md={12} className="col-md-12 projects-heading text-center ftco-animate fadeInUp ftco-animated">
                    <h1>Projects</h1>
                    <h2 className="mb-4">Projects</h2>
                    <p>Review my project source codes.</p>
                </Col>
            </Row>  
            <Row>
                {/* eslint-disable */}
                {projects.map(item=>(
                    <Col md={4} className="text-center d-flex">
                        <a href={item.href} target="_blank" className="project">
                            <div>
                                <h3 className="mb-5">{item.title}</h3>
                            </div>
                            <div>
                                <i class="fas fa-code"></i>
                            </div>
                        </a>
                    </Col>
                ))}
					
			</Row>
        </Container>
    )
}

export default Projects