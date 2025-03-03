import React from 'react'
import { IMAGES } from '../utils/staticJSON';

const EnergySector: React.FC = () => {
    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_energy_sector} width="100%" />
            </section>
            <section className="service py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <div className="title pb-1 pt-2 text-center aos-init aos-animate" data-aos="fade-up">Energy Sector</div>
                            <p className="pt-3 pb-4 text-center aos-init aos-animate" data-aos="fade-up">
                                <strong>Turkmen Gala develops and delivers efficient, innovative, solutions for the energy sector.</strong>
                                <br />
                                <br />
                                Turkmen Gala ES is an Turkmenistan local company that has successfully contributed the growth of Turkmenistan’s energy sector for more than a decade.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 g-lg-4 justify-content-center">
                        <div className="col-lg-4">
                            <div className="service-box aos-init aos-animate" data-aos="fade-up">
                                <a className="service-box-img" href="/items/upstream">
                                    <img src={IMAGES.upstream} />
                                    <div className="arrow-hover">Upstream</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init aos-animate" data-aos="fade-up">
                                <a className="service-box-img" href="/items/inspection">
                                    <img src={IMAGES.inspection} />
                                    <div className="arrow-hover">Inspection</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init aos-animate" data-aos="fade-up">
                                <a className="service-box-img" href="/items/ae-mi">
                                    <img src={IMAGES.aemi} />
                                    <div className="arrow-hover">AE &amp; MI</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init" data-aos="fade-up">
                                <a className="service-box-img" href="/items/automation-and-measuring">
                                    <img src={IMAGES.automationMeasuring} />
                                    <div className="arrow-hover">Automation and Measuring</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init" data-aos="fade-up">
                                <a className="service-box-img" href="/items/efcc-and-maintenance">
                                    <img src={IMAGES.efccMaintenance} />
                                    <div className="arrow-hover">EFCC and Maintenance</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init" data-aos="fade-up">
                                <a className="service-box-img" href="/items/topside-underwater">
                                    <img src={IMAGES.topsideUnderwater} />
                                    <div className="arrow-hover">Topside &amp; Underwater</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box aos-init" data-aos="fade-up">
                                <a className="service-box-img" href="/items/products-procurement">
                                    <img src={IMAGES.productsProcurement} />
                                    <div className="arrow-hover">Products &amp; Procurement</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EnergySector;