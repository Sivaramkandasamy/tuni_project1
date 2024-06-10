import React ,{ Fragment }from 'react'
import Purchages from '../Components/Purchages/Purchages'
import Header from'../Components/Header/Header'
 import Slider1 from'../Components/Slider/Slider1'
import Card from '../Components/cards/Card'
import ChooseUs from '../Components/ChooseUs/ChooseUs'
import Review from '../Components/Review/Review'
import Judgeme from '../Components/Judgeme/Judgeme'
import Combo from '../Components/Combo/Combo'
import Footer from '../Components/Footer/Footer'
import TermConditions from '../Components/Terms & Conditions/TermConditions'
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy'
import ShippingPolicy from '../Components/ShippingPolicy/ShippingPolicy'
import FAQs from '../Components/FAQs/FAQs'

const Home = () => {
  return (
   <Fragment>
    <TermConditions/>
    <PrivacyPolicy/>
   {/* <Header/> 
    <Card/> 
    <ChooseUs/>    
    <Purchages />
    <Review/>
    <Judgeme/> 
    <Combo/>
     <Footer/> */}
     <Purchages/>
     <ShippingPolicy/>
     <FAQs/>
   </Fragment> 
  )
}

export default Home
