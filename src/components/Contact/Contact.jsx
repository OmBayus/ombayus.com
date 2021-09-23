import React, { useState } from "react"
import Zoom from 'react-reveal/Zoom';
import CircularProgress from "@material-ui/core/CircularProgress"
import {Row,Col,Button, Container} from "react-bootstrap"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ContactService from "../../services/contact"

import "./Contact.css"

const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

const Contact = ()=>{

      const [contact,setContact] = useState({
            progress:false,
            alert:false,
            alertMsg:"",
            error:false,
            name:"",
            email:"",
            message:""
      })

      const handleChange = e=>{
            const {name,value} = e.target
            setContact(prevValue=>{
                  if(name==="name"){
                        return {...prevValue,name:value}
                  }
                  else if(name==="email"){
                        return {...prevValue,email:value}
                  }
                  else if(name==="message"){
                        return {...prevValue,message:value}
                  }
            })
      }

      const sendMessage = async (e)=>{
            e.preventDefault()
            setContact(prevValue=>({...prevValue,progress:true}))
            ContactService.sendMsg(contact).then(res=>{
                  const data = res.data
                  if(data.error){
                        setContact(prevValue=>({...prevValue,progress:false,alert:true,alertMsg:data.error,error:true}))
                  }
                  else{
                        setContact(prevValue=>({...prevValue,progress:false,alert:true,alertMsg:"Message sent",error:false}))
                  }
            }).catch(err=>{
                  setContact(prevValue=>({...prevValue,progress:false,alert:true,alertMsg:err.message,error:true}))
            })
            

      }

      return(
      <Container fluid>
            <Snackbar open={contact.alert} autoHideDuration={6000} onClose={()=>setContact(prevValue=>({...prevValue,alert:false}))}>
                  <Alert onClose={()=>setContact(prevValue=>({...prevValue,alert:false}))} severity={contact.error?"error":"success"} sx={{ width: '100%' }}>
                  {contact.alertMsg}
                  </Alert>
            </Snackbar>
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
                                    <form onSubmit={sendMessage}>
                                          <div className="input-field">
                                          <input type="text" className="form-control" onChange={handleChange} name="name" required placeholder="Name" value={contact.name}/>
                                          </div>
                                          <div className="input-field">
                                          <input type="email" className="form-control" onChange={handleChange} name="email" required placeholder="Email" value={contact.email}/>
                                          </div>
                                          <div className="input-field">
                                          <textarea className="form-control" name="message" onChange={handleChange} required placeholder="Message" value={contact.message}></textarea>
                                          </div>
                                          <Button disabled={contact.progress} type="submit" className="contact-btn">{!contact.progress?"Send":<CircularProgress color="inherit"/>}</Button>
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