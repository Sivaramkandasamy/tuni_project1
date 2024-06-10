import { Container, Row, Col } from "reactstrap";
import "./Review.css";

import React, { useState } from "react";

const Review = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h4>Ratings & Reviews</h4>
          <button>Rate Product</button>
        </div>
        <Row>
          <Col lg="6">
            <div className="d-flex">
              <div>
                <div className="ratingsize">
                  <span className="ratingfont">
                    4.5<i class="bi bi-star-half"></i>
                  </span>

                  <p>4 Ratings,Reviews</p>
                </div>
              </div>

              <div className="productrating ">
                <div className="d-flex align-item-center ">
                  5<i class="bi bi-star-half"></i>
                  <div className="progress5 ">
                    <div
                      className="progress-bar5"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                    100%
                    </div>
                  </div>
                  <p>617</p>
                </div>
                <div className="d-flex align-item-center ">
                  4<i class="bi bi-star-half"></i>
                  <div className="progress4">
                    <div
                      className="progress-bar4"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      75%
                    </div>
                  </div>
                  <p>873</p>
                </div>
                <div className="d-flex align-item-center">
                  3<i class="bi bi-star-half"></i>
                  <div className="progress3">
                    <div
                      className="progress-bar3"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                    50%
                    </div>
                  </div>
                  <p>43</p>
                </div>
                <div className="d-flex align-item-center">
                  2<i class="bi bi-star-half"></i>
                  <div className="progress2">
                    <div
                      className="progress-bar2"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      25%
                    </div>
                  </div>
                  <p>890</p>
                </div>
                <div className="d-flex align-item-center">
                  1<i class="bi bi-star-half"></i>
                  <div className="progress1">
                    <div
                      className="progress-bar1"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                     10%
                    </div>
                  </div>
                  <p>28</p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="reviewbutton">
      <div className="reviewbutton1">
      <button type="button" class="btn btn-success">Write a review</button>
      </div>
      <div className="reviewbutton2">
      <button type="button" class="btn btn-secondary">Ask a question</button>

      </div>
      </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Review;
