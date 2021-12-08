import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Profile from '../images/profile.jpg'
const About = (props) => {
  return (
    <section id={"about"}>
      <Container>
        <Row className="text-left">
          <Col sm={7} className={"about-content"}>
            <h1>About</h1>
            <p>I'm Aaron Smith! Skilled Web and Mobile developer with more than 7+ Years of experience. I develop websites and mobile Apps.</p>
            <p>Well versed in many programming languages on client and server both side such as React JS, React Native, Vue JS, Node JS, PHP</p>
            <p>Valuable team member who has experience diagnoses problems and developing solutions.</p>
            <p>Talented leader with unique ideas and a history of successful contributions in the field.</p>
          </Col>
          <Col sm={5}>
            <img src={Profile} alt="profile" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;