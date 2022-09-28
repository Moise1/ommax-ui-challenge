import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Row className="row">
          <Col className="d-flex mx-2" lg={7} >
            <Nav>
              <Nav.Link className="footer-link">Imprint</Nav.Link>
              <Nav.Link className="footer-link">Data Security</Nav.Link>
              <Nav.Link className="footer-link">Conditions</Nav.Link>
              <Nav.Link className="footer-link">Cookies</Nav.Link>
              <Nav.Link className="footer-link">Customs Support</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4}>
            <span>
              &copy;{new Date().getFullYear()} Customs Support Group. All Rights
              Reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
