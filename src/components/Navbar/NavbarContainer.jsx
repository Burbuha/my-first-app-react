import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';



let mapStateToProps = (state) => {
  debugger
  return {
    state: state.sidebar,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;