import React from 'react';
import { Container, Card, Col, Row, Input, Nav} from 'reactstrap';
// import { Spring, Transitions, Animate }  from 'react-spring/renderprops';

export default function Skills()  {
    return(
        
           <Row>
               
            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="block">
                <div class="block-title">
                  <h3>QA Automation <span>Skills</span></h3>
                </div>

                <div class="skills-info">
                  <h4>Selenium</h4>                               
                  <div class="skill-container">
                    <div class="skill-percentage skill-1"></div>
                  </div>

                  <h4>Groovy</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-2"></div>
                  </div>

                  <h4>API Testing</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-3"></div>
                  </div> 

                  <h4>Katalon framework</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-9"></div>
                  </div> 
                </div>

              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="block">
                <div class="block-title">
                  <h3>Coding <span>Skills</span></h3>
                </div>

                <div class="skills-info">
                  <h4>HTML5</h4>                               
                  <div class="skill-container">
                    <div class="skill-percentage skill-4"></div>
                  </div>

                  <h4>CSS/SASS</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-5"></div>
                  </div>

                  <h4>Bootstrap</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-6"></div>
                  </div> 

                  <h4>React</h4>
                  <div class="skill-container">
                    <div class="skill-percentage skill-7"></div>
                  </div> 
                </div>
                
               </div>
              </div>
             </Row>

    )
};