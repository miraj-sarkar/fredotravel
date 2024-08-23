import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ background: "#161C28", color: "white" }}>
      <Container>
        <div style={{ padding: "100px 0px" }}>
          <Row>
            <Col sm={6} md={3} lg={3}>
              <div>
                <h1>Travosy</h1>
                <p>
                  Planning for a trip? We will organize your trip with the best
                  places and within best budget!
                </p>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h2>Office</h2>
              <p>Travosy Tour & Travels</p>
              <p>Contact:fredo@gmail.com</p>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h2>Company</h2>
              <p>About us</p>
              <p>Service</p>
              <p>Team</p>
              <p>Pricing</p>
              <p>Blogs</p>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h2>Newsletter</h2>
              <p>Sign up and receive the latest tips via email.</p>
              <p>Write Your E-mail</p>
              <Form.Control type="email" id="email" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
