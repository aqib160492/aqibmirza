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
  const handleClick = (event,target) => {
    event.preventDefault();
    const anchorTarget = document.getElementById(target)
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
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
            <a href="/aqibmirza/#" onClick={(e) => {handleClick(e,"home")}}>
              <img className={"logo"} src={logo} alt={"logo"} height={80} />
            </a>
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