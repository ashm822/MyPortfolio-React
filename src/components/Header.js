
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Header()  {
    return(
        <div id="page" class="page">

                    <div class="mobile-header mobile-visible">
                        <div class="mobile-logo-container">
                            <div class="mobile-site-title">Ashraf Madina</div>
                        </div>

                            <a class="menu-toggle mobile-visible">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>

      
                <header id="site_header" class="header">
                    <div class="header-content">
                        <div class="site-title-block mobile-hidden">
                            <div class="site-title">Ashraf <span>Madina</span></div>
                        </div>
                <div className="site-nav">
                    <ul className="site-main-menu">
                        <NavItem>
                            <NavLink class="" to="home" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink class="" to="resume" >Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink class="" to="contact" >Contact</NavLink>
                        </NavItem>
                    </ul>
                </div>
            </div>
          </header>
         </div>
    )
}