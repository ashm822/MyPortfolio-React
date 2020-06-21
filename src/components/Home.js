import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import logo from '../img/Me.jpg';
import { Spring }  from 'react-spring/renderprops';
import pdf from '../pdf/react.pdf';

class Home extends React.Component {

render() {
    return ( 
       
         <Container>
           
            
             <div className="pt-page">
             <Spring
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop: 0}}            
             >

             {props => (
             <div style={props}>
              <div className="section-inner start-page-content">
                <Col className="page-header">
                  <Row>
                    <Col className="col-sm-4 col-md-4 col-lg-4">                    
                        <img src={logo} className="photo" alt="myphoto" />                     
                    </Col>

                    <Col className="col-sm-8 col-md-8 col-lg-8">
                      <div className="title-block">
                        <h1>Ashraf Madina</h1>                                                                     
                            <div className="sp-subtitle item">QA Engineer</div>
                            <div className="sp-subtitle item">Front-end developer</div>                        
                        </div>
                     
                     <div className="social-links">
                        <a href="https://www.linkedin.com/in/ashrafmadina"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/ashm822"><i className="fa fa-git"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <div className="page-content">
                  <Row>
                    <div className="col-sm-6 col-md-6 col-lg-6 wow fadeInLeft animated
                    fadeInLeft; animation-delay: 0.3s;">
                      <div className="about-me">
                        <div className="block-title">
                          <h3>About <span>Me</span></h3>
                        </div>
                        <p>Hello! I’m Ashraf Madina. I'm a Sr. QA Engineer. I automate manual tests into automated scripts with selenium. I recently completed bootstrap and react courses.</p>
                      </div>
                      <div className="download-resume">
                        <a href={pdf} download="React Resume " className="btn btn-primary" >Download Resume</a>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6  wow fadeInRight animated2 
                     fadeInRight; animation-delay: 0.3s;">
                      <ul className="info-list">
                        
                        <li><span className="title">Residence </span><span className="value">Philadelphia, USA</span></li>
                        <li><span className="title">E-mail </span><span className="value">ash822m@gmail.com</span></li>
                        <li><span className="title">Phone </span><span className="value">(718) 555-9252</span></li>
                        <li><span className="title">Freelance </span><span className="value available">Available</span></li>
                        <li><span className="title">Company </span><span className="value">Asset-Map, LLC</span></li>
                        
                      </ul>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            )}

            </Spring>
            </div>          
           
        </Container>  
          
                       
    
    
    )
  };
}

export default Home;





 