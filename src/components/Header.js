
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';




 class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: true 
        };    
      
    
    this.toggleNav = this.toggleNav.bind(this); 
        }
          
toggleNav() {
    this.setState({isClosed : !this.state.isClosed});
 }  

 render() {
    const closed = this.state.isClosed ? 'smallScreenClosed' : 'smallScreenOpen' ;  
     return (   
           
        <div id="page" className="page">     
            <div className="mobile-header mobile-visible">
                <div className="mobile-logo-container">
                    <div className="mobile-site-title">Ashraf Madina</div>
                </div>
                <a className="menu-toggle mobile-visible" >
                    <i onClick={this.toggleNav}  className="fa fa-bars"> </i>
                </a>
            </div>
            <div >
                <header className={"header sticked " + closed} id="header">
                    <div className="header-content" >
                        <div className="collapse site-title-block mobile-hidden" >
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
         </div>
    )
}
 }

 


 export default Header;