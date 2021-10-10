import React from "react"
import "./404.css"

const NotFound = ()=>{
    return(
        <section className="notfound container justify-content-center">
            <p className="notfound_subtitle">Thanks. You just broke it all !</p>
            <h1 className="notfound_title">
                <p>404</p>
                404
            </h1>
            <a href="/" className="notfound_btn">get me out of here</a>
        </section>  
    )
}

export default NotFound