import React from "react";
import { Carousel } from "react-bootstrap";
import MultiCarousel from "react-multi-carousel";
import { IMAGES } from "../utils/staticJSON";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <section className="banner slider-banner">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img src={IMAGES.slide1} className="d-block w-100"
              alt="Supporting the growth of Turkmenistan's energy sector for more than 12 years."
              style={{ height: '100vh' }}
            />
            <div className="carousel-caption aos-init aos-animate" data-aos="fade-up">
              <h5>Supporting the growth of Turkmenistan's energy sector for more than 12 years.</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={IMAGES.slide2} className="d-block w-100"
              alt="Turkmen Gala is committed to innovation, in-country value, and Unwavering integrity."
              style={{ height: '100vh' }}
            />
            <div className="carousel-caption aos-init aos-animate" data-aos="fade-up">
              <h5>Turkmen Gala is committed to innovation, in-country value, and Unwavering integrity.</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={IMAGES.slide3} className="d-block w-100"
              alt="Based in Turkmenistan, Turkmen Gala values Reliability, Proficiency, and collaboration with our clients."
              style={{ height: '100vh' }}
            />
            <div className="carousel-caption aos-init aos-animate" data-aos="fade-up">
              <h5>Based in Turkmenistan, Turkmen Gala values Reliability, Proficiency, and collaboration with our clients.</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="service py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="title pb-1 pt-2 text-center aos-init aos-animate" data-aos="fade-up">Energy Sector</div>
              <p className="pt-3 pb-4 text-center aos-init aos-animate" data-aos="fade-up">Turkmen Gala ES is an Turkmenistan local company that has successfully contributed the growth of Turkmenistan's energy sector for more than a decade. </p>
            </div>
          </div>
          <div className="row g-4 g-lg-4 justify-content-center">
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/upstream">
                  <img className="img-fluid" src={IMAGES.upstream} />
                  <div className="arrow-hover">Upstream</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/inspection">
                  <img className="img-fluid" src={IMAGES.inspection} />
                  <div className="arrow-hover">Inspection</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/ae-mi">
                  <img className="img-fluid" src={IMAGES.aemi} />
                  <div className="arrow-hover">AE &amp; MI</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/automation-and-measuring">
                  <img className="img-fluid" src={IMAGES.automationMeasuring} />
                  <div className="arrow-hover">Automation and Measuring</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/efcc-and-maintenance">
                  <img className="img-fluid" src={IMAGES.efccMaintenance} />
                  <div className="arrow-hover">EFCC and Maintenance</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/topside-underwater">
                  <img className="img-fluid" src={IMAGES.topsideUnderwater} />
                  <div className="arrow-hover">Topside &amp; Underwater</div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/products-procurement">
                  <img className="img-fluid" src={IMAGES.productsProcurement} />
                  <div className="arrow-hover">Products &amp; Procurement</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service py-5 bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="title pb-1 pt-2 text-center text-white aos-init aos-animate" data-aos="fade-up">Infra Sector</div>
              <p className="pt-3 pb-4 text-center text-white aos-init aos-animate" data-aos="fade-up">Turkmen Gala ES is an Turkmenistan local company that has successfully contributed the growth of Turkmenistan's energy sector for more than a decade. </p>
            </div>
          </div>
          <div className="row g-4 g-lg-4 justify-content-center">
            <div className="col-lg-4">
              <div className="service-box aos-init" data-aos="fade-up">
                <Link className="service-box-img" to="/items/indoor-aquatics">
                  <img src={IMAGES.indoorAquatics} />
                  <div className="arrow-hover">Indoor Aquatics</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="who-we-are py-5 my-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="fw-noraml text-primary aos-init aos-animate" data-aos="fade-up">Who we are</h2>
            </div>
            <div className="col-lg-9 aos-init aos-animate" data-aos="fade-up">
              <p> Turkmen Gala is a one of main and decade experienced Turkmenistan's conglomerate pursuing a highly focused approach of establishing, incorporating, acquiring, and delivering enterprises. Turkmen Gala has enjoyed a track record of consistent entrepreneurship, innovation, performance, reliability and total customer satisfaction.</p>
              <Link className="text-primary fw-bold aos-init" data-aos="fade-up" to={"/who_we_are"}>Learn more <img src={IMAGES.ArrowR} className="ms-2" /></Link>
            </div>
          </div>
          <div className="row pt-lg-5 mt-lg-2">
            <div className="col-lg-12 text-center">
              <h1 className="fw-light pt-2 aos-init" data-aos="fade-up">Our Partners</h1>
            </div>
            <div className="col-lg-12 aos-init" data-aos="fade-up">
              <div className="row our-partners-logo mt-3 justify-content-center">
                <MultiCarousel
                  infinite={true}
                  autoPlay={true}
                  responsive={{
                    desktop: {
                      breakpoint: { max: 3000, min: 1024 },
                      items: 6
                    },
                    tablet: {
                      breakpoint: { max: 1024, min: 464 },
                      items: 3
                    },
                    mobile: {
                      breakpoint: { max: 464, min: 0 },
                      items: 1
                    }
                  }}
                >
                  <div className="m-3 text-center">
                    <img src={IMAGES.op3} loading='lazy' width="120" alt="Unique Group Fze" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op18} loading='lazy' width="120" alt="DK-Lok" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op4} loading='lazy' width="120" alt="Diatech International Fze" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op17} loading='lazy' width="120" alt="Cleanova" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op15} loading='lazy' width="120" alt="MRA" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op7} loading='lazy' width="120" alt="KCI" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op1} loading='lazy' width="120" alt="ATMOS" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op11} loading='lazy' width="120" alt="CODEL" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op16} loading='lazy' width="120" alt="AUBIN" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op13} loading='lazy' width="120" alt="COLDPAD" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op5} loading='lazy' width="120" alt="Enerpac" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op20} loading='lazy' width="120" alt="CHESTERTON" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op14} loading='lazy' width="120" alt="3X Engineering S.A.M" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op9} loading='lazy' width="120" alt="Ovo Lifts" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op12} loading='lazy' width="120" alt="Apave" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op8} loading='lazy' width="120" alt="IMI Critical Engineering" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op19} loading='lazy' width="120" alt="JVS Engineers" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op2} loading='lazy' width="120" alt="Habu Technology FZCO" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op5} loading='lazy' width="120" alt="EGA Master S.R" />
                  </div>
                  <div className="m-3 text-center">
                    <img src={IMAGES.op6} loading='lazy' width="120" alt="Welltec" />
                  </div>
                </MultiCarousel>
              </div>
              <div className="row pt-lg-5 mt-lg-2">
                <div className="col-lg-3">
                  <h1 className="fw-light pt-2 aos-init" data-aos="fade-up">Our news</h1>
                </div>
                <div className="col-lg-7 aos-init" data-aos="fade-up">
                  <div id="carouselExampleControls2" className="carousel slide logo-news-slider" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="logo-news-box">
                          <div className="logo-news d-flex align-items-center">
                            <div>
                              <img width="80" src={IMAGES.logoV} />
                            </div>
                            <div className="compnayname ps-4">
                              <h3>We are proud to announce our  partnership with #WellTec</h3>
                            </div>
                          </div>
                          <p className="logo-news-box-text" style={{ textAlign: "center" }}>
                            <img style={{ width: "100%" }} src={IMAGES.op6} /><br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-lg-5 mt-lg-2">
                <div className="col-lg-3">
                  <h1 className="fw-light pt-2 aos-init" data-aos="fade-up">We comply</h1>
                </div>
                <div className="col-lg-7 aos-init" data-aos="fade-up">
                  <Carousel className="logo-news-slider We-complies-slider" indicators={false}>
                    <Carousel.Item>
                      <div className="logo-news-box">
                        <div className="logo-news d-flex align-items-center border-0 justify-content-center">
                          <div>
                            <img width="80" src={IMAGES.IntegratedManagementSystem} />
                          </div>
                          <div className="compnayname ps-4">
                            <h3>Integrated Management System</h3>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="logo-news-box">
                        <div className="logo-news d-flex align-items-center border-0 justify-content-center">
                          <div>
                            <img width="80" src={IMAGES.ISO9001} />
                          </div>
                          <div className="compnayname ps-4">
                            <h3>ISO 9001-2015 Certificate</h3>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="logo-news-box">
                        <div className="logo-news d-flex align-items-center border-0 justify-content-center">
                          <div>
                            <img width="80" src={IMAGES.ISO45001} />
                          </div>
                          <div className="compnayname ps-4">
                            <h3>ISO 45001-2018 Certificate</h3>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="logo-news-box">
                        <div className="logo-news d-flex align-items-center border-0 justify-content-center">
                          <div>
                            <img width="80" src={IMAGES.ISO14001} />
                          </div>
                          <div className="compnayname ps-4">
                            <h3>ISO 14001-2015 Certificate</h3>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;