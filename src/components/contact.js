import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Profile from '../images/profile.jpg'
const Contact = (props) => {
  return (
    <section id={"contact"}>
      <Container>
        <Row className="text-left">
          <Col xs={12} className={"about-content"}>
            <h1>Contact</h1>
            <p>E-Mail: <a href="mailto:aaron.smith@ninjatechnolabs.com">aaron.smith@ninjatechnolabs.com</a></p>
            <p>Skype: <a href="skype:aaron.smith@ninjatechnolabs.com">aaron.smith@ninjatechnolabs.com</a></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;