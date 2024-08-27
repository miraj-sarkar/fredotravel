"use client";
import ContactForm from "@/Components/MiniComponents/ContactForm/ContactForm";
import Footer from "@/Components/Web-layout/Footer";
import Header from "@/Components/Web-layout/Header";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const page = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img
              src="https://travosy.vercel.app/static/media/travel-train-station.6dc1518ddc3a52fac7ace186e2d40593.svg"
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default page;
