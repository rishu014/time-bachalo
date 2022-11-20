import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import contact from "../images/contact.png";

const Home = () => {
  const handleContactUs= ()=>{
    window.open("https://forms.gle/a8UQYibg6ngWLTyy6")  
  }
  return (
    <>
      <Header />
      <Container fluid className="h-75 ">
        <Row>
          <Col md={6}>
            <img src={contact} alt="i" className="w-90" />
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="w-90 text-dark-blue p-2 pb-5">
              <div className="fw-bold fs-1">CONTACT US</div>
              <div className="fs-5 py-3 pe-5">
                The official launch is designed to win your heart 💟.
                <br />
                Until then, if you'd want to start working with us and receive a fantastic
                product 👩‍💻, <br />
                Please click 🖱️ the button below and complete the form to witness
                our magic 🪄.
              </div>
              <div className="py-3">
                <button className="btn-lg btn btn-primary border-purple fw-bold px-4 bg-purple rounded-0 " onClick={handleContactUs}>
                  CONTACT 
                </button >
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
