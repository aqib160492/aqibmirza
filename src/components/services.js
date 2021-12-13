import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Services = (props) => {
  return (
    <section id={"services"}>
      <Container>
        <Row>
          <Col>
            <h1>Services</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner react'}></div>
            </div>
            <p className='skill-tech'>React JS</p>
          </Col>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner redux'}></div>
            </div>
            <p className='skill-tech'>Redux</p>
          </Col>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner gatsby'}></div>
            </div>
            <p className='skill-tech'>Gatsby JS</p>
          </Col>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner node'}></div>
            </div>
            <p className='skill-tech'>Node JS</p>
          </Col>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner mongo'}></div>
            </div>
            <p className='skill-tech'>Mongo DB</p>
          </Col>
          <Col md={4} sm={6} className='skill'>
            <div className={'skill-line'}>
              <div className={'skill-line-inner mysql'}></div>
            </div>
            <p className='skill-tech'>MySQL</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;