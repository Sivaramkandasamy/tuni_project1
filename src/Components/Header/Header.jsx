import React from 'react'
import { Container } from 'reactstrap'
import Img from '../../assests/images/tuni_logo.png';
import './Header.css'



const Header = () => {
  return (
    <div className='cont'>
        <div className='d-flex align-items-center justify-content-between'>
            <div className='logo'>
                <img src={Img} alt="" className='' />
            </div>
            <div>
                <ul className='menu d-flex align-items-center gap-5'>
                   <li><a href="#"></a>Home</li>
                   <li><a href="#"></a>Men</li>
                   <li><a href="#"></a>Women</li>
                   <li><a href="#" className='mens'></a>Men's Combo Offers</li>
                   <li><a href="#"className='womens'></a>Women's Combo Offers</li>
                </ul>

            </div>
            <div>
                <div className='icon d-flex align-items-center ' >
                <i class="ri-group-line"></i>
                <i class="ri-shopping-cart-fill"></i>
                    
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Header
