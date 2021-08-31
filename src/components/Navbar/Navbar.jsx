import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { useHistory,useLocation } from "react-router";
import routes from "../../utils/routes"

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import {Container,Navbar,Nav} from "react-bootstrap"

import "./Navbar.css"


const useStyles = makeStyles({
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
});

const NavbarM = ()=>{

      const location = useLocation();

      const classes = useStyles();
      const history = useHistory()
      const [navbar,setNavbar] = useState(false);

      const toggleNavbar = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
        
            setNavbar(open);
      };
        

      const [scrollY, setScrollY] = useState(0);

      function logit() {
            setScrollY(window.pageYOffset);
      }

      useEffect(() => {
            function watchScroll() {
                  window.addEventListener("scroll", logit);
            }
            watchScroll();
            return () => {
                  window.removeEventListener("scroll", logit);
            };
            
      });

      return(
      <navbar className="Navbar">
                  <Navbar expand="lg" style={scrollY > 70 ? {backgroundColor:"#0E0A03"} : {backgroundColor:"transparent"}} fixed="top">
                        <Container>
                              <Navbar.Brand href="/" className="nav-heading">OmBayus</Navbar.Brand>
                              <div className="nav-mobil-open" onClick={()=>setNavbar(true)}><i className="fas fa-bars"></i></div>
                              <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto nav-links">
                                          {routes.Links.map(item=>(
                                                <Link key={item.title} className={location.pathname === item.path ? item.activeClass:""} to={item.path}>{item.title}</Link>
                                          ))}
                                    </Nav>
                                    {routes.ButtonLinks.map(item=>(
                                          <button key={item.title} className={(location.pathname === item.path ? item.activeClass:"")+" aboutBtn m-0 py-2 px-3"} onClick={()=>history.push(item.path)}>{item.title}</button>
                                    ))}
                                    <div className="nav_social">
                                          {/* eslint-disable */}
                                          {routes.SocialLinks.map(item=>(
                                                <a key={item.title} target="_blank" href={item.href}><i className={item.className}></i></a>
                                          ))}
                                    </div>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>

            
            <React.Fragment>
            <Drawer anchor="right" open={navbar} onClose={toggleNavbar(false)}>
                  <div
                  className={classes.list + " nav-mobil"}
                  role="presentation"
                  onClick={toggleNavbar(false)}
                  onKeyDown={toggleNavbar(false)}
                  >
                        <List>
                              {routes.Links.map(item=>(
                                  <Link to={item.path} key={item.title}>
                                    <ListItem button>
                                          <ListItemIcon>{item.icon}</ListItemIcon>
                                          <ListItemText primary={item.title} />
                                    
                                    </ListItem>
                                    </Link>  
                              ))}
                        </List>
                        <div className="d-flex justify-content-center">
                              <button className="aboutBtn mt-2 py-3 px-5" onClick={()=>history.push("/donate")}>Donate</button>
                        </div>
                        <div className="nav_social d-flex justify-content-center mt-4">
                              {/* eslint-disable */}
                              {routes.SocialLinks.map(item=>(
                                    <a key={item.title} target="_blank" href={item.href}><i className={item.className} style={{fontSize:"1.2rem"}}></i></a>
                              ))}
                        </div>
                  </div>
            </Drawer>
            </React.Fragment>
            
      </navbar>
      )
}

export default NavbarM