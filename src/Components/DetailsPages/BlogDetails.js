"use client";

import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "@/utils/data";
import Header from "../Web-layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Web-layout/Footer";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();

  const selectedBlog = blogs.find((p) => p.id === Number(id));

  if (!selectedBlog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Header />
      <section
        className="banner"
        style={{
          height: "70vh",
          backgroundImage:
            "url(https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column", // Stack items vertically
          position: "relative", // Ensure the overlay works correctly
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1,
          }}
        ></div>
        <div
          className="bg-text"
          style={{ fontWeight: "700", zIndex: 2, marginBottom: "17px" }}
        >
          <h3>{selectedBlog.caption}</h3>
        </div>
        <div
          className="bg-style"
          style={{
            width: "40%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            zIndex: 2,
          }}
        >
          <div>
            <h6>Author :</h6>
            <p style={{ color: "gray" }}>Travosy</p>
          </div>
          <div>
            <h6>Date :</h6>
            <p style={{ color: "gray" }}>17th March, 2024</p>
          </div>
          <div>
            <h6>Time :</h6>
            <p style={{ color: "gray" }}>29 mins read</p>
          </div>
        </div>
      </section>
      <section style={{ margin: "100px 0px" }}>
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              <div>
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.caption}
                  style={{ width: "100%" }}
                />

                <p style={{ color: "gray", marginTop: "40px" }}>
                  {selectedBlog.description}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div style={{ margin: "10px auto", textAlign: "center" }}>
                <h4>Author</h4>

                <img
                  src={selectedBlog.authorImage}
                  alt=""
                  style={{
                    width: "25%",
                    height: "25%",
                    borderRadius: "50%",
                    margin: "40px 0px",
                  }}
                />
                <h6>{selectedBlog.author}</h6>
                <p style={{ color: "gray" }}>Writer</p>
              </div>

              <div style={{ marginTop: "40px" }}>
                <h6 style={{ textAlign: "center" }}>Social Sites</h6>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <FaFacebookF
                    style={{ cursor: "pointer", color: "#3b5998" }}
                  />
                  <FaInstagram
                    style={{ cursor: "pointer", color: "#e4405f" }}
                  />
                  <FaTwitter style={{ cursor: "pointer", color: "#55acee" }} />
                  <FaLinkedinIn
                    style={{ cursor: "pointer", color: "#0077b5" }}
                  />
                  <FaYoutube style={{ cursor: "pointer", color: "#cd201f" }} />
                  <FaGithub style={{ cursor: "pointer", color: "#333" }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
