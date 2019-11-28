import React, { Component } from 'react';
import firebase from '../../firebase.js';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './ClientList.scss';

class ClientList extends Component {
  state = {
    clients: [],
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('clients');
    itemsRef.on('value', (snapshot) => {
      let clients = snapshot.val();
      let newState = [];
      for (let client in clients) {
        newState.push({
          id: client,
          name: clients[client].name,
          surname: clients[client].surname,
          phone: clients[client].phone,
          email: clients[client].email

        });
      }
      this.setState({
        clients: newState
      });
    });
  }
  removeItem(clientID) {
    const itemRef = firebase.database().ref(`/clients/${clientID}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className="client__list">
        <h2>Clients list</h2>
        <ul>
          {this.state.clients.map((client) => {
            return (
              <li key={client.id}><div>
                <h3>{client.name} {client.surname}</h3>
                <p>phone: {client.phone}, email: {client.email}</p>
                <p><DeleteIcon className="delete__icon" onClick={() => this.removeItem(client.id)} /> <EditIcon className="edit__icon" /></p></div></li>
            )
          })
          }

        </ul>
      </div>
    )
  }
}

export default ClientList