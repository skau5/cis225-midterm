import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class CustomNavbar extends Component {
    render() {
        return(
            <Navbar bg="primary" variant="dark  " >
  <Navbar.Brand href="https://www.hfcc.edu/">HFCC</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse aria-controls="responsive-navbar-nav" className="justify-content-center">
    <Nav variant="pills">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="./about">About</Nav.Link>
      <Nav.Link href="./contact">Contact</Nav.Link>
    </Nav>
   </Navbar.Collapse>
</Navbar>
            )
    }
}