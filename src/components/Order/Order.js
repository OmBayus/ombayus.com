import React, { useEffect, useState } from "react"
import {useHistory,useParams} from "react-router-dom"
import {Container} from "react-bootstrap"
import Zoom from "react-reveal/Zoom"

import OrderService from "../../services/order"



import "./Order.css"

const Order = ()=>{

    const history = useHistory()
    const {id} = useParams()
    const [order,setOrder] = useState({
        name:"",
        email:"",
        product:{
            title:"",
            price:0
        }
    }) 

    useEffect(()=>{
        OrderService.checkout(id)
        .then(res=>{
            setOrder(res.data)
        })
        .catch(err=>{
            window.location = "/404"
        })
    },[id])

    return(
        <Container className="home text-center justify-content-center">
            <Zoom>
                <div className="text">
                    <span className="subheading">Your order has been received</span>
                    <ul className="about-info mt-4 px-md-0 px-2 mb-5">
                        <li className="d-flex"><span>Name:</span> <span>{order.name}</span></li>
                        <li className="d-flex"><span>Email:</span> <span>{order.email}</span></li>
                        <li className="d-flex"><span>Product Name:</span> <span>{order.product.title}</span></li>
                        <li className="d-flex"><span>Price:</span> <span>{order.product.price}</span></li>
                    </ul>
                    <p><button className="aboutBtn py-3 px-4" onClick={()=>history.push("/shop")}>Go back to Shop</button></p>
                </div>
            </Zoom>       
        </Container>
    )
}

export default Order