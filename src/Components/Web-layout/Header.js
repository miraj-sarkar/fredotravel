import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ThemeToggle from "../HomePage/ThemeToggle";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-transparent"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
      }}
    >
      <ThemeToggle />
      <Container>
        <Navbar.Brand href="#" style={{ color: "white", fontWeight: "700" }}>
          Travel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title={
                <span style={{ color: "white", fontWeight: "400" }}>
                  Packages
                </span>
              }
              id="navbarScrollingDropdown"
              className="px-3"
            >
              <NavDropdown.Item href="#action3" className="py-2">
                Premium
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="py-2">
                Special
              </NavDropdown.Item>
              <NavDropdown.Item href="#action" className="py-2">
                Weekly
              </NavDropdown.Item>
              <NavDropdown.Item href="#action" className="py-2">
                Daily
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span style={{ color: "white", fontWeight: "400" }}>Pages</span>
              }
              id="navbarScrollingDropdown"
              className="px-3"
            >
              <NavDropdown.Item href="#action3" className="py-2">
                About Us
              </NavDropdown.Item>
              <NavDropdown title="My Account" className="py-2">
                <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Payment</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Social</NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Notification
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">Settings</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Help Center" className="py-2">
                <NavDropdown.Item href="#action6">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action4">FAQs</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Guide</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Support</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Auth Pages" className="py-2">
                <NavDropdown.Item href="#action7">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Forgot Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">Lock Screen</NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Reset Password
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="utility" className="py-2">
                <NavDropdown.Item href="#action7">
                  Terms of Services
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Privacy policy
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="special" className="py-2">
                <NavDropdown.Item href="#action7">Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Maintenance</NavDropdown.Item>
                <NavDropdown.Item href="#action8">404</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <NavDropdown
              title={
                <span style={{ color: "white", fontWeight: "400" }}>Blogs</span>
              }
              id="navbarScrollingDropdown"
              className="px-3"
            >
              <NavDropdown.Item href="#action13" className="py-2">
                Travel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action14" className="py-2">
                Hotel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action15" className="py-2">
                Island
              </NavDropdown.Item>
              <NavDropdown.Item href="#action16" className="py-2">
                Sea-Beach
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/contact"
              style={{ color: "white", fontWeight: "400" }}
              className="px-3"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
