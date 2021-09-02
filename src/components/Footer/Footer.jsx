import React from "react"
import routes from "../../utils/routes"

import "./Footer.css"


const Footer = ()=>{
      return(
      <footer className="footer-basic">
            <div className="social">
                {routes.SocialLinks.map(item=>(
                    <a key={item.title} href={item.href}><i className={item.className+ " footer-icon"}></i></a>
                ))}
            </div>
            <ul className="list-inline">
                  {routes.Links.map(item=>(
                        <li key={item.title} className="list-inline-item"><a href={item.path}>{item.title}</a></li>
                  ))}
                  {routes.ButtonLinks.map(item=>(
                        <li key={item.title} className="list-inline-item"><a href={item.path}>{item.title}</a></li>
                  ))}
            </ul>
            {/* eslint-disable */}
            <p className="copyright">OmBayus © 2021 | This website was designed by <a href="https://github.com/OmBayus" target="_blank">OmBayus</a> .</p>
      </footer>
      )
}

export default Footer