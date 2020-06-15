
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

//   const sideMenu = () => setIsOpen(!isOpen);



export default function Header()  {
    return(

        <div id="page" className="page">
                    <div className="mobile-header mobile-visible">
                        <div className="mobile-logo-container">
                            <div className="mobile-site-title">Ashraf Madina</div>
                        </div>

                        <a className="menu-toggle mobile-visible">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>

      
                <header className="header">
                    <div className="header-content">
                        <div className="site-title-block mobile-hidden">
                            <div className="site-title">Ashraf <span>Madina</span></div>
                        </div>
                        <div className="site-nav">
                            <ul className="site-main-menu">
                                <NavItem>
                                    <NavLink className="nav menu" to="home" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav menu" to="resume" >Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav menu" to="contact" >Contact</NavLink>
                                </NavItem>
                            </ul>
                        </div>
                    </div>
               </header>
         </div>
    )
};