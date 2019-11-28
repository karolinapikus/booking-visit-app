import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Navigation.scss';


class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SalonMenago</Navbar.Brand>
        <Nav className="mr-auto">

          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <NavDropdown title="Clients" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link to="/clients/add">Add Client</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/clients/list">Client List</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link to="/services/add">Add Service</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/services/list">Services List</Link></NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar>

    )
  }
}

export default Navigation;