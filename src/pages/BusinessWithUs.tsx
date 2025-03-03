import React from 'react'
import { IMAGES } from '../utils/staticJSON'
import MultiCarousel from "react-multi-carousel";
import { Link } from 'react-router-dom';

const BusinessWithUs: React.FC = () => {
    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_business_with_us} width="100%" />
            </section>
            <section className="py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <div className="title pb-1 pt-2 fw-normal text-primary aos-init aos-animate" data-aos="fade-up">Business with us</div>
                            <p className="pt-3 pb-0 text-center fw-bold aos-init aos-animate" data-aos="fade-up">Turkmen Gala HJ has a successful heritage of being a trusted partner to numerous clients, in Turkmenistan. Client satisfaction is at the centre of all the projects we deliver, thus establishing lasting relationships with our clients, partners, and shareholders. As we look forward to a futuristic, innovative approach, we will continue to explore opportunities that benefit our clients.</p>
                            <p className="aos-init" data-aos="fade-up"><b>COUNTRY VALUE<br />"Develop Locals" </b></p>
                            <p className="aos-init" data-aos="fade-up">We actively promote buying and sourcing our supplies and services within Turkmenistan, whenever this is possible. We love Turkmenistan and strive to support the community and local economy whenever the opportunity arises.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="business-units">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto text-center">
                            <div className="title pb-1 pt-2 fw-normal text-primary aos-init" data-aos="fade-up">Business Units</div>
                            <p className="pt-3 pb-0 text-center text-white aos-init" data-aos="fade-up">We always strive to create a well-aligned partner ecosystem that aims at generating mutually beneficial investment and expansion options. We apply expertise and transparency in all projects and services we deliver across our Business Units. </p>
                            <div className="btn-bssines-units aos-init" data-aos="fade-up">
                                <Link className="btn btn-grey" to={'/energy_sector'}>Energy Sector</Link>
                                <Link className="btn btn-warning" to={'/infra_sector'}>Infra Sector</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center ">
                            <div className="title pb-1 pt-2 fw-normal text-primary aos-init" data-aos="fade-up">Our Partners</div>
                            <p className="pt-3 pb-0 text-center aos-init" data-aos="fade-up">Over a decade we have been successful in building a reputed clientele. Our team is dedicated toward maintaining a proactive approach that not only helps our clients, but also accelerates the growth of Turkmen Gala HJ. We are committed in ensuring that the standards of our business continue to nurture in an effective manner.</p>
                        </div>
                    </div>
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
                </div>
            </section>
        </>
    )
}

export default BusinessWithUs;