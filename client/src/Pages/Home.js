import React from "react";
// import Hero from "../component/Hero";
// import Container from "../component/Container";
// import Row from "../component/Row";
// import Col from "../component/Col";
import {Col, Row, Container, Hero} from "reactstrap"

const About = () => (
  <div>
    <div backgroundImage="http://kevart.net/data/out/10/809196.jpg">
      <h1>Runr</h1>
      <h2>Here you go!</h2>
    </div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Runr</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Description goes in here!
          </p>
          
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
