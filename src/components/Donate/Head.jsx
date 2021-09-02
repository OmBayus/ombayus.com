import Zoom from 'react-reveal/Zoom';
import React from "react"
import {Row,Col} from "react-bootstrap"

const Head = ({text,title})=>{
    return(
        <Row className="justify-content-center py-5 mt-2">
            <Col md={12} className="col-md-12 projects-heading text-center ftco-animate fadeInUp ftco-animated">
                <Zoom>
                    <h1>{title}</h1>
                    <h2 className="mb-4">{title}</h2>
                    <p>{text}</p>
                </Zoom>
            </Col>
        </Row>
    )
}


export default Head