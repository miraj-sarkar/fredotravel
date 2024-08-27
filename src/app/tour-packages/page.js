"use client";

import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { tourPackages } from "@/utils/data";
import "../../Components/HomePage/style.css";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  const handleExploreClick = (id) => {
    router.push(`/package-details/${id}`);
  };
  return (
    <div>
      <div style={{ margin: "200px 0px" }} data-aos="fade-down">
        <Container>
          <div style={{ margin: "80px 0px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "30px" }}>Tour Packages</h2>
            <p style={{ color: "gray" }}>
              Planning for a trip? We will organize your trip with the best
              places and within <br /> best budget!
            </p>
          </div>
          <div>
            <Row xs={1} md={4} className="g-4">
              {tourPackages.map((Package, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={Package.image}
                      className="zoom-out"
                    />
                    <Card.Body>
                      <div
                        style={{
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
                          {Package.location}
                        </p>
                      </div>
                      <h6>{Package.caption}</h6>
                      <p>
                        Ratings : <FaStar style={{ color: "#FBBF24" }} />
                        <FaStar style={{ color: "#FBBF24" }} />
                        <FaStar style={{ color: "#FBBF24" }} />
                        <FaStar style={{ color: "#FBBF24" }} />
                        <FaStar style={{ color: "#FBBF24" }} />
                        5.0 (30)
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h6 style={{ marginTop: "10px", color: "red" }}>
                          $ {Package.price} / Day
                        </h6>
                        <Button
                          variant="link"
                          className="explore-button"
                          style={{ color: "gray", textDecoration: "none" }}
                          onClick={() => handleExploreClick(Package.id)}
                        >
                          Explore Now{" "}
                          <FaArrowRight style={{ fontSize: "14px" }} />
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
