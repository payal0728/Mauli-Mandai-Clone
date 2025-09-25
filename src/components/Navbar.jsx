import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          <img
            src="https://mandai.in/assets/common/images/logo.jpg"
            alt="Mauli Mandai"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold text-dark">Mauli Mandai</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/mandai">Mandai</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
