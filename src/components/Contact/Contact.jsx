import React from "react"
import Zoom from 'react-reveal/Zoom';
import {Row,Col,Button, Container} from "react-bootstrap"

import "./Contact.css"

const Contact = ()=>{
      return(
      <Container fluid>
      <Row id="contact" className="justify-content-center text-light">
            <Col md="7">
                  <div className="contact-title">
                        <Zoom>
                              <span>Contact</span>
                              <h2>Contact with me!</h2>
                        </Zoom>
                  </div>
                  <div className="contact-section">
                        <Row>
                              <Col md="6">
                                    <div className="contact-box">
                                          <div className="contact-row">
                                          <i className="fa fa-map-marker"></i> Çankaya/Ankara Türkiye
                                          </div>
                                          <div className="contact-row">
                                          <i className="fa fa-phone"></i> +90 551 609 30 25
                                          </div>
                                          <div className="contact-row">
                                          <i className="fa fa-envelope"></i> info@ombayus.com
                                          </div>
                                    </div>
                              </Col>
                              <Col md="6">
                                    <form>
                                          <div className="input-field">
                                          <input type="text" className="form-control" name="name" required placeholder="Name"/>
                                          </div>
                                          <div className="input-field">
                                          <input type="email" className="form-control" name="email" required placeholder="Email"/>
                                          </div>
                                          <div className="input-field">
                                          <textarea className="form-control" name="message" required placeholder="Message"></textarea>
                                          </div>
                                          <Button disabled={true} type="submit" className="contact-btn">Send</Button>
                                    </form>
                              </Col>
                        </Row>
                  </div>
            </Col>  
      </Row>
      </Container>
      )
}




export default Contact