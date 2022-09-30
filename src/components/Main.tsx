import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

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
import michealDoe from "../assets/micheal-doe.png";

import "../styles/main.scss";

export const Main = () => {
  return (
    <main className="main-container">
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
            <Button className="quote-btn d-none d-xl-block" size="lg">
              Get your qoute now
            </Button>
          </Col>
          <div className="horizontal-divider mobile d-lg-none"></div>
          <Col className="right-section">
            <ul className="advantages-list">
              <li>Fast and accurate customs clearance delivery</li>
              <li>EU-wide customs coverage</li>
              <li>Online and real-time control of customs processes</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Button className="quote-btn mobile d-xl-none" size="lg">
        Get your qoute now
      </Button>

      <Container className="partners-container mt-5 px-1">
        <Row className="partners">
          <Col>
            <Image src={partners} className="partners-img" />
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

      <div className="stats-container mx-1">
        <h1 className="stats-title">
          The leading customs agent in Europe and UK
        </h1>
        <div className="horizontal-divider"></div>

        <div className="stats d-block d-lg-flex">
          <div className="stats-item">
            <h1>20 + </h1>
            <p>years of experience</p>
          </div>
          <div className="vr"></div>
          <div className="horizontal-divider d-lg-none"></div>

          <div className="stats-item">
            <h1>4000 </h1>
            <p>qualified customs specialists</p>
          </div>

          <div className="vr"></div>
          <div className="horizontal-divider d-lg-none"></div>

          <div className="stats-item">
            <h1>20</h1>
            <p>strategic locations</p>
          </div>

          <div className="vr"></div>
          <div className="horizontal-divider d-lg-none"></div>

          <div className="stats-item">
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
            <Col className="records-col text order-last order-xl-first">
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

      {/* offers area  */}
      <div className="offers-main-container">
        <Container fluid>
          <Row className="call-action">
            <Col lg={10} xs={12}>
              <h1>
                We offer end-to-end customs services with fast, accurate and
                compliant customs in multiple countries
              </h1>
            </Col>
            <Col lg={2} xs={12}>
              <Button className="in-touch-btn d-none" size="lg">
                Get in touch
              </Button>
            </Col>
          </Row>
          <div className="horizontal-divider"></div>
        </Container>

        <div className="mobile-screen-carousel d-lg-none mt-5">
          <Carousel variant="dark" className="text-center">
            <Carousel.Item>
              <Image src={accuracy} />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={compliance} />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={professionals} />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={online} />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={coverage} />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={innovation} />
            </Carousel.Item>
          </Carousel>

          <div className="action-btn-container text-center mt-4">
            <Button className="in-touch-btn mt-3 w-50" size="lg">
              Get in touch
            </Button>
          </div>
        </div>

        <Container className="d-none">
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
                  <a href="#">
                    Learn more{" "}
                    <span>
                      <i className="fa-regular fa-chevron-right" />
                    </span>
                  </a>
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
                  <a href="#">
                    Learn more{" "}
                    <span>
                      <i className="fa-regular fa-chevron-right" />
                    </span>
                  </a>
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
                  <a href="#">
                    Learn more{" "}
                    <span>
                      <i className="fa-regular fa-chevron-right" />
                    </span>
                  </a>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* customs clearance area */}
      <div className="customs-clearance">
        <div className="brexit-info">
          <h1>Customs clearance after Brexit</h1>
          <div className="horizontal-divider"></div>

          <p>
            Since 4 years we are successfully helping our customers to prepare
            their business for Brexit. Our Bexit customs agents are always
            up-to-date with the latest customs regulations after Brexit and look
            forward to support you with Brexit customs procedures.
          </p>

          <Button className="brexit-btn">Brexit and customs: get ready!</Button>
        </div>
      </div>

      <div className="contact-us">
        <Container className="contact-grid-container">
          <Row>
            <Col lg={8} xs={12}>
              <div className="contact-header">
                <h1>Customs Support - Take the load off your mind</h1>

                <div className="horizontal-divider"></div>

                <p>
                  <strong>
                    Get in touch with one of our customs experts!{" "}
                  </strong>
                </p>
                <p>
                  Fill in the contact form or use the chat function on the
                  website
                </p>
              </div>

              <div className="contact-form">
                <p>
                  <strong>Are you a new or returning customer? *</strong>
                </p>
                <Form>
                  <Stack
                    direction="horizontal"
                    gap={5}
                    className="user-type-checks"
                  >
                    <Form.Check type="radio" label="New" />
                    <Form.Check type="radio" label="Returning" />
                  </Stack>

                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Choice of service *</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="horizontal-divider contact"></div>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Control type="text" placeholder="First name *" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                      <Form.Control type="text" placeholder="Last name *" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCompany">
                      <Form.Control type="text" placeholder="Company" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="email" placeholder="E-mail *" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                      <Form.Control type="text" placeholder="Phone number *" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Select>
                        <option>Country *</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      {" "}
                      <Form.Check
                        type="radio"
                        label="I agree with the Terms and Conditions * "
                      />
                    </Col>

                    <Col>
                      {" "}
                      <Form.Check
                        type="radio"
                        label="I want to sign up for the newsletter"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col lg={4} xs={12} className="contact-person-container">
              <Form className="contact-person-form">
                <p>
                  <strong>You prefer a personal contact?</strong>
                </p>
                <p>Please find the phone numbers of our locations below.</p>

                <Form.Group controlId="formGridService" className="mb-3">
                  <Form.Select>
                    <option>Choice of service*</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formGridGo" className="mx-auto">
                  <Button className="go-btn">Go</Button>
                </Form.Group>
                <div className="horizontal-divider"></div>
              </Form>

              <div className="contact-profile">
                <h3 className="text-center">„Let’s grow together!“</h3>

                <div className="support-lead">
                  <Image src={michealDoe} />
                  <div className="details">
                    <h6>
                      <strong>Micheal Doe</strong>
                    </h6>
                    <p>Customer Support Lead</p>
                    <p>CSG</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};
