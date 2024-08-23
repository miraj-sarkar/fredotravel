import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BlogsData = [
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
const Blogs = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <div style={{ margin: "80px 0px", textAlign: "center" }}>
          <h1 style={{ marginBottom: "30px" }}>Travel Blogs</h1>
          <p style={{ color: "gray" }}>
            Planning for a trip? We will organize your trip with the best places
            and within <br /> best budget!
          </p>
        </div>
        <div>
          <Row xs={1} md={3} className="g-4">
            {BlogsData.map((BlogData, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={BlogData.image} />
                  <Card.Body>
                    <Card.Title>{BlogData.location}</Card.Title>
                    <Card.Text>{BlogData.caption}</Card.Text>
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

export default Blogs;
