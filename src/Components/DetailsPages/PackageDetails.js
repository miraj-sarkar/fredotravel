"use client";

import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { TbArrowZigZag } from "react-icons/tb";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { useParams } from "next/navigation";
import Footer from "../Web-layout/Footer";
import Header from "../Web-layout/Header";
import BookingForm from "../MiniComponents/BookingForm";
import { tourPackages } from "@/utils/data";

const PackageDetails = () => {
  const { id } = useParams();

  const selectedPackage = tourPackages.find((p) => p.id === Number(id));

  if (!selectedPackage) {
    return <p>Package not found</p>;
  }
  console.log("Selected Package:", selectedPackage);
  console.log(id);
  return (
    <div>
      <Header />
      <section
        className="banner"
        style={{
          height: "40vh",
          backgroundImage:
            "url(https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "6vh",
            left: 0,
            width: "100%",
            height: "40vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <h3 style={{ margin: "0 auto", color: "white", fontWeight: "700" }}>
          {selectedPackage.caption}
        </h3>
      </section>
      <section style={{ margin: "100px 0px" }}>
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              <div>
                <Row>
                  <Col md={8}>
                    <img
                      src="https://travosy.vercel.app/static/media/1.07f134933e8c8ac359b9.jpg"
                      alt=""
                      style={{ width: "100% ", height: "200px" }}
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      src="https://travosy.vercel.app/static/media/2.e083e5af6b98325ac9ed.jpg"
                      alt=""
                      style={{ width: "100% ", height: "200px" }}
                    />
                  </Col>
                </Row>{" "}
                <br />
                <Row>
                  <Col md={4}>
                    {" "}
                    <img
                      src="https://travosy.vercel.app/static/media/3.597c87bf0632b9e644e2.jpg"
                      alt=""
                      style={{ width: "100% ", height: "200px" }}
                    />
                  </Col>
                  <Col md={8}>
                    {" "}
                    <img
                      src="https://travosy.vercel.app/static/media/4.738a1d5ee8bdcfd7b945.jpg"
                      alt=""
                      style={{ width: "100% ", height: "200px" }}
                    />
                  </Col>
                </Row>
              </div>{" "}
              <br />
              <h4 style={{ marginTop: "10px" }}> {selectedPackage.caption}</h4>
              <div
                style={{
                  margin: "20px 0px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <CiLocationOn style={{ color: "red" }} />
                <p
                  style={{
                    marginTop: "-4px",
                    marginLeft: "7px",
                    color: "gray",
                  }}
                >
                  {selectedPackage.location}
                </p>
              </div>
              <Row>
                <Col md={2}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <IoTimeOutline style={{ color: "red", fontSize: "25px" }} />
                    <div>
                      <p>Duration</p>
                      <p>2 Day</p>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  {" "}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TbArrowZigZag style={{ color: "red", fontSize: "25px" }} />
                    <div>
                      <p>Type</p>
                      <p>Adventure</p>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <AiOutlineUsergroupDelete
                      style={{ color: "red", fontSize: "25px" }}
                    />
                    <div>
                      <p>Group Size:</p>
                      <p>50 peoples</p>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <MdLanguage style={{ color: "red", fontSize: "25px" }} />
                    <div>
                      <p>Languages</p>
                      <p>English</p>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FaDollarSign style={{ color: "red", fontSize: "25px" }} />
                    <div>
                      <p>50$ /person</p>
                      <p>1 Day</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div>
                {" "}
                <br />
                <h6>Tour Descriptios:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates modi sed commodi quasi, illum consequatur, dolor
                  repellat eveniet facere impedit placeat quos. Corrupti neque
                  obcaecati modi reiciendis reprehenderit et delectus, quia ea
                  enim ad. Aperiam inventore accusamus quia eligendi minus!
                </p>
              </div>{" "}
              <br />
              <div>
                <h6>Questios & Answers:</h6>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>How does it Works?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is this?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Various Tour Packages?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <BookingForm />
              <div>Map will be here</div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default PackageDetails;
