import React from 'react';
import {Container, Row, Col} from 'react-grid-system'
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const mainSection = (props) => {
  return (
    <section id={"home"} className={props.current === 0 ? "active": ""}>
      <canvas />
      <Container>
        <Row>
          <Col xs={12} className="heading-container">
          <h1><span className="lagend">Hello!</span> My Name<br /> is Aaron.</h1>
          <hr />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default connect(mapStateToProps)(mainSection);