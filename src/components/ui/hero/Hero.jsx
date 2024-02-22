import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import HeroImage from "../../../assets/hero/hero1.png";
const Hero = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center vh-100">
        <Col xs={12} lg={6} md={6}>
          <div>
            <h1 className="text-dark">Where Design Meets Innovation!</h1>
            <p>
              Whether you're a startup looking to establish your brand identity
              or an established business aiming to refresh your image, we've got
              the creative firepower to make it happen. LET’S TALK
            </p>
            <Button variant="outline-dark">Lets Get Started!</Button>{" "}
          </div>
        </Col>
        <Col>
          <Image src={HeroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
