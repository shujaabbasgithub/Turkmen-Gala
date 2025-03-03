import React from "react";
import { Form } from 'react-bootstrap'
import { IMAGES } from "../utils/staticJSON";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <section className="form-contact">
          <div className="container">
            <h1 className="pb-4 aos-init aos-animate" data-aos="fade-up"> Connect us</h1>
            <Form>
              <div className="row aos-init aos-animate" data-aos="fade-up">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <input type="text" className="form-control" placeholder="Name" name="name" required />
                    </div>
                    <div className="col-lg-6">
                      <input type="number" className="form-control" placeholder="Phone number" min="0" name="phone" required />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" className="form-control" placeholder="E-mail" name="email" required />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder="Company Name" name="company_name" required />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder="Country" name="country" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" className="form-control" placeholder="Enquiry type" name="type" required />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="form-control" placeholder="Message" name="message" required></textarea>
                  <button type="submit" className="btn  mt-4 btn-warning w-100" style={{ marginTop: "-1px" }}> Submit</button>
                </div>
              </div>
            </Form>
          </div>
        </section>
        <section className="pt-4">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-3 mb-4">
                <h6 className="fw-bold mb-0">Energy Sector</h6>
                <ul className="footer-link">
                  <li><Link to="/items/upstream">Upstream</Link></li>
                  <li><Link to="/items/inspection">Inspection</Link></li>
                  <li><Link to="/items/ae-mi">AE &amp; MI</Link></li>
                  <li><Link to="/items/automation-and-measuring">Automation and Measuring</Link></li>
                  <li><Link to="/items/efcc-and-maintenance">EFCC and Maintenance</Link></li>
                  <li><Link to="/items/topside-underwater">Topside &amp; Underwater</Link></li>
                  <li><Link to="/items/products-procurement">Products &amp; Procurement</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 mb-2">
                <h6 className="fw-bold mb-0">Infra Sector</h6>
                <ul className="footer-link">
                  <li><Link to="/items/indoor-aquatics">Indoor Aquatics</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-lg-3 mb-4 footer-adderss">
                <h6 className="fw-bold mb-2"> Address </h6>
                <p className="addresslabel emailbottom">
                  <span className="conticons">
                    <svg width="24" height="24" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.1987 16.6513C32.4412 17.7289 34.311 19.4511 35.569 21.5975C36.8271 23.7439 37.416 26.2168 37.2602 28.6998M32.7237 6.97536C37.4902 8.8017 41.494 12.1944 44.078 16.5966C46.6616 20.9987 47.672 26.1486 46.9425 31.2006M31.4944 55.7453C10.7868 50.3415 -1.61935 29.174 3.78444 8.46647C4.02824 7.53221 4.30414 6.61485 4.61062 5.71526C4.96235 4.68284 5.13821 4.16665 5.53904 3.75956C5.87103 3.42242 6.37406 3.15179 6.83835 3.06054C7.3989 2.95039 7.97963 3.10193 9.14106 3.40502L15.9561 5.18345C16.9328 5.43833 17.4211 5.56577 17.7978 5.83575C18.1306 6.07425 18.3997 6.3908 18.5814 6.75762C18.7872 7.17286 18.8344 7.67536 18.9286 8.68036L19.7251 17.1738C19.8347 18.343 19.8896 18.9277 19.7245 19.4257C19.5789 19.8649 19.3141 20.2549 18.9599 20.5526C18.5583 20.8902 17.9948 21.0554 16.8678 21.3857L13.0387 22.5082C14.274 29.6746 18.1127 36.2339 23.7652 40.8097L26.6156 38.0174C27.4546 37.1954 27.8739 36.7845 28.3646 36.5991C28.7974 36.4356 29.2671 36.3951 29.7215 36.4827C30.2366 36.582 30.72 36.9156 31.6867 37.5826L38.7078 42.4276C39.5385 43.001 39.954 43.2877 40.2157 43.6701C40.4469 44.008 40.5918 44.3974 40.637 44.8043C40.6886 45.2647 40.5612 45.7531 40.3063 46.7299L38.5279 53.5449C38.2248 54.7063 38.0732 55.2871 37.7031 55.7222C37.3966 56.0828 36.9148 56.3896 36.4585 56.5144C35.9073 56.6651 35.3712 56.5663 34.2985 56.3688C33.3637 56.1967 32.4286 55.9891 31.4944 55.7453Z" stroke="#3CB4E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  +993 12 48 33 03
                </p>
                <p className="addresslabel faxnumber">
                  <span className="conticons">
                    <svg width="24" height="24" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M45.1657 24.2492H21.7284V30.187H45.1657V24.2492Z" fill="#3CB4E5"></path>
                      <path d="M27.1378 34.5501H21.7284V37.2887H27.1378V34.5501Z" fill="#3CB4E5"></path>
                      <path d="M45.1658 34.5501H39.7573V37.2887H45.1658V34.5501Z" fill="#3CB4E5"></path>
                      <path d="M36.1521 34.5501H30.7428V37.2887H36.1521V34.5501Z" fill="#3CB4E5"></path>
                      <path d="M27.1378 40.2294H21.7284V42.9681H27.1378V40.2294Z" fill="#3CB4E5"></path>
                      <path d="M45.1658 40.2294H39.7573V42.9681H45.1658V40.2294Z" fill="#3CB4E5"></path>
                      <path d="M36.1521 40.2294H30.7428V42.9681H36.1521V40.2294Z" fill="#3CB4E5"></path>
                      <path d="M27.1378 45.9073H21.7284V48.6475H27.1378V45.9073Z" fill="#3CB4E5"></path>
                      <path d="M45.1658 45.9073H39.7573V48.6475H45.1658V45.9073Z" fill="#3CB4E5"></path>
                      <path d="M36.1521 45.9073H30.7428V48.6475H36.1521V45.9073Z" fill="#3CB4E5"></path>
                      <path d="M46.1366 11.0184H45.411V0H21.4998V11.0184H8.53475C3.82868 11.0184 0 14.8471 0 19.5531V48.4653C0 53.1712 3.82868 57 8.53475 57H46.1365C51.5185 57 55.8973 52.6212 55.8973 47.2392V20.7798C55.8974 15.3971 51.5187 11.0184 46.1366 11.0184ZM24.0445 2.54474H42.8661V17.8134H24.0445V2.54474ZM14.4105 52.7587H8.53475C6.16312 52.7587 4.24127 50.8378 4.24127 48.4653V19.5531C4.24127 17.1806 6.16312 15.2596 8.53475 15.2596H14.4104L14.4105 52.7587ZM51.6561 47.2392C51.6561 50.2876 49.1859 52.7586 46.1366 52.7586H16.9353V15.2596H21.4998V20.3582H45.411V15.2596H46.1366C49.1859 15.2596 51.6561 17.7299 51.6561 20.78V47.2392Z" fill="#3CB4E5"></path>
                      <path d="M40.1466 5.72583H27.0134V7.42236H40.1466V5.72583Z" fill="#3CB4E5"></path>
                      <path d="M34.8449 10.3911H27.0134V12.0877H34.8449V10.3911Z" fill="#3CB4E5"></path>
                    </svg>
                  </span>
                  +993 12 48 33 23 (Fax)
                </p>
                <p className="addresslabel emailhold">
                  <span className="conticons">
                    <svg width="24" height="24" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.875 0.625L0.5 3V41L2.875 43.375H55.125L57.5 41V3L55.125 0.625H2.875ZM5.25 8.36908V38.625H52.75V8.36829L28.9997 29.9597L5.25 8.36908ZM48.9814 5.375H9.01789L28.9997 23.5403L48.9814 5.375Z" fill="#3CB4E5"></path>
                    </svg>
                  </span>
                  info@turkmengala.com
                </p>
                <h6 className="fw-bold mb-0 linkend">Linkedln</h6>
                <p> www.linkedln.com/turkmengala </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footercont">
                <h6 className="fw-bold mb-2">Contact</h6>
                <p>
                  <span className="addresslabel">Main Office</span>Garashsyzlyk str., 20, Ashgabat, Turkmenistan
                </p>
                <p>
                  <span className="addresslabel">Technical Office</span>Garashsyzlyk str., 90, Ashgabat, Turkmenistan
                </p>
                <p>
                  <span className="addresslabel">Base Office</span>Kiyanli Settlement, Turkmenbashy etrap, Balkan Velayat, Turkmenistan
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="Copyright-top py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={IMAGES.logoSVG} width="150" />
              </div>
              <div className="col-lg-6 text-lg-end">
                Developed by <b> Caspy</b>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2 Copyright" style={{ backgroundColor: "rgb(244, 125, 32)" }}>
          Copyright © 2025 <Link className="text-reset" to="/dashboard">Türkmen Gala HJ</Link> - All right reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;