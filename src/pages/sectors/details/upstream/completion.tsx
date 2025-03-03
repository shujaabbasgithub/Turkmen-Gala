import React from 'react'
import { IMAGES } from '../../../../utils/staticJSON';
import DetailsBox from '../../../../components/DetailsBox';

const Completion: React.FC = () => {
    return (
        <>
            <section className="service py-5 mb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <h1 className="title pb-1 pt-2 text-center aos-init aos-animate" data-aos="fade-up">Completion</h1>
                            <div className="pt-3 pb-4 text-center aos-init" data-aos="fade-up">
                                <img className='img-fluid' style={{ width: '300px', height: '150px', objectFit: 'cover' }} loading='lazy' src={IMAGES.op6} />
                                <p className="MsoNoSpacing">
                                    <b>
                                        Our unique solutions span the entire life cycle of a well and challenge conventional thinking on Completions and well integrity.
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <DetailsBox
                        title='Liner Hanger'
                        description='Compliance to damaged or deformed casings, enhanced reliability for the life of the well'
                        imageSrc={IMAGES.completionS1}
                    />
                    <DetailsBox
                        title='Tieback Liner'
                        description='Ensure reliability and efficiency while simplifying well construction'
                        imageSrc={IMAGES.completionS2}
                    />
                    <DetailsBox
                        title='Advanced Well Architecture'
                        description='The AWA system provides zonal isolation and zonal control –for an open hole intelligent completion'
                        imageSrc={IMAGES.completionS3}
                    />
                    <DetailsBox
                        title='Well Construction & Integrity'
                        description='Eliminate sustained casing pressure via enhanced well integrity'
                        imageSrc={IMAGES.completionS4}
                    />
                    <DetailsBox
                        title='Inner-String Packer'
                        description='Create a reliable and high-integrity seal'
                        imageSrc={IMAGES.completionS5}
                    />
                    <DetailsBox
                        title='Zonal Isolation'
                        description='Enhanced zonal isolation within the reservoir'
                        imageSrc={IMAGES.completionS6}
                    />
                    <DetailsBox
                        title='Zonal Control'
                        description='Optimize well delivery in changing reservoir conditions'
                        imageSrc={IMAGES.completionS7}
                    />
                    <DetailsBox
                        title='Well Abandonment'
                        description='Enhance well construction for CAPEX effective P&A'
                        pdfUrl='https://turkmengala.com/admin/storage/item_feature/pdf/vUVVLUv7gzBjnSS75U6NidTrRhjsghwdOJjOaLzz.pdf'
                        imageSrc={IMAGES.completionS8}
                    />
                    <DetailsBox
                        title='CARBON CAPTURE AND STORAGE'
                        description='To reduce CO2 emissions in the atmosphere and mitigate climate change'
                        imageSrc={IMAGES.completionS9}
                    />
                    <div className="pt-3 pb-4 text-center" data-aos="fade-up" >
                        <img src={IMAGES.completionS10}
                            loading='lazy'
                            style={{ width: '100%' }}
                            alt=""
                        />
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3">
                            <a href="javascript:void(0);">
                                <img
                                    src={IMAGES.completionS11}
                                    loading='lazy'
                                    width="100%"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <a href="javascript:void(0);">
                                <img
                                    src={IMAGES.completionS12}
                                    loading='lazy'
                                    width="100%"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <a href="javascript:void(0);">
                                <img
                                    src={IMAGES.completionS13}
                                    loading='lazy'
                                    width="100%"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <a href="javascript:void(0);">
                                <img
                                    src={IMAGES.completionS14}
                                    loading='lazy'
                                    width="100%"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Completion;