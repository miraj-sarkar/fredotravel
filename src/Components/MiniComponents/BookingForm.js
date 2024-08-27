import React, { useState } from "react";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsPerson } from "react-icons/bs";

const BookingForm = () => {
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
    <div>
      <Form>
        <Form.Group controlId="date">
          <Form.Label>Date:</Form.Label> <br />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="adults" className="my-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Label style={{ marginRight: "10px" }}>Adults</Form.Label>
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
                style={{ textAlign: "center", width: "40px" }}
              />
              <Button
                variant="outline-secondary"
                onClick={() => handleIncrement(setAdults, adults)}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </Form.Group>

        <Form.Group controlId="children" className="my-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Label style={{ marginRight: "10px" }}>Children</Form.Label>
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
                style={{ textAlign: "center", width: "40px" }}
              />
              <Button
                variant="outline-secondary"
                onClick={() => handleIncrement(setChildren, children)}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleSearch}
          style={{ width: "100%" }}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
