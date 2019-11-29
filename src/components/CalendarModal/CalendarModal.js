import React, { Component } from 'react';
import firebase from '../../firebase.js';
import PropTypes from 'prop-types';

const propTypes = {
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    client: PropTypes.string,
    service: PropTypes.string,
    onRemove: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    actionType: PropTypes.string,
  };

  const defaultProps = {
    client: '',
    service: '',
  };

class CalendarModal extends Component {
    constructor(props,client,service){
        super(props);
        client = this.state.client;
        service = this.state.service;
    }
    state = {
        visits: [],
        date: "",
        client: "",
        service: "",
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRemove = () => {
        this.props.onRemove();
      }
    
      handleSave = () => {
        const { client } = this.state.client;
        const { service } = this.state.service;
        this.props.onSave({
            client,
            service
          });
        const itemsRef = firebase.database().ref('appointments');
        const appointment = {
            service: this.state.service,
            client: this.state.client,
            date: this.props.start.format('Do MMM., HH:mm'),
        }

        itemsRef.push(appointment);

        this.setState({
            service: "",
            client: "",
            date: "",
        });
      }

    
      renderText() {
        const {
          start,
          end,
        } = this.props;
    
        if (start.isSame(end, 'day')) {
          return (<span>{`${start.format('Do MMM., HH:mm')} - ${end.format('HH:mm')}`}</span>);
        }
        return (<span>{`${start.format('Do MMM.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
      }

    render(){
        return (
                        <div className="customModal">
                            <div className="customModal__text">
                                <p>{this.renderText()}</p>
                                <input
          className="customModal__input"
          onChange={this.handleChange} name="client" type="text"
          placeholder="Name"
          value={this.state.client}
          
        /><br/>
                <input
          className="customModal__input"
          onChange={this.handleChange} name="service" type="text"
          placeholder="Service"
          value={this.state.service}
          
        />
                            </div>
                            <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
                        </div>
        )
    }
}
CalendarModal.propTypes = propTypes;
CalendarModal.defaultProps = defaultProps;
export default CalendarModal;