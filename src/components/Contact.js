import React, { Component } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Row, Form } from 'reactstrap';
import { Spring } from 'react-spring/renderprops';



class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      message: '',
      touched: {
        fullName: false,
        email: false,
        message: false,
      },
    }
  };

  resetForm() {
    this.setState({
      fullName: '',
      email: '',
      message: ''
        
    });  
}

  render() {

    const contactAlert = () =>
       alert(
        'Messaging has not been implemented yet... sorry!'
        );

     return (

        <Spring
          from={{ opacity: 0, marginRight: -1000, transform: 'translate3d(0,-40px,0)' }}
          to={{ opacity: 1, marginRight: 0, transform: 'translate3d(0,0px,0)' }}
        >
          {props => (
            <div style={props}>

            <section className="pt-page">
              <div className="section-inner custom-page-content">
                <div className="page-header blue">
                  <h2>Contact</h2>
                </div>

                <div className="page-content">
                  <Row>
                    <div className="col-sm-6 col-md-6 wow fadeInLeft animated
                        fadeInLeft; animation-delay: 0.5s;">
                        <div className="block-title">
                          <h3>Get in <span>Touch</span></h3>
                        </div>
                      <div className="contact-info-block">
                          <div className="ci-icon">
                            <i className="fa fa-map-marker"></i>
                          </div>
                          <div className="ci-text">
                            <h5>Philadelphia, USA</h5>
                          </div>
                      </div>

                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <div className="ci-text"><a href="mailto:ash822m@gmail.com">
                          <h5>ash822m@gmail.com</h5></a>
                        </div>
                      </div>
                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="ci-text">
                          <a href="tel:+17185019252"><h5>(718) 555-9252</h5></a>
                        </div>
                      </div>
                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="ci-text">
                          <a href="https://www.linkedin.com/in/ashrafmadina/" target="_blank">LinkedIn</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 block-title">                     
                        <h3 className="block-title">Contact <span>Form</span></h3>
                     
                  <Form className="controls">                  
                        <AvForm className="form-group form-group-with-icon">
                            <i className="fa fa-user"></i>
                            <AvField id="form_name" type="text" name="name" className="form-control" placeholder="Full Name"
                                  validate={{
                                  required: {value: true, errorMessage: 'Enter your full name'},                                   
                                  minLength: {value: 5, errorMessage: 'Enter your full name'}                                  
                                 }}
                              />
                          </AvForm>

                          <AvForm className="form-group form-group-with-icon">
                            <i className="fa fa-envelope"></i>
                            <AvField name="email"  type="email" placeholder="Email address" errorMessage="Enter a valid email"
                                validate={{
                                required: true,
                                email: true
                                }}
                            />    
                          </AvForm>

                          <AvForm className="form-group form-group-with-icon">
                            <i className="fa fa-comment"></i>
                            <textarea id="form_message" name="message" className="form-control" placeholder="Message for Me" rows="4" required="required"></textarea>
                          </AvForm>

                          <button onClick={contactAlert} type="submit" className="btn btn-primary" value="Send message">Send Message</button>
                        
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