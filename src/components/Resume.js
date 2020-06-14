import React from 'react';
import { Row, Col } from 'reactstrap';
import Skills from './Skills';
import { Transition, Animated, Spring } from 'react-spring/renderprops';



class Resume extends React.Component {
        state = {
            showSkills: false
  }

  toggle = () => this.setState({ showSkills: !this.state.showSkills });

    render() {
        return(

          <Spring
            from={{ opacity: 0, marginRight: 500}}
            to={{ opacity: 1, marginLeft: 0}}            
             >

             {props => (
             <div style={props}>    
        
          <section class="pt-page">
            <div class="section-inner custom-page-content">
              <div class="page-header blue">
                <h2>Resume</h2>
              </div>

              <div class="page-content">
                <Row>
                    <Col className="col-sm-6 col-md-6 col-lg-6">
                            <div class="block-title">
                                <h3>Education</h3>
                            </div>

                    <div class="timeline">
                        <div class="timeline-item">
                            <h4 class="item-title">Front-End Developer Bootcamp</h4>
                            <span class="item-period">2020</span>
                            <span class="item-small">Nucamp Bootcamp.</span>
                            <p class="item-description">On-Site Bootcamp.  Acquired certification in: Bootstrap, React, React.Native, MongoDB</p>
                        </div>
                
                        <div class="timeline-item">
                            <h4 class="item-title">Technical courses</h4>
                            <span class="item-period">2008</span>
                            <span class="item-small">Queens College</span>
                            <p class="item-description">Continued education to learn more about QA, Web development, SQL and VB</p>
                        </div>
                
                        <div class="timeline-item">
                            <h4 class="item-title">Computer Science, A.A.</h4>
                            <span class="item-period">2007</span>
                            <span class="item-small">LaGuardia College of NY</span>
                            <p class="item-description">Graduated with associate degree in Computer Science</p>
                        </div>            
                    </div>              
            </Col>

            <Col className="col-sm-6 col-md-6 col-lg-6">
              <div class="block">
                <div class="block-title">
                  <h3>Experience</h3>
                </div>

                <div class="timeline">
               
                  <div class="timeline-item">
                    <h4 class="item-title">Front-End Developer</h4>
                      <span class="item-period">2020</span>
                      <span class="item-small">Soon</span>
                    <p class="item-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  distinctio reprehenderit?</p>
                  </div>
                
                  <div class="timeline-item">
                    <h4 class="item-title">Sr. QA Engineer</h4>
                      <span class="item-period">Nov 2019 - Present</span>
                      <span class="item-small">Asset-Map, LLC</span>
                    <p class="item-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  distinctio reprehenderit?</p>
                  </div>
                
                  <div class="timeline-item">
                    <h4 class="item-title">Lead, QA Engineer</h4>
                      <span class="item-period">Apr 2015 - Oct 2019</span>
                      <span class="item-small">Donnelle Financial</span>
                    <p class="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
             
                </div>
              </div>
            </Col>
          </Row>
          <button toggle={this.toggle} className="btn btn-primary justify-content-center">Show More </button>
            <Transition
              items={this.state.ShowSkills}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {show => show && (props => (
                <Animated.div style={props}>
                  <Skills />
                </Animated.div>
              ))}
            </Transition>
              
           </div>
        </div>
        </section>
             
        </div>
             )}
        </Spring>
    

    )}
  };


 export default Resume;