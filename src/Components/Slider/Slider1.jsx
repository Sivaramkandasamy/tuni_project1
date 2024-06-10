
import React from 'react'
import Slider from "react-slick";
import img1 from '../../assests/images/slider1.jpg';
import img2 from '../../assests/images/slider2.jpg';
import img3 from '../../assests/images/slider3.jpg';
import './Slider1.css'
const Slider1 = () => {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <>
    <div className='my-5'>

    <Slider {...settings}>
  
     <div className='slidershow'>
      <img src={img1} alt="" />   
         </div>
      <div className='slidershow'>
      <img src={img2} alt="" />  
      </div>
      <div className='slidershow'>
        <img src={img3} alt="" />
      </div>
   
      
    </Slider>
    </div>





      
    </>
  )
}

export default Slider1










// const Purchase = () => {
 
// };
// export default Purchase