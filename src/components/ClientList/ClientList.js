import React, {Component} from 'react';
import firebase from '../../firebase.js';

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
    render(){
        return (
            <div className="client__list">
               <h2>Clients list</h2>
               <ul>
                   {this.state.clients.map( (client) => {return (
                   <li key={client.id}>{client.name} {client.surname}, phone: {client.phone}, email: {client.email}</li>
                   )
                   })
                }
            
               </ul>
            </div>
        )
    }
}

export default ClientList