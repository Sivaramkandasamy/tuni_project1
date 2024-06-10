import React , {useEffect} from "react";
import "./Combo.css";
import { Container, Row, Col } from "reactstrap";
import img001 from "../../assests/images/001.jpg";
import img002 from "../../assests/images/002.jpg";
import img003 from "../../assests/images/003.jpg";
import img004 from "../../assests/images/img004.jpg";
import img005 from "../../assests/images/img005.jpg";
import img006 from "../../assests/images/img006.jpg";
import img007 from "../../assests/images/img007.jpg";
import img008 from "../../assests/images/img008.jpg";
import img009 from "../../assests/images/img009.jpg";
import img010 from "../../assests/images/img010.jpg";
import img011 from "../../assests/images/img011.jpg";
import img012 from "../../assests/images/img012.jpg";



import AOS from 'aos';
import 'aos/dist/aos.css';

const Combo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const combos = [
  //   { img: img001, alt: "Combo 1", reviews: 467, title: "Sapphirery Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img002, alt: "Combo 2", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img003, alt: "Combo 3", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img004, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img005, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img006, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img007, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img008, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img009, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img010, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img011, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },
  //   { img: img012, alt: "Combo 4", reviews: 467, title: "Sapphire Luxury Co-ord", price: 1949, oldPrice: 1877, description: "Ivory Couple Matching Shirts" },



  // ];

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col lg="3 " className="align-items-center my-3 my-4">
              <div className="border border-warning-subtle" data-aos="fade-down">
                <h2 className="mx-4">Mens Combo</h2>
              </div>
            </Col>
            <Col lg="12" >
              <div className="border_line" data-aos="fade-right">
              <div className="contenttitle">
                <h4>Select Combos :</h4>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      All
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Combo 1
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Combo 2
                    </label>
                  </div>
                </div>
              </div>
              </div>
              
            </Col>
          </Row>
          {/* <Row>
            <Col>
            <div className="d-flex align-items-center gap-3">
            <div className="card_container1" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }} >
                  <img src={img001} className="card-img-top"  alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage2" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img002} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage3" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img003} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage4" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img004} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
          
            </div>              
           </Col>

          </Row> */}
          <Row>
          <Col>
            <div className="d-flex align-items-center gap-3 my-4">
            <div className="card_container1" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }} >
                  <img src={img001} className="card-img-top"  alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage2" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img002} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage3" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img003} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage4" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img004} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
          
            </div>              
           </Col>
           
          </Row>
          <Row>
          <Col>
            <div className="d-flex align-items-center gap-3">
            <div className="card_container1" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }} >
                  <img src={img005} className="card-img-top"  alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage2" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img006} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage3" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img007} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage4" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img008} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
          
            </div>              
           </Col>
          </Row>
          <Row>
          <Col>
            <div className="d-flex align-items-center gap-3">
            <div className="card_container1" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }} >
                  <img src={img009} className="card-img-top"  alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage2" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img010} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage3" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img011} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
            <div className="containerimage4" data-aos="zoom-in-up">
            <div>    
            <div className="card" style={{ width: "16rem" }}>
                  <img src={img012} className="card-img-top" alt="..." />
                  <div className="card-img-overlay ">
                    <span className="btn btn-warning ">BEST SELLER </span>
                  </div>   
                </div>
              </div>
              <div>
                <div className="my-2">
                  <span >
                  <i class="bi bi-star-fill text-warning "></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> {} 467 reviews</span>
                </div>
                <div className="text-black prices_details">
                  <h5 className="fontstyle">Sapphire Luxury Co-ord</h5>
                  <div>
                  <h6 className="fw-bold">
                    <i class="bi bi-currency-rupee"></i>1,949.00&nbsp;
                    <del className="text-muted">
                      <i class="bi bi-currency-rupee"></i>1,877
                    </del>{" "}
                    
                  </h6>
                  </div>
                 
                  <p className="text-muted">
                    Ivory Couple Matching Shirts
                  </p>
                </div>
              </div>
            </div>
          
            </div>              
           </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Combo;
