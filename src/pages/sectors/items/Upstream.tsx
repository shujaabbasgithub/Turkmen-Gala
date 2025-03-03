import React from 'react'
import { IMAGES } from '../../../utils/staticJSON'
import { Link } from 'react-router-dom'

const Upstream: React.FC = () => {
    return (
        <>
          <section className="service py-5 mb-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-11 m-auto">
                  <div className="title pb-1 pt-2 text-center aos-init aos-animate" data-aos="fade-up">
                    Upstream
                  </div>
                  <div className="pt-3 pb-4 text-center item-desc aos-init aos-animate" data-aos="fade-up">
                    <h1 style={{color: "rgb(34, 34, 34)", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "small"}}></h1>
                    <h4 style={{textAlign: "center"}} className="">
                      <b>Empowers Upstream Operational Efficiency through Technology</b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row g-4 g-lg-4 justify-content-center">
                <div className="col-lg-4">
                  <div className="service-box aos-init" data-aos="fade-up">
                    <Link className="service-box-img" to="/details/completion">
                      <img className='img-fluid' src={IMAGES.completion} loading='lazy' alt='' />
                      <div className="arrow-hover">Completion</div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service-box aos-init" data-aos="fade-up">
                    <Link className="service-box-img" to="/details/intervention">
                      <img className='img-fluid' src={IMAGES.intervention} loading='lazy' alt='' />
                      <div className="arrow-hover">Intervention</div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service-box aos-init" data-aos="fade-up">
                    <Link className="service-box-img" to="/details/engineered-leak-sealing-solutions">
                      <img className='img-fluid' src={IMAGES.engineeredLeakSealingSolutions} loading='lazy' alt='' />
                      <div className="arrow-hover">ENGINEERED LEAK SEALING SOLUTIONS</div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service-box aos-init" data-aos="fade-up">
                    <Link className="service-box-img" to="/details/diverter-system">
                      <img className='img-fluid' src={IMAGES.diverterSystem} loading='lazy' alt='' />
                      <div className="arrow-hover">DIVERTER SYSTEM</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default Upstream