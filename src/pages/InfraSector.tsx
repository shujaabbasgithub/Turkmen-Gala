import React from 'react'
import { IMAGES } from '../utils/staticJSON'
import { Link } from 'react-router-dom'

const InfraSector: React.FC = () => {
    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_infra_sector} width="100%" />
            </section>
            <section className="service py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <div className="title pb-1 pt-2 text-center aos-init aos-animate" data-aos="fade-up">Infra Sector</div>
                            <p className="pt-3 pb-4 text-center aos-init aos-animate" data-aos="fade-up">
                                <strong>Turkmen Gala Infra services and products provides smart and revolutionary technology.</strong>
                                <br />
                                <br />
                                Turkmen Gala ES is an Turkmenistan local company that has successfully contributed the growth of Turkmenistan’s energy sector for more than a decade
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 g-lg-4 justify-content-center">
                        <div className="col-lg-4">
                            <div className="service-box aos-init aos-animate" data-aos="fade-up">
                                <Link className="service-box-img" to="/items/indoor-aquatics">
                                    <img src={IMAGES.indoorAquatics} />
                                    <div className="arrow-hover">Indoor Aquatics</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfraSector