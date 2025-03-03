import React, { useEffect, useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { IMAGES } from "../utils/staticJSON";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg"
      className={`navbar-light fixed-top py-0 ${isScrolled ? "navbar-dark bg-dark" : "navbar-light"}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={IMAGES.logoSVG}
            alt="turkman gala"
            title="logo white"
            className={`white-logo ${isScrolled ? "d-none" : ""}`}
          />
          <img
            src={IMAGES.logoDark}
            alt="turkman gala"
            title="logo"
            className={`logo2 ${isScrolled ? "" : "d-none"}`}
          />
        </Navbar.Brand>
        <Navbar.Toggle className="mobile-close-menu" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.7222" stroke="white" strokeWidth="0.555556"></circle>
              <path d="M28.7246 13.3333L11.1103 13.3333" stroke="white" strokeWidth="2.22222" strokeLinecap="round"></path>
              <path d="M28.7246 20L11.1103 20" stroke="white" strokeWidth="2.22222" strokeLinecap="round"></path>
              <path d="M28.7246 26.6666L11.1103 26.6666" stroke="white" strokeWidth="2.22222" strokeLinecap="round"></path>
            </svg>
          </span>
        </Navbar.Toggle>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to="/energy_sector">Energy Sector</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to="/infra_sector">Infra Sector</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to="/who_we_are">Who we are</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to="/business_with_us">Business with us</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to="/work_with_us">Connect Us</Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;