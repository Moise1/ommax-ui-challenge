import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import partners from "../assets/partners.png";
import customsAgent from "../assets/customs-agent.png";
import accuracy from "../assets/accuracy.png";
import compliance from "../assets/compliance.png";
import professionals from "../assets/professionals.png";
import online from "../assets/online.png";
import coverage from "../assets/coverage.png";
import innovation from "../assets/innovation.png";
import ship from "../assets/ship.png";
import customsOffice from "../assets/customs-office.png";

import "../styles/main.scss";

export const Main = () => {
  return (
    <>
      <Container fluid className="main">
        <Row className="main-contents">
          <Col className="left-section">
            <div>
              <h1 className="main-title">
                Headache on complex customs matters for your business?
              </h1>
              <div className="horizontal-divider"></div>
              <p className="main-subtitle mt-5">
                Customs Support is your neutral full-service customs broker for
                complex customs matters with 20+ years of expertise in Europe
                and over 400 customs specialists who are happy to take the load
                off your mind!
              </p>
            </div>
            <Button className="quote-btn" size="lg">
              Get your qoute now
            </Button>
          </Col>
          <Col className="right-section">
            <ul className="advantages-list">
              <li>Fast and accurate customs clearance delivery</li>
              <li>EU-wide customs coverage</li>
              <li>Online and real-time control of customs processes</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="partners-container mt-5">
        <Row className="parnters">
          <Col>
            <Image src={partners} />
          </Col>
          <Col>
            <h1 className="partners-title">Who we work with</h1>
            <div className="horizontal-divider"></div>
            <p className="partners-description">
              {" "}
              We are the trusted partner for customs matters of more than 7000
              companies across Europe. Since 20 years we successfully operate
              with customers from small and large good owners to freight
              forwarders and digital platforms across various industries.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="stats-container">
        <h1 className="stats-title">
          The leading customs agent in Europe and UK
        </h1>
        <div className="horizontal-divider"></div>

        <div className="stats">
          <div className="experience">
            <h1>20 + </h1>
            <p>years of experience</p>
          </div>
          <div className="vr"></div>

          <div className="quolified-customs">
            <h1>4000 </h1>
            <p>qualified customs specialists</p>
          </div>

          <div className="vr"></div>

          <div className="locations">
            <h1>20</h1>
            <p>strategic locations</p>
          </div>

          <div className="vr"></div>

          <div className="countries">
            <h1>5</h1>
            <p>countries</p>
          </div>
        </div>
        <div className="action-btn">
          <Button className="in-touch-btn">Get in touch</Button>
        </div>
      </div>

      <div className="costoms-records-container">
        <Container fluid>
          <Row className="records-row">
            <Col className="records-col">
              <Image src={customsAgent} className="customs-agent" />
            </Col>
            <Col className="records-col text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className="horizontal-divider"></div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="second-records-container">
          <Row className="records-row">
            <Col className="records-col text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className="horizontal-divider"></div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
              </p>
              <Button className="records-btn">More information</Button>
              <div className="trans-horizontal-divider"></div>
            </Col>
            <Col className="records-col">
              <Image src={customsAgent} className="customs-agent" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="offers-main-container">
        <Container fluid>
          <Row className="call-action">
            <Col xs={10}>
              <h1>
                We offer end-to-end customs services with fast, accurate and
                compliant customs in multiple countries
              </h1>
            </Col>
            <Col xs={2}>
              <Button className="in-touch-btn" size="lg">
                Get in touch
              </Button>
            </Col>
          </Row>
          <div className="horizontal-divider"></div>
        </Container>

        <Container>
          <Row>
            <Col>
              <Image src={accuracy} />
            </Col>
            <Col>
              <Image src={compliance} />
            </Col>
            <Col>
              <Image src={professionals} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={online} />
            </Col>
            <Col>
              <Image src={coverage} />
            </Col>
            <Col>
              <Image src={innovation} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="carrier-ship">
        <Image src={ship} className="ship-img" />
      </div>

      <div className="customs-support-container">
        <div className="content-header">
          <h1>
            Customs Support is a full-service provider for customs services and
            is here to help
          </h1>
          <div className="horizontal-divider"></div>
        </div>

        <Carousel className="carousel">
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="carousel-col">
                  <Image src={customsOffice} />

                  <div className="description">
                    <h1>Import customs clearance</h1>
                    <p>
                      If you would like to import goods from a third country to
                      within the European Union, Customs Support assists you in
                      every step of the customs clearance process. Our customs
                      experts take care of import documents, classification of
                      import goods with the correct HS code, coordination of
                      physical inspection and duty management.
                    </p>
                  </div>
                </Col>

                <Col className="carousel-col">
                  <Image src={customsOffice} />

                  <div className="description">
                    <h1>Export customs clearance</h1>
                    <p>
                      If you would like to export goods from a third country to
                      within the European Union, Customs Support assists you in
                      every step of the customs clearance process. Our customs
                      experts take care of export documents, classification of
                      export goods with the correct HS code, coordination of
                      physical inspection and duty management.
                    </p>
                  </div>
                </Col>

                <Col className="carousel-col">
                  <Image src={customsOffice} />

                  <div className="description">
                    <h1>Customs transit procedures</h1>
                    <p>
                      We assist you in all requirements for different types of
                      transit procedures and ensure the correct handling of
                      customs clearance. Our customs experts take care of T1
                      transit declarations and arrange the transport of the
                      goods, accompanied by the correct transit documents..
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
