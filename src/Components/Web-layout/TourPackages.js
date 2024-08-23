import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Packages = [
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
  {
    image: "2.e083e5af6b98325ac9ed.jpg",
    location: "Dhaka",
    caption: "We Need this",
    ratings: "4",
    price: "120 USD",
  },
];
const TourPackages = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <div style={{ margin: "80px 0px", textAlign: "center" }}>
          <h1 style={{ marginBottom: "30px" }}>Tour Packages</h1>
          <p style={{ color: "gray" }}>
            Planning for a trip? We will organize your trip with the best places
            and within <br /> best budget!
          </p>
        </div>
        <div>
          <Row xs={1} md={3} className="g-4">
            {Packages.map((_package, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={_package.image} />
                  <Card.Body>
                    <Card.Title>{_package.location}</Card.Title>
                    <Card.Text>{_package.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TourPackages;
