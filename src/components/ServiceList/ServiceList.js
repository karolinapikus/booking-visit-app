import React, { Component } from 'react';
import firebase from '../../firebase.js';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './ServiceList.scss';

class ServiceList extends Component {
    state = {
        services: [],
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('services');
        itemsRef.on('value', (snapshot) => {
            let services = snapshot.val();
            let newState = [];
            for (let service in services) {
                newState.push({
                    id: service,
                    service: services[service].service,
                    duration: services[service].duration,
                    price: services[service].price,

                });
            }
            this.setState({
                services: newState
            });
        });
    }
    removeItem(serviceID) {
        const itemRef = firebase.database().ref(`/services/${serviceID}`);
        itemRef.remove();
    }
    render() {
        return (
            <div className="client__list">
                <h2>Services list</h2>
                <ul>
                    {this.state.services.map((service) => {
                        return (
                            <li key={service.id}><div>
                                <h3>{service.service}</h3>
                                <p>price: <strong>{service.price}</strong> PLN, duration: <strong>{service.duration}</strong> min</p>
                                <p><DeleteIcon className="delete__icon" onClick={() => this.removeItem(service.id)} /> <EditIcon className="edit__icon" /></p></div></li>
                        )
                    })
                    }

                </ul>
            </div>
        )
    }
}

export default ServiceList