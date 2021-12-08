import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system'
import { connect } from 'react-redux';
import Navbar from './nav'

import logo from '../logo.png';
import { activeScrollAction, disableScrollAction } from '../actions/startActions';

const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    activeScrollAction: () => dispatch(activeScrollAction),
    disableScrollAction: () => dispatch(disableScrollAction),
  });

const Header = (props) => {
  useEffect(()=> {
    document.addEventListener("scroll", () => {
    if(window !== "undefined" && window.pageYOffset >= 20)
      props.activeScrollAction()
    else    
      props.disableScrollAction();
    })
  },[props]);
  return (
    <header className={props.scrollmenu}>
      <Container>
        <Row className={"logo-container"}>
          <Col md={3} xs={6} className={"logo-left text-left"}>
            <img className={"logo"} src={logo} alt={"logo"} height={80} />
          </Col>
          <Col md={9} xs={6}>
            <Navbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);