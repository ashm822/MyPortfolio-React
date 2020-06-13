import React from 'react';
import { Container, Card, Col, Row, Input, Nav} from 'reactstrap';
import logo from '../img/Me.jpg';
import { Spring, Transitions, Animate }  from 'react-spring/renderprops';

class Home extends React.Component {

render() {
    return ( 
       
         <Container>
           <Spring
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop: 0}}            
             >

             {props => (
             <div style={props}>
            
             <div class="pt-page">
              <div class="section-inner start-page-content">
                <Col className="page-header">
                  <Row>
                    <Col className="col-sm-4 col-md-4 col-lg-4">
                      <div class="photo">
                        <img src={logo} alt="myphoto" />
                      </div>
                    </Col>

                    <Col className="col-sm-8 col-md-8 col-lg-8">
                      <div class="title-block">
                        <h1>Ashraf Madina</h1>                                              
                          <div class="item">
                            <div className="sp-subtitle">QA Engineer</div>
                          </div>
                          <div class="item">
                            <div class="sp-subtitle">Front-end developer</div>
                          </div>
                        </div>
                     
                     <div class="social-links">
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-git"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <div class="page-content">
                  <div class="row">

                    <div class="col-sm-6 col-md-6 col-lg-6 wow fadeInLeft animated
                    fadeInLeft; animation-delay: 0.3s;">
                      <div class="about-me">
                        <div class="block-title">
                          <h3>About <span>Me</span></h3>
                        </div>
                        <p>Hello! I’m Ashraf Madina. I'm a Sr. QA Engineer. I automate manual tests into automated scripts. I recently completed Bootstrap courses and pursuing full-stack developer certification.</p>
                      </div>
                      <div class="download-resume">
                        <a href="pdf\certification1.pdf" download="Madina " class="btn btn-primary" >Download Resume</a>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6 wow fadeInRight animated2 
                     fadeInRight; animation-delay: 0.3s;">
                      <ul class="info-list">
                        
                        <li><span class="title">Residence </span><span class="value">Philadelphia, USA</span></li>
                        <li><span class="title">E-mail </span><span class="value">ash822m@gmail.com</span></li>
                        <li><span class="title">Phone </span><span class="value">(718) 555-9252</span></li>
                        <li><span class="title">Freelance </span><span class="value available">Available</span></li>
                        <li><span class="title">Employer </span><span class="value">Asset-Map, LLC</span></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
           )}

            </Spring>
           
        </Container>  
          
                       
    
    
    )
};
}

export default Home;





 