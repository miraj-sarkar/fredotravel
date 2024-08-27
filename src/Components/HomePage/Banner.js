import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, InputGroup } from "react-bootstrap";
import BookingForm from "../MiniComponents/BookingForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsPerson } from "react-icons/bs";
const Banner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleIncrement = (setCount, count) => {
    setCount(count + 1);
  };

  const handleDecrement = (setCount, count) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSearch = () => {
    console.log("Search clicked", { startDate, adults, children });
  };
  return (
    <div
      style={{
        height: "85vh",
        backgroundImage:
          "url('https://travosy.vercel.app/static/media/6.50e990af5a30ede1343f.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
      data-aos="fade-down"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(rgba(0, 0, 0, 0.9))",
          zIndex: 1,
        }}
      ></div>

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
              style={{
                marginTop: "30px",
                padding: "15px",
                background: "#EF4444",
              }}
            >
              View Packages
            </Button>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "30px",
                width: "60%",
                margin: "0 auto",
              }}
            >
              <h4 style={{ padding: "20px 0px" }}>Search Your Destinations</h4>
              <Form.Group controlId="date">
                <Form.Label> Select Your Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control"
                  style={{ width: "100%", color: "gray" }}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="date">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value="Select Location"
                  className="form-control"
                  style={{ color: "gray" }}
                />
              </Form.Group>
              <Form.Group controlId="adults" className="my-3">
                <Form.Label>No. of Adults</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <BsPerson />
                  </InputGroup.Text>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDecrement(setAdults, adults)}
                  >
                    -
                  </Button>
                  <Form.Control
                    type="number"
                    value={adults}
                    readOnly
                    style={{
                      textAlign: "center",
                      width: "40px",
                      color: "gray",
                    }}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleIncrement(setAdults, adults)}
                  >
                    +
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="children" className="my-3">
                <Form.Label>No. of Children</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <BsPerson />
                  </InputGroup.Text>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDecrement(setChildren, children)}
                  >
                    -
                  </Button>
                  <Form.Control
                    type="number"
                    value={children}
                    readOnly
                    style={{
                      textAlign: "center",
                      width: "40px",
                      color: "gray",
                    }}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleIncrement(setChildren, children)}
                  >
                    +
                  </Button>
                </InputGroup>
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleSearch}
                style={{
                  width: "100%",
                  background: "#EF4444",
                  border: "#EF4444",
                  padding: "8px 0px",
                }}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
