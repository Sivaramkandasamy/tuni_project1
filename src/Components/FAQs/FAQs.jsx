import React from "react";
import { Container, Row, Col } from "reactstrap";
import MuiAccordion from "@mui/material/Accordion"; // Rename to MuiAccordion
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Frequently Asked Questions</h2>
              {/* 1st */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>How do i place my order?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      To place your order, follow these steps
                      <ul>
                        <li>
                          Browse through our wide range of products until you
                          find something you like. After you’ve chosen what you
                          want, select the relevant size. You can check out our
                          size guide for reference.
                        </li>
                        <li>
                          Once you’re done, click the ‘Add To Cart’ button.
                        </li>
                        <li>
                          After you have added all the products, click on the
                          cart icon on the top right. You can either choose to
                          continue shopping or confirm the order and click
                          ‘Proceed to Checkout’.
                        </li>
                        <li>
                          From there, you can either log in to your existing
                          Nobero account or simply continue as a 'New User' and
                          create one. Once you’re done, proceed to checkout,
                          confirm your shipping address, and select the desired
                          payment method to confirm your order by clicking
                          ‘Complete Order’.
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 2nd */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      How will i know that my order is place successfully?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                          Once you successfully place your order, you will
                          receive a confirmation SMS and email with details of
                          your order and your order ID.
                        </li>
                        <li>
                          You’ll receive another SMS and email once your order
                          is shipped out. All you have to do then is, sit back,
                          relax, and wait for your awesome product(s) to arrive.
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 3rd */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>How do i receive my order?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                          We have tied up with several reputed courier
                          companies, so your orders will be delivered right to
                          your doorstep within 2-7 business days depending on
                          where you live.
                        </li>
                        <li>
                          All orders come in fully sealed packages to make sure
                          that all your goods reach you in perfect condition.
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 4th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      I tried placing my order using my Debit Card / Credit
                      Card/Net Banking. The order was not successfully but my
                      money got deducted.What's happenning here?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                          As a first step, kindly check your bank account to
                          ensure if your account has been debited. If your
                          account has been debited after a payment failure, it
                          is normally rolled back by bank account within 10
                          business days.
                        </li>
                        <li>
                          Please reach our help center and provide the required
                          details to raise a ticket then we’ll help sort things
                          out.
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 5th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      How should i check the status of my order?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        To find out when your order is arriving, you need to first log in to your account. Click on the icon to the right of the cart (located on the top right corner) and click on the sign-in button to enter your details.
                        </li>
                        <li>
                        Click on Orders to see the status of your current order (as well as your order history).
                        </li>
                        <li>After your order has been successfully placed, you will immediately receive a confirmation and order details via email and SMS. Once your products have been shipped, you will be notified again via email and SMS.</li>
                        <li>In case there is any unusual event or complication that leads to a delay in shipping your order, you will immediately receive an update from our end- with reasons and the revised shipping and delivery timelines.
                        </li>
                        <li>If there are any other issues/ delays that come up, or you need the order to be delivered urgently, Please reach our help center and provide the required details to raise a ticket then we’ll help sort things out.</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 6th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  Is it safe to shop online if i make payment using Net Banking , Debit Card or Credit Card?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        All Credit Card, Debit Card, and Net Banking transactions are processed over a secure encrypted connection. Rest assured, your money is safe.
                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 7th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                   Why am i not getting a COD option?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        If the COD option is not showing, it’s because this facility is unavailable for your postal code. You can either pay by Debit Card, Credit Card, or Net Banking, or you can get the products delivered to an alternate address (where COD is available)..
                        </li>
                       
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 8th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                     Are there any hidden charges?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        There are absolutely NO hidden charges for any of our products- what you see is what you pay.
                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 9th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                    What should i do if my payment fails?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        In case there is a failure in payment, please retry and keep the following things in mind:
                        </li>
                        <li>
                        Please confirm if the information you’ve provided is correct i.e. account details, billing address, and password (for Net Banking); and that your internet connection wasn’t disrupted during the process.
                        </li>
                        <li>
                        If your account has been debited even after a payment failure, it is normally rolled back to your bank account within 10 business days.
                        </li>
                        <li>For any further clarification, Please reach our help center and provide the required details to raise a ticket then we’ll help sort things out.</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 10th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
               How long will it take for my order to be delivered?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        Orders in India, once shipped, are typically delivered in 2-3 business days in metros, and 3-5 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.)
                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              {/* 11th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                   Are there any additional shipping chargers?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        Nobero provides FREE shipping for all the Prepaid orders. Nominal cash handling charge is payable only for COD orders.
                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div> 
              {/* 12th        */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  How do i track my order?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        You'll receive a tracking number from us in your inbox as soon as it ships! Orders can be tracked in real-time via this link - Track Order
                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div> 
              {/* 13th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  What if my order is undelivered?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        For prepaid orders, if our courier partners are unable to deliver the product and they send it back to us, we will reship them back to you again within 2days of arrival with a new airway bill number and share the shipping details to your email id.                        </li>
                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div> 
              {/* 14th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  How do i modify my order?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        For changes in the order before it has been shipped, Please reach our help center and provide the required details to raise a ticket then we’ll help sort things out.
                        </li>  
                        <li>
                        Orders has been shipped cannot be modified in the transit stage instead you can raise an exchange request once it is delivered.
                        </li>                      
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div> 
              {/* 15th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  How do i cancel my order?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        For order cancellation, Please reach our help center and provide the required details to raise a ticket then we’ll help sort things out.                        </li>  
                                            
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div> 
              {/* 16th */}
              <div className="accordion-item">
                <MuiAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                  What are the terms of the Return Policy?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        <li>
                        Items purchased from Nobero are eligible for return/exchange, if returned within 7 days of delivery.
                        </li> 
                        Easy Exchanges
                        <li>We accept exchanges & Returns free of cost. This means you wont be charged extra to exchange the product(s). It's on us! We want your experience to be hassle-free.</li>   
                        Easy Returns
                        <li>For Prepaid Orders - The full amount is refunded into your initial payment mode (bank account, credit card, etc.)</li>
                        <li>Cash On Delivery : A refund will be initiated to the bank account that is provided by you at the time of raising a return.</li>                                        
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </MuiAccordion>
              </div>
              17th





            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQs;
