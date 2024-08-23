import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      style={{
        height: "85vh",
        backgroundImage: "url('aer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        borderBottomRadius: "80%",
      }}
    >
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h5 style={{ fontWeight: "700", color: "white" }}>
              Find Your Ideal Stay
            </h5>
            <h1
              style={{
                fontWeight: "800",
                fontSize: "4em",
                padding: "30px 0px",
                color: "white",
              }}
            >
              Where Do You <br /> Want To Go?
            </h1>
            <p style={{ color: "white", fontWeight: "400" }}>
              Planning for a trip? We will organize your trip with the best{" "}
              <br />
              places and within best budget!
            </p>
            <Button
              variant="danger"
              style={{ marginTop: "30px", padding: "15px" }}
            >
              View Packages
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
