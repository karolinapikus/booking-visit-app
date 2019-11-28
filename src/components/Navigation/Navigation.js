import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Navigation.scss';


class Navigation extends Component {
  handleLogin = () => {
    if (typeof this.props.onLogin === "function") {
      this.props.onLogin();
    }
  }
  handleLogout = () => {
    if (typeof this.props.onLogin === "function") {
      this.props.onLogout();
    }
  }
  render() {
    if (this.props.user === null) {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>SalonMenago</Navbar.Brand>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><button onClick={this.handleLogin}>Log In</button></Nav.Link>
           
        </Navbar>
      )
    } else {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>SalonMenago</Navbar.Brand>
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
            <Nav.Link><Link to="/calendar">Calendar</Link></Nav.Link>
            <Nav.Link><button onClick={this.handleLogout}>Log Out</button></Nav.Link>
          </Nav>
        </Navbar>
      )
    }
  }
}

  export default Navigation;