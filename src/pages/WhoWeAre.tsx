import React from 'react'
import { IMAGES } from '../utils/staticJSON'
import Zoom from "react-medium-image-zoom";

const WhoWeAre: React.FC = () => {
    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_who_we_are} width="100%" alt="" />
            </section>
            <section className="py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 m-auto text-center">
                            <div className="title pb-1 pt-2 fw-normal text-primary aos-init aos-animate" data-aos="fade-up">
                                Who we are
                            </div>
                            <p className="pt-3 pb-0 text-center aos-init aos-animate" data-aos="fade-up">
                                Turkmen Gala is a local company that has supported the growth of Turkmenistan's energy sector for more than 12 years. We are proud to provide proficient solutions and expertise throughout the region. Over the years Turkmen Gala has shaped a business philosophy where partnerships, service quality, consistency, and above all customer satisfaction are paramount.
                            </p>
                            <p data-aos="fade-up" className="aos-init">
                                Turkmen Gala holds a track record on Innovation, Performance, Reliability, and Total Customer Satisfaction.
                            </p>
                            <p data-aos="fade-up" className="aos-init">
                                Our Approach Has Been to Build on The Growth Dynamics of The Region and To Combine International Management Disciplines, Thereby Distinguishing It as an Organization Possessing Regional Expertise, Enhanced by Local Knowledge. It Is the Hard Work, Commitment, And Dedication of Our People That Has Resulted in Consistent Growth and Success. One of the Key Objectives of Our Corporate Strategy Is to Attract, Maintain and Develop Talents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="business-units p-0 vision-mission-container">
                <div className="container">
                    <div className="row">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 px-0 our-left our-about aos-init aos-animate" data-aos="fade-up">
                                    <div className="our-about-box our-vision">
                                        <h3 className="text-uppercase pb-2">Our vision</h3>
                                        To continuously execute our potential while relentlessly evolving by creating value and growing our market share through Excellence.
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0 our-right our-about aos-init aos-animate" data-aos="fade-up">
                                    <div className="our-about-box">
                                        <h3 className="text-uppercase pb-2">Our mission</h3>
                                        To be the professional and reputable partner of choice for delivering reliable solutions, with cutting edge Technologies while equipped with a proﬁcient team proactively through Operational excellence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="business-units p-0 ethos-container">
                <div className="container">
                    <div className="row">
                        <section className="out-ethos">
                            <div className="container text-center aos-init aos-animate" data-aos="fade-up">
                                <h3 className="text-uppercase pb-2">Our ethos</h3>
                                Our ethos is simple. We are one family at Turkmen Gala. We strongly believe that by respecting and investing in our Team development, our business effortlessly ﬂourishes. Our people are our principal resource which is recognized and valued. Annually, there are various incentives & recognition programs that acknowledge their invaluable contribution and commitment to our Family to express gratitude and commitment to them.
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className="ims-certificate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center ">
                            <div className="title pb-0 pt-2 fw-normal text-primary aos-init aos-animate" data-aos="fade-up">
                                Our core values
                            </div>
                            <p className="pt-3 pb-5 text-center aos-init aos-animate" data-aos="fade-up">
                                "TURKMEN GALA" HJ is a Turkmen certiﬁed company registered under license No. 21010027 Our specializations are in the oil &amp; gas (onshore and offshore), industrial sector and energy industries:
                            </p>
                        </div>
                    </div>
                    <div className="row gy-lg-5 gy-4 text-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.family_ocv} loading='lazy' alt="Family icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Family</div>
                                <p>
                                    FAMILY comes first, In Turkmen Gala is - our customers, partners and our most valuable asset - our team
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.growth_ocv} loading='lazy' alt="Growth icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Growth</div>
                                <p>
                                    Nothing is Constant. By embracing change, we GROW, LEARN AND DRIVE the business towards an assured future.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.integrity_ocv} loading='lazy' alt="Integrity icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Integrity</div>
                                <p>
                                    We uphold the highest ETHICAL principles and Actively foster TRUST &amp; RESPECT
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.quality_ocv} loading='lazy' alt="Quality icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Quality</div>
                                <p>
                                    We provide unparallel COST-EFFECTIVE SOLUTIONS to our ESTEEMED Clientele.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.safety_ocv} loading='lazy' alt="Safety icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Safety</div>
                                <p>
                                    For our Corps &amp; Community, Safety is paramount - without it nothing else Matters.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.innovation_ocv} loading='lazy' alt="Innovation icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Innovation</div>
                                <p>
                                    As empowered &amp; DYNAMIC Entrepreneurs, our team OFFERS INNOVATIVE leading solutions through delivering best "know how".
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="our-core-values">
                                <div className="d-flex justify-content-center">
                                    <div className="our-core-values-iocn aos-init" data-aos="zoom-out-up">
                                        <img className='img-fluid' src={IMAGES.effectiveness_ocv} loading='lazy' alt="Effectiveness icon" />
                                    </div>
                                </div>
                                <div className="our-core-values-title">Effectiveness</div>
                                <p>
                                    We are HUMBLE, HARDWORKING, INGENIOUS and Competent which means that our commitments will be delivered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-lg-5 pt-4">
                        <div className="col-lg-10 m-auto text-center aos-init" data-aos="fade-up">
                            <div className="title pb-0 pt-2 fw-normal text-primary">
                                Company Registration License
                            </div>
                            <p className="pt-3 pb-5 text-center aos-init" data-aos="fade-up">
                                "TURKMEN GALA" HJ is a Turkmen certiﬁed company registered under license No. 21010027 Our specializations are in the oil &amp; gas (onshore and offshore), industrial sector and energy industries:
                            </p>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center text-center">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL1}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL2}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL3}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL4}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL5}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL6}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL7}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL8}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL9}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 aos-init" data-aos="fade-up">
                            <Zoom>
                                <img
                                    src={IMAGES.RL10}
                                    style={{ cursor: "pointer" }}
                                    loading='lazy'
                                    width="200"
                                    height="200"
                                    alt=""
                                />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre