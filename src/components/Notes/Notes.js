import React, { Component } from 'react';
import firebase from '../../firebase.js';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

class Notes extends Component {
    state = {
        notes: [],
        note: "",
        author: "",
        messageShow: false,
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('notes');
        const client = {
            note: this.state.note,
            author: this.props.author,
        }

        itemsRef.push(client);

        this.setState({
            note: "",
            author: "",
            message: "Note added successfully!",
            messageShow: true
        });
    }
    render() {
        return (
            <div className="form__container">
                <h3>Add a new note</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNote">

                            <Form.Control onChange={this.handleChange} as="textarea" name ="note" rows="3" />
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

export default Notes;