import React from "react"
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import "./Payment.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

const Payment = ({open,setOpen})=>{
    return(<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setOpen(false)}
        className="payment-dialog"
      >
        <div className="payment">
            <h1 className="payment-price text-center">Starter</h1>
            <h4 className="payment-price text-center">₺10.00<span className="payment-per"> /year</span></h4>
            <p className="text-center text-muted">dasdas</p>
            <form>
                <span id="payment-header">Fill your information:</span>
                <div className="row-1">
                    <div className="Namerow row-2"> <span id="payment-inner">Name</span> </div>
                    <div className="row row-2"> <input type="text" placeholder="Your name"/> </div>
                </div>
                <div className="row-1">
                    <div className="row row-2"> <span id="payment-inner">Email</span> </div>
                    <div className="row row-2"> <input type="text" placeholder="your@mail.com"/> </div>
                </div>
                <button className="tn-block aboutBtn py-3 px-4 mt-4 d-flex mx-auto"><b>Pay with iyzico</b></button>
            </form>
        </div>
      </Dialog>)
}

export default Payment