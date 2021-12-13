import React from 'react';
import { toggleMenuAction, disableMenuAction } from '../actions/startActions';
import Menu from '../images/menu.png'
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  toggleMenuAction: () => dispatch(toggleMenuAction),
  disableMenuAction: () => dispatch(disableMenuAction),
});

const Navbar = props => {
  const handleClick = (event,target) => {
    event.preventDefault();
    props.disableMenuAction();
    const anchorTarget = document.getElementById(target)
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className="navBar">
      <button onClick={props.toggleMenuAction}>
        <a href="/aqibmirza/#" onClick={(e) => {handleClick(e,"home")}}><img src={Menu} alt={"Menu"} /></a>
      </button>
      <ul className={props.toggle ? "nav-links show-nav" : "nav-links"}>
        <li><a href="/aqibmirza/#" onClick={(e) => {handleClick(e,"home")}}>Home</a></li>
        <li><a href="/aqibmirza/#about" onClick={(e) => {handleClick(e,"about")}}>About</a></li>
        <li><a href="/aqibmirza/#services" onClick={(e) => {handleClick(e,"services")}}>Services</a></li>
        <li><a href="/aqibmirza/#portfolio" onClick={(e) => {handleClick(e,"portfolio")}}>Portfolio</a></li>
        <li><a href="/aqibmirza/#contact" onClick={(e) => {handleClick(e,"contact")}}>Contact</a></li>
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)