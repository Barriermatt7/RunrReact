import React, { Component } from "react";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
        <Hero backgroundImage="http://kevart.net/data/out/10/809196.jpg">
        <h1>Runr</h1>
        <h2>Here you go!</h2>
      </Hero>
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
      </div>
    );
  }
}

