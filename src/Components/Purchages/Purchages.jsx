import React from "react";
import { Container, Row, Col, Placeholder } from "reactstrap";
import "./Purchages.css";
import img1 from "../../assests/images/card1.jpg";
import img2 from "../../assests/images/card2.jpg";
import img3 from "../../assests/images/card3.jpg";
import img4 from "../../assests/images/card4.jpg";
import rupees from "../../assests/images/rupee.png";
import Slider from "react-slick";
import delivery from "../../assests/images/delivery.png";

const Purchages = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <Container>
      <Row>
        <Col lg="8">
          <Slider {...settings}>
            <div className="image1">
              <img src={img1} alt="" />
            </div>
            <div className="image1">
              <img src={img2} alt="" />
            </div>
            <div className="image1">
              <img src={img3} alt="" />
            </div>
            <div className="image1">
              <img src={img4} alt="" />
            </div>
          </Slider>
        </Col>
        <Col lg="4">
          <div className="sales py-5">
            <div className="fancy">
              <h2>Fancy round neck</h2>
            </div>

            <p className="text-muted heading1">
              Description of the product goes here. You can provide all the
              details about the product, its features, specifications, etc.
            </p>
            <div>
              <div className="rateicon large-font">
                <p>
                  <span className="rupe">
                    <img src={rupees} alt="" className="rupeesicon" />
                    <span className="large-font">199</span>
                  </span>

                  <del>
                    <i class="bi bi-currency-rupee large-font">2045</i>
                  </del>
                  <span class="badge text-bg-light">Save 10%</span>
                </p>
              </div>

              <div className="star">
                <span className="starword">
                  <i class="bi bi-star-half"></i> 4.5 | 20
                </span>
              </div >
              <p className="text-muted" style={{ paddingTop: '20px', paddingBottom: '0px', fontSize: 'small' }} >
                <p>Tax included. Shipping calculated at checkout</p>
              </p>

              <p className="text-danger font_size_bought  ">
                <i class="bi bi-cart-check-fill"></i>455 people bought this in
                last 7 days
              </p>
              
              <div className="d-flex align-item-center gap-4 my-4">
                <span>
                  <button type="button" class="btn btn-outline-warning">
                    Add to Card
                  </button>
                </span>
                <span className="buynow">
                  <button type="button" class="btn btn-warning" >
                    Buy Now
                  </button>
                </span>
              </div>
              <div>
                <div className="my-4"> <h4>Select Size</h4></div>
               
                <div className="d-flex align-item-center gap-3 my-4">
                  <button type="button" class="btn btn-outline-dark">
                    S
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    M
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    L
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    XL
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    XXL
                  </button>
                </div>
                <p className="text-danger text-center">Please select size</p>
              </div>
              <div className="deliveryimg">
                <img src={delivery} alt="" />
              </div>

            </div>
          </div>
        </Col>
        
      </Row>
      
    </Container>

<div>


</div>

</>
  );
};

export default Purchages;
