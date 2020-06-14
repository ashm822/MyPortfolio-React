import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Skills from './Skills';
import { Transition, Animated, Spring } from 'react-spring/renderprops';



class Resume extends React.Component {
        state = {
            showSkills: false
  };
  
 
  toggle = () => {
    this.setState(prev=> ({ showSkills: !prev.showSkills }));
  }


    render() {     
        return(
         
          <Spring
            from={{ opacity: 0, marginLeft: -1000, transform:'translate3d(0,-40px,0)' }}
            to={{ opacity: 1, marginLeft: 0, transform:'translate3d(0,0px,0)' }}  
                   
             >

             {props => (
             <div style={props}>    
        
          <div class="pt-page">
            <div class="section-inner custom-page-content">
              <div class="page-header blue">
                <h2>Resume</h2>
              </div>

              <div class="page-content">
                <Row>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                            <div class="block-title">
                                <h3>Education</h3>
                            </div>

                            <Spring
                            from={{opacity: 0, transform:'translate3d(0,-30px,0)' }}
                            to={{ opacity: 1, transform:'translate3d(0,0px,0)' }}
                            config={{ delay: 500, duration: 500}}  

                            >
                               {props => (
                                    <div style={props}>                                                             
                                
                                    <div class="timeline-item mb-3">
                                        <h4 class="item-title">Front-End Developer Bootcamp</h4>
                                        <span class="item-period">2020</span>
                                        <span class="item-small">Nucamp Bootcamp.</span>
                                        <p class="item-description">On-Site Bootcamp.  Acquired certification in: Bootstrap, React, React.Native, MongoDB</p>
                                    </div>
                                  </div>
                          
                                  )}
                             </Spring>

                             <Spring
                              from={{opacity: 0}}
                              to={{ opacity: 1}}
                              config={{ delay: 1000, duration: 1000 }}  

                            >
                               {props => (
                                    <div style={props}> 

                     
                        <div class="timeline-item mb-3">
                            <h4 class="item-title">Technical courses</h4>
                            <span class="item-period">2008</span>
                            <span class="item-small">Queens College</span>
                            <p class="item-description">Continued education to learn more about QA, Web development, SQL and VB</p>
                        </div>
                      </div>
                        
                    )}
                </Spring>


                <Spring
                from={{opacity: 0}}
                to={{ opacity: 1}}
                config={{ delay: 1500, duration: 1500 }}  

              >
                  {props => (
                      <div style={props}> 
             
                  <div className="timeline-item mb-3">
                      <h4 className="item-title">Computer Science, A.A.</h4>
                      <span className="item-period">2007</span>
                      <span className="item-small">LaGuardia College of NY</span>
                      <p className="item-description">Graduated with associate degree in Computer Science</p>
                  </div>            
              </div>                                      
                        
                )}
            </Spring> 
            </div>          
            

            <Col className="col-sm-6 col-md-6 col-lg-6">
              <div className="block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                  
                <Spring
                            from={{opacity: 0,  transform:'translate3d(0,-50px,0)' }}
                            to={{ opacity: 1,  transform:'translate3d(0, 0px,0)' }}
                            config={{ delay: 500, duration: 500 }}  

                            >
                               {props => (
                                    <div style={props}>  
               
                  <div className="timeline-item mb-3">
                    <h4 className="item-title">Front-End Developer</h4>
                      <span className="item-period">2020</span>
                      <span className="item-small">Soon</span>
                    <p className="item-description">Planning to transition to Full-Stack front-end developer with focus on Bootstrap, React.js</p>
                  </div>
                  </div>                                            
                )}
            </Spring>

            <Spring
                  from={{opacity: 0}}
                  to={{ opacity: 1}}
                  config={{ delay: 1000, duration: 1000 }}  

                  >
                      {props => (
                          <div style={props}>  
                
                  <div className="timeline-item mb-3">
                    <h4 className="item-title">Sr. QA Engineer</h4>
                      <p className="item-period">Nov 2019 - Present</p>
                      <p className="item-small">Asset-Map, LLC</p>
                    <p className="item-description">Implemented Automation framework, API test into SDLC. Assist in some bug fixes and debugging.</p>
                  </div>
                  </div>                                            
                )}
            </Spring>

             <Spring
                  from={{opacity: 0}}
                  to={{ opacity: 1}}
                  config={{ delay: 1500, duration: 1500 }}  

                  >
                      {props => (
                          <div style={props}>  
                
                  <div className="timeline-item">
                    <h4 className="item-title">Lead, QA Engineer</h4>
                      <p className="item-period">Apr 2015 - Oct 2019</p>
                      <p className="item-small">Donnelle Financial</p>
                    <p className="item-description">Lead the QA teams both off-shore and on-site</p>
                  </div>
                  </div>                                            
                )}
            </Spring>
             
                </div>
              </Col>          
          </Row>
          
          
          <button onClick={this.toggle}  className="btn btn-primary">Show Skills</button>
              <div  >
                  {this.state.showSkills && <Skills />}
                
              </div>
              
            {/* <Transition
              items={this.state.showSkills}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              >
              {show => show && (props => (
              
                <Animated.div style={props}>
                  <Skills  toggle={this.toggle}/>
                </Animated.div>
              ))}
            </Transition>  */}
              
           </div>
        </div>
        </div>
    
      </div>
             )}
        </Spring>

      )
    };
             
  }


 export default Resume;