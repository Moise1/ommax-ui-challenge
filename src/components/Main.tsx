import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/main.scss";

export const Main = () => {
  return (
    <Container fluid className="main">
      <Row className="main-contents">
        <Col>
          <div>
            <p className="main-title">
              Headache on complex customs matters for your business?
            </p>
            <div className="horizontal-divider"></div>
            <p className="main-subtitle mt-5">
              Customs Support is your neutral full-service customs broker for
              complex customs matters with 20+ years of expertise in Europe and
              over 400 customs specialists who are happy to take the load off
              your mind!
            </p>
          </div>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
};
