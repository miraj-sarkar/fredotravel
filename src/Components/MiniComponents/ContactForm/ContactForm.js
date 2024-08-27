import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./ContactForm.css";
const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Form submitted successfully!");
    }
    setValidated(true);
  };

  return (
    <Container style={{ marginTop: "50px", maxWidth: "600px" }}>
      <Row>
        <Col>
          <h2 className="text-center mb-4" style={{ fontWeight: "600" }}>
            Get In Touch
          </h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="subject" className="mt-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Question"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                placeholder="Enter your message"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Send Your Query
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
