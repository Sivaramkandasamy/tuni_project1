import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import Img1 from '../../assests/images/card1.jpg'
import Img2 from '../../assests/images/card2.jpg'
import Img3 from '../../assests/images/card3.jpg'
import Img4 from '../../assests/images/card4.jpg'
import './Card.css'

const Card = () => {
  return (
   <Container>
    <Row>
      <Col lg='12'>
        <div className='title  '>
           <h1>Most Popular</h1>
           <h4>Check Out Now<i class="ri-arrow-right-line"></i></h4>
        </div>
        
      </Col>
      <Col lg='3'>
        <div className='image d-flex align-item-center gap-3 '>
            <img src= { Img1} alt="" />
            <img src={ Img2} alt="" />
            <img src={ Img3} alt="" />
            <img src={ Img4} alt="" />
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Card
