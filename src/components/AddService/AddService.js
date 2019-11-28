import React, { Component } from 'react';
import firebase from '../../firebase.js';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup'

import './AddService.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class AddService extends Component {
    state = {
        services: [],
        service: "",
        duration: "",
        price: "",
        messageShow: false
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('services');
        const client = {
            service: this.state.service,
            duration: this.state.duration,
            price: this.state.price,
        }

        itemsRef.push(client);

        this.setState({
            service: "",
            duration: "",
            price: "",
            message: "Service added successfully!",
            messageShow: true
        });
    }
    render() {
        return (
            <div className="form__container">
                <h2>Add a new service</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Service</Form.Label>

                            <Form.Control onChange={this.handleChange} name="service" type="text" placeholder="Service" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDuration">
                            <Form.Label>Duration [min]</Form.Label>
                            <Form.Control onChange={this.handleChange} name="duration" type="text" placeholder="Duration" />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>

                            <InputGroup.Append>
                                <Form.Control onChange={this.handleChange} name="price" type="number" placeholder="Price" />
                                <InputGroup.Text>zł</InputGroup.Text>
                            </InputGroup.Append>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
                <Alert show={this.state.messageShow} variant="success">{this.state.message}</Alert>
            </div>
        )
    }
}

export default AddService