import React from "react";



import "./Footer.css";
import { Container , Row , Col } from "reactstrap";

import img0003 from'../../assests/images/cardimage.png'
import img0004 from '../../assests/images/google.png'
import img0005 from '../../assests/images/apple.png'
const Footer = () => {
  
  return (
    <>
      <div className="container-fluid bg_color_footer">
       
          <Container className="container">
            <Row className="row">
              <Col className="col-lg-2 col-md-4 col-12 my-3 " >
                <div className="Categories_field">
                  <h5 className="fw-bold">Categories</h5>
                  <div class="">
                    <ul class="list-unstyled my-2 ">
                      <li className="py-1 px-2">Men</li>
                      <li className="py-1 px-2">Women</li>
                      <li className="py-1 px-2">Mens Combo</li>
                      <li className="py-1 px-2">Womens Combo</li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col className="col-lg-2 col-md-4 col-12 my-3 ">
                <div className="Needhelp_field">
                  <h5 className="fw-bold">Need Help</h5>
                  <div class="">
                    <ul class="list-unstyled my-2">
                      <li className="py-1 px-2">Track Your Order</li>
                      <li className="py-1 px-2">Returns & Exchanges</li>
                      <li className="py-1 px-2">Chat on WhatsApp</li>
                      <li className="py-1 px-2">Contact Us</li>
                      <li className="py-1 px-2">FAQs</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-2 col-md-4 col-12 my-3 ">
                <div className="company_field">
                  <h5 className="fw-bold">Company</h5>
                  <div class="">
                    <ul class="list-unstyled my-2">
                      <li className="py-1 px-2">Shipping Policy</li>
                      <li className="py-1 px-2">Privacy Policy</li>
                      <li className="py-1 px-2">Terms of Service</li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col className="col-lg-3 col-md-4 col-12 my-3">
                <div className="email_field">
                  <h6 className="fw-bold">Be The First to Know</h6>
                  <p className="p_subcribe">
                    Sign up to stay updated on new products , brand stories and
                    events
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </Col>

              <Col className="col-lg-3 col-md-4 col-12 my-3 ">  
              <div className="apple_android"> <div className="my-2">
                <img src={img0004}alt="" />
              </div>
              <div>
                <img src={img0005} alt="" />
              </div></div>        
             
              </Col>
            </Row>
            <Row>
              
              <Col className="col-lg-6 col-md-4 col-12 my-3">
              <div className="social_media">
                  <ul class="list-unstyled  d-flex my-2">
                    <li>
                      <i class="bi bi-instagram px-3 fs-large"></i>
                    </li>
                    <li>
                      <i class="bi bi-facebook px-3 fs-large"></i>
                    </li>
                    <li>
                      <i class="bi bi-whatsapp px-3 fs-large"></i>
                    </li>
                  </ul>
                </div>
            </Col>
            <Col className="col-lg-6 col-md-4 col-12 my-3">
                <div className="cardimg">
                <img src={img0003} alt="" />
                </div>
              
              </Col>
              
            </Row>
            <Row>
            <Col col-lg-12 col-md-4 col-12 my-3>
              <div className="Tuni"><p> @ 2022-2024 , TUNi Tech Solutions Private Limited</p></div>
             
              </Col>
            </Row>
          </Container>
          
        </div>
     
    </>
  );
};

export default Footer;

