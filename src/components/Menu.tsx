import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Logo from "../assets/Logo.png";
import "../styles/menu.scss";

export const Menu = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="menu d-lg-flex">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} />
        </Navbar.Brand>
        <div className="vr"></div>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" className="menu-burger"/>
        <Navbar.Collapse id="basic-navbar-nav" className="ml-5 menu-links">
          <Nav className="me-auto">
            <NavDropdown title="Quick Facts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1st Fact</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Benefits" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                1st Benefit
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
