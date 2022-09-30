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
          <Col className="d-xl-flex mx-2">
            <Nav className="flex-xl-row flex-column">
              <Nav.Link className="footer-link mb-3">Imprint</Nav.Link>
              <div className="horizontal-divider d-xl-none"></div>

              <Nav.Link className="footer-link mb-3">Data Security</Nav.Link>
              <div className="horizontal-divider d-xl-none"></div>

              <Nav.Link className="footer-link mb-3">Conditions</Nav.Link>
              <div className="horizontal-divider d-xl-none"></div>

              <Nav.Link className="footer-link mb-3">Cookies</Nav.Link>
              <div className="horizontal-divider d-xl-none"></div>

              <Nav.Link className="footer-link mb-3">Customs Support</Nav.Link>
            </Nav>
          </Col>

          <Col className="col d-none d-xl-block">
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
