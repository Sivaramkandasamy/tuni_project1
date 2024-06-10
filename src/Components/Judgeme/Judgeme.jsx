import React from 'react'
import Img1 from "../../assests/images/1.png";
import Img2 from "../../assests/images/2.png";
import Img3 from "../../assests/images/3.png";
import Img4 from "../../assests/images/4.png";
import Img5 from "../../assests/images/5.png";
import Img6 from "../../assests/images/6.png";
import './Judgeme.css'

const Judgeme = () => {
  return (
    <div className='imageitem'>
      <div>
        <img src={Img1} alt="" />
      </div>
      <div>
        <img src={Img2} alt="" />
      </div>
      <div>
        <img src={Img3} alt="" />
      </div>
      <div>
        <img src={Img4} alt="" />
      </div>
      <div>
        <img src={Img5} alt="" />
      </div>
      <div className='vl'></div>
      <div className='reviewdetails'>
           <div className='d-flex align-items-center gap-2'>
            <div className='staricon'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            </div>
            <p className='review1008'>1008 reviews</p>
           
            </div> 
            <div>
                Verified by <img src={Img6} alt="" />
            </div>
      </div>
    </div>

  )
}

export default Judgeme
