import React, { useEffect, useState } from "react"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import ProductService from "../../services/product"

import { Container,Row } from "react-bootstrap"

import Payment from "./Payment/Payment";

import "./Shop.css"



const Pricing = ()=>{

      const [data,setData] = useState([{
            title:"",
            price:"",
            description:"",
            features:[]
      }])
      const [paymentPage, setPaymentPage] = useState(false);

      useEffect(()=>{
            const getAll = async()=>{
                  const res = await ProductService.getAll()
                  setData(res)
              }
              getAll()
      },[])

      return(
      <Container className="pricing-section">
            <Row className="justify-content-center">
                  <Zoom>
                        <div className="col-md-7 text-center">
                              <span className="sub-title">Shop</span>
                              <h2 className="font-weight-bold text-black">Choose Your Plan</h2>
                              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi. Magni deserunt sunt labore.</p>
                        </div>
                  </Zoom>
            </Row>
            <Row>
                  {data.map((item,index)=>(
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 my-4">
                              <Slide left={index % 3 === 0 ? true:false} bottom={index % 3 === 1 ? true:false}  right={index % 3 === 2 ? true:false}>
                                    <div className="p-5 text-center pricing">
                                          <h3>{item.title}</h3>
                                          <div className="price mb-3"><sup className="currency">₺</sup><span className="number">{item.price}</span> <span className="per">/{item.perTime}</span></div>
                                          <p className="text-muted mb-4">* {item.description}</p>
                                                <ul className="list-unstyled text-left mb-5">
                                                      {item.features.map(fea=>(
                                                            fea.active ? <li><i className="fas fa-check mr-1 check"></i>{fea.feature}</li>: <li className="text-muted"><i className="fas fa-check mr-1"></i><del>{fea.feature}</del></li>
                                                      ))}
                                                </ul>
                                          <p><button className="btn-block aboutBtn py-3 px-4" onClick={()=>setPaymentPage(true)}>Buy Now</button></p>
                                    </div>
                              </Slide>
                        </div>
                  ))}
                  
            </Row>
            <Payment open={paymentPage} setOpen={setPaymentPage}/>
      </Container>
      )
}



export default Pricing