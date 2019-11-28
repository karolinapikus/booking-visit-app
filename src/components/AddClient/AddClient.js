import React, { Component } from 'react';
import firebase from '../../firebase.js';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup'

import './AddClient.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddClient extends Component {
  state = {
    clients: [],
    name: "",
    surname: "",
    email: "",
    phone: "",
    messageShow: false
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('clients');
    const client = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone
    }

    itemsRef.push(client);

    this.setState({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "Client added successfully!",
      messageShow: true
    });
  }
  render() {
    return (
      <div className="form__container">
        <h2>Add a new client</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>

              <Form.Control onChange={this.handleChange} name="name" type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control onChange={this.handleChange} name="surname" type="text" placeholder="Surname" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="E-mail address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCity">
            <Form.Label>Phone</Form.Label>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">+48</InputGroup.Text>
              <Form.Control onChange={this.handleChange} name="phone" type="number" placeholder="Phone number" />
            </InputGroup.Prepend>

          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
        <Alert show={this.state.messageShow} variant="success">{this.state.message}</Alert>
      </div>
    )
  }
}

export default AddClient