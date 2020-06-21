import React from 'react';
import { Row, Col } from 'reactstrap';
import Skills from './Skills';
import { Spring } from 'react-spring/renderprops';



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
        
          <div className="pt-page">
            <div className="section-inner custom-page-content">
              <div className="page-header blue">
                <h2>Resume</h2>
              </div>

              <div className="page-content">
                <Row>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="block-title">
                                <h3>Education</h3>
                            </div>

                            <Spring
                            from={{opacity: 0, transform:'translate3d(0,-30px,0)' }}
                            to={{ opacity: 1, transform:'translate3d(0,0px,0)' }}
                            config={{ delay: 500, duration: 500}}  

                            >
                               {props => (
                                    <div style={props}>                                                             
                                
                                    <div className="timeline-item mb-3">
                                        <h4 className="item-title">Front-End Developer Bootcamp</h4>
                                        <p className="item-period">2020</p>
                                        <p className="item-small">Nucamp Bootcamp.</p>
                                        <p className="item-description">On-Site Bootcamp.  Acquired certification in: Bootstrap, React, ReactNative, MongoDB</p>
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
                            <h4 className="item-title">Technical courses</h4>
                            <p className="item-period">2010</p>
                            <p className="item-small">Queens College</p>
                            <p className="item-description">Continued education to learn more about QA, Web development and SQL database </p>
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
                      <p className="item-period">2009</p>
                      <p className="item-small">LaGuardia C. College </p>
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
                      <p className="item-period">2020</p>
                      <p className="item-small">Soon</p>
                      <p className="item-description">Planning to transition to Full-Stack developer with focus on Bootstrap, React.js</p>
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
                    <p className="item-description">Implemented Automation framework. Script manual tests into selenium automation scripts</p>
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
                      <p className="item-small">Donnelley Financial</p>
                    <p className="item-description">Lead the QA teams both off-shore and on-site</p>
                  </div>
                  </div>                                            
                )}
              </Spring>
             
                </div>
              </Col>          
          </Row>
          
          
              <button onClick={this.toggle} className="btn btn-primary">{this.state.showSkills ? 'Close' : 'Show Skills'}</button>
              <div>
                  {this.state.showSkills && <Skills />}               
              </div>            
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