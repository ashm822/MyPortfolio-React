import React , {Component} from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Row, Form, Container} from 'reactstrap';
import { Spring, Transition, Animated }  from 'react-spring/renderprops';


class Contact extends Component {
  constructor(props) {
      super(props);

      this.state = {
          fullName: '',
          email: '',
          message: '',      
          
          }
      };
  
      render() {
        return(
          

            <Spring
            from={{ opacity: 0, marginRight: -1000, transform:'translate3d(0,-40px,0)'}}
            to={{ opacity: 1, marginRight: 0, transform: 'translate3d(0,0px,0)'}}            
             >

             {props => (
             <div style={props}>
               <section class="pt-page">

            <div class="section-inner custom-page-content">
              <div class="page-header blue">
                <h2>Contact</h2>
              </div>

          <div class="page-content">
              <Row>
                  <div class="col-sm-6 col-md-6 wow fadeInLeft animated
                    fadeInLeft; animation-delay: 0.5s;">
                    <div class="block-title">
                      <h3>Get in <span>Touch</span></h3>
                    </div>
                    <div class="contact-info-block">
                      <div class="ci-icon">
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <div class="ci-text">
                        <h5>Philadelphia, USA</h5>
                      </div>
                    </div>

                          <div class="contact-info-block">
                            <div class="ci-icon">
                              <i class="fa fa-envelope"></i>
                            </div>
                            <div class="ci-text"><a href="mailto:ash822m@gmail.com">
                              <h5>ash822m@gmail.com</h5></a>
                            </div>
                          </div>
                          <div class="contact-info-block">
                            <div class="ci-icon">
                              <i class="fa fa-phone"></i>
                            </div>
                            <div class="ci-text">
                              <a href="tel:+17185019252"><h5>(718) 555-9252</h5></a>
                            </div>
                          </div>
                    <div class="contact-info-block">
                      <div class="ci-icon">
                        <i class="fa fa-linkedin"></i>
                      </div>
                      <div class="ci-text">
                        <a href="https://www.linkedin.com/in/ashrafmadina/" target="_blank">LinkedIn</a>
                      </div>
                    </div>
                  </div>

              <div class="col-sm-6 col-md-6">
                <div class="block-title">
                  <h3>Contact <span>Form</span></h3>
                </div>


                  
                    <Form>
                      <div class="controls">
                        <div class="form-group form-group-with-icon">
                          <i class="fa fa-user"></i>
                          <input id="form_name" type="text" name="name" class="form-control" placeholder="Full Name" required="required" />
                        </div>

                        <div class="form-group form-group-with-icon">
                          <i class="fa fa-envelope"></i>
                          <input id="form_email" type="email" name="email" class="form-control" placeholder="Email Address" required="required" />
                        </div>

                        <div class="form-group form-group-with-icon">
                          <i class="fa fa-comment"></i>
                          <textarea id="form_message" name="message" class="form-control" placeholder="Message for Me" rows="4" required="required"></textarea>
                        </div>

                        <input type="submit" class="button btn-send" value="Send message" />
                      </div>
                    </Form>
                </div>
                </Row>
            </div>
          </div>
          </section>           
        </div>
      )}

</Spring>
        

    )
  }
};


    export default Contact;