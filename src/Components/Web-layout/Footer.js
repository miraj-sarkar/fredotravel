import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ background: "#161C28", color: "white" }}>
      <Container>
        <div style={{ padding: "100px 0px" }}>
          <Row>
            <Col sm={6} md={3} lg={3}>
              <div>
                <h3>Travosy</h3> <br />
                <p>
                  Planning for a trip? We will organize your trip with the best
                  places and <br /> within best budget!
                </p>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <FaFacebookF
                    style={{
                      cursor: "pointer",
                      color: "#3b5998",
                      fontSize: "20px",
                    }}
                  />
                  <FaInstagram
                    style={{
                      cursor: "pointer",
                      color: "#e4405f",
                      fontSize: "20px",
                    }}
                  />
                  <FaTwitter
                    style={{
                      cursor: "pointer",
                      color: "#55acee",
                      fontSize: "20px",
                    }}
                  />
                  <FaLinkedinIn
                    style={{
                      cursor: "pointer",
                      color: "#0077b5",
                      fontSize: "20px",
                    }}
                  />
                  <FaYoutube
                    style={{
                      cursor: "pointer",
                      color: "#cd201f",
                      fontSize: "20px",
                    }}
                  />
                  <FaGithub
                    style={{
                      cursor: "pointer",
                      color: "#333",
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h6 style={{ fontWeight: "700" }}>Office</h6> <br />
              <p>Travosy Tour & Travels</p>
              <p>
                <CiLocationOn /> Dhanmondi,Dhaka
              </p>
              <p>
                <MdOutlineMail /> fredo@gmail.com
              </p>
              <p>
                <MdCall /> +880-147113179
              </p>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h6 style={{ fontWeight: "700" }}>Company</h6> <br />
              <p>
                <MdKeyboardArrowRight />
                About us
              </p>
              <p>
                <MdKeyboardArrowRight />
                Service
              </p>
              <p>
                <MdKeyboardArrowRight />
                Team
              </p>
              <p>
                <MdKeyboardArrowRight />
                Pricing
              </p>
              <p>
                <MdKeyboardArrowRight />
                Blogs
              </p>
            </Col>
            <Col sm={6} md={3} lg={3}>
              <h6 style={{ fontWeight: "700" }}>Newsletter</h6> <br />
              <p>Sign up and receive the latest tips via email.</p>
              <p>Write Your E-mail</p>
              <Form.Control type="email" id="email" />
            </Col>
          </Row>
        </div>
      </Container>
      <hr style={{ color: "gray" }} />
      <p
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "30px",
        }}
      >
        2024 &copy; Travel. Desiged and Developed by FredoCloud
      </p>
    </div>
  );
};

export default Footer;
