"use client";

import { blogs } from "@/utils/data";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const page = () => {
  const router = useRouter();

  const handleReadMoreClick = (id) => {
    router.push(`/blog-details/${id}`);
  };
  return (
    <div>
      <div style={{ margin: "200px 0px" }} data-aos="fade-down">
        <Container>
          <div style={{ margin: "80px 0px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "30px" }}>Travel Blogs</h2>
            <p style={{ color: "gray" }}>
              Planning for a trip? We will organize your trip with the best
              places and within <br /> best budget!
            </p>
          </div>
          <div>
            <Row xs={1} md={3} className="g-4">
              {blogs.map((BlogData, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={BlogData.image}
                      className="zoom-out"
                    />
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignContent: "center",
                        }}
                      >
                        {" "}
                        <IoTimeOutline style={{ fontSize: "20px" }} />
                        <p style={{ color: "gray" }}>
                          {BlogData.time} mins ago{" "}
                          <span style={{ color: "red" }}> by Travel</span>
                        </p>
                      </div>
                      <Card.Text>
                        <h6>{BlogData.caption}</h6> <br />
                        <p style={{ color: "gray" }}>
                          {BlogData.shortDescription}
                        </p>
                      </Card.Text>
                      <Button
                        variant="link"
                        className="explore-button"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          marginLeft: "0px",
                        }}
                        onClick={() => handleReadMoreClick(BlogData.id)}
                      >
                        Read More <FaArrowRight style={{ fontSize: "14px" }} />
                      </Button>
                    </Card.Body>
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
