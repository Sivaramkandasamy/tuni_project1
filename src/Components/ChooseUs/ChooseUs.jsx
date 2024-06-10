import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import './ChooseUs.css'
import img1 from '../../assests/images/rocket (1).gif';
import img2 from '../../assests/images/phone.gif';
import img3 from '../../assests/images/credit-card.gif';

const ChooseUs = () => {
  return (
   <Container>
    <Row >
        
            <h5 className='title'>Why Choose Us?</h5>
     
        <Col lg='4' className='fast'>
            <div className='content1 '>
                  <img src={img1} alt="" className='w-50'/>
                  <h3>FAST SHIPPING</h3>
                 <p> Free and Fast Shipping across India </p> 
            </div>
       </Col>
       <Col lg='4' className='support'>
            <div className='content2'>
                  <img src={img2} alt="" className='w-50'/>
                  <h3>SUPPORT 24/7</h3>
                  <p>You will speak with one of our courteous representatives within 24 hours</p>
            </div>
        </Col> 
        <Col lg='4' className='payment'>   
            <div className='content3'>
                <img src={img3} alt="" className='w-50' />
                <h3>SECURE PAYMENT</h3>
                <p>Your safely is our priority. All payments are 100% secure</p>
            </div>
        </Col >
    </Row>
   </Container>
  )
}

export default ChooseUs
