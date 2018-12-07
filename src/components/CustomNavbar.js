import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>

        <Navbar.Header>
          
          <Navbar.Brand>
            <Link to="/">Taixing</Link>

            <span>&nbsp; &nbsp;</span>       
            <a href="https://github.com/taixingbi?tab=repositories">
              <i class="fa fa-github"></i>
            </a>
            <span>&nbsp; &nbsp;</span>       
            <a href="https://www.linkedin.com/in/taixing-bi-757a4961/">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>

            {/*
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>           
            */}

            <NavItem eventKey={3} componentClass={Link} href="/demo" to="/demo">
              Demo
            </NavItem>

            <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
             Contact
            </NavItem>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}
