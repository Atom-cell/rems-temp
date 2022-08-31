import React from "react";
import "./LandPage.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="sm"
      className="appbar"
      style={{ backgroundColor: "#1890FF", height: "75px" }}
    >
      <Container>
        <Navbar.Brand
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white" }}
        >
          REMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="one" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/features"
              className="two"
              style={{ color: "white" }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="/download"
              className="three"
              style={{ color: "white" }}
            >
              Download
            </Nav.Link>

            {window.screen.width > 768 ? (
              <Nav.Link
                href="/login"
                className="four"
                style={{ color: "white" }}
              >
                Login
              </Nav.Link>
            ) : null}
          </Nav>
          {/* <Nav.Link className="four">Login</Nav.Link> */}
          {window.screen.width > 768 ? (
            <Button
              className="signbtn"
              type="button"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
