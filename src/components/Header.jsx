import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import img from "../images/logo.png";
import "../App.css";

const Header = () => {
  return (
    <Navbar bg="transparent py-3  " variant="light" expand="lg" >
      <Container fluid className="p-0">
        <Navbar.Brand href="#home" className="fs-2 fw-bold logo-font">
          <div className="d-flex  bg-sky-blue curved-right">
            <div className=" py-2 curved-right bg-dark-sky-blue">
              <span className="text-dark-blue">&nbsp;&nbsp;&nbsp;&nbsp; T</span>
            </div>
            <div className="curved-right py-2 bg-sky-blue">
              <span className="text-dark-blue">B &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly w-100 ps-2 fs-5">
            <Nav.Link href="#home" className="text-dark-blue">HOME</Nav.Link>
            <Nav.Link href="#link" className="text-dark-blue">ABOUT US</Nav.Link>
            <Nav.Link href="#link" className="text-dark-blue">SERVICES</Nav.Link>
          </Nav>
          <div className="ms-auto me-5 ps-2">
            <button className="bg-light border-purple text-purple  btn rounded-0 px-4">
              SUPPORT
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
