import React, { useState } from "react"
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import OrderService from "../../../services/order"

import "./Payment.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

const Payment = ({product,open,onClose})=>{

    const [customer,setCustomer] = useState({name:"",email:""})

    const handleChange = e=>{
        const {name,value} = e.target
        setCustomer(prevV=>{
            if(name === "name"){
                return{...prevV,name:value}
            }
            else if(name === "email"){
                return{...prevV,email:value}
            }
        })
        
    }
    
    const pay = (e)=>{
        e.preventDefault()
        OrderService.pay({
            ...customer,
            product:product._id
        })
        .then((res)=>{
            if(!res.data.error){
                window.location = res.data.paymentPageUrl
            }
            else{
                console.log(res.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>onClose()}
        className="payment-dialog"
      >
        <div className="payment">
            <h1 className="payment-price text-center">{product.title}</h1>
            <h4 className="payment-price text-center">₺{product.price}<span className="payment-per"> /{product.perTime}</span></h4>
            <p className="text-center text-muted">{product.description}</p>
            <form onSubmit={pay}>
                <span id="payment-header">Fill your information:</span>
                <div className="row-1">
                    <div className="Namerow row-2"> <span id="payment-inner">Name</span> </div>
                    <div className="row row-2"> <input type="text" placeholder="Your name" name="name" onChange={handleChange} value={customer.name} /> </div>
                </div>
                <div className="row-1">
                    <div className="row row-2"> <span id="payment-inner">Email</span> </div>
                    <div className="row row-2"> <input type="email" placeholder="your@mail.com" name="email" onChange={handleChange} value={customer.email} /> </div>
                </div>
                <button className="tn-block aboutBtn py-3 px-4 mt-4 d-flex mx-auto" type="submit"><b>Pay with iyzico</b></button>
            </form>
        </div>
      </Dialog>)
}

export default Payment