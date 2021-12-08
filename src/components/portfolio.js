import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Frameusa from '../images/frameusa.png';
import Barry from '../images/barry.png';
import Mackey from '../images/mackey.png';

const Portfolio = (props) => {
  return (
    <section id={"portfolio"}>
      <Container>
        <Row>
          <Col xs={12} className={"text-left"}>
            <h1>Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className={"about-content"}>
            <div className={"portfolio-block"}>
              <div className={"portfolio-img"}><img src={Frameusa} alt="Frameusa" /></div>
              <div className={"portfolio-name"}><p> Frameusa </p></div>
              <div className={"portfolio-tech"}><p> React JS, Node JS, Wordpress, Ecommerce </p></div>
            </div>
          </Col>
          <Col sm={4}>
            <div className={"portfolio-block"}>
              <div className={"portfolio-img"}><img src={Barry} alt="Barry" /></div>
              <div className={"portfolio-name"}><p> Barry Energy </p></div>
              <div className={"portfolio-tech"}><p> React JS, Gatsby JS, GtraphQL, Wordpress, Zendesk </p></div>
            </div>
          </Col>
          <Col sm={4}>
            <div className={"portfolio-block"}>
              <div className={"portfolio-img"}><img src={Mackey} alt="Mackay Goodwin" /></div>
              <div className={"portfolio-name"}><p> Mackay Goodwin </p></div>
              <div className={"portfolio-tech"}><p> React JS, Gatsby JS, GtraphQL, Wordpress, Animation </p></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;