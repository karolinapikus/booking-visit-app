import React, { Component } from 'react';
import firebase from '../../firebase.js';
import './NotesList.scss';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class NotesList extends Component {
  state = {
    notes: [],
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('notes');
    itemsRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      for (let note in notes) {
        newState.push({
          id: note,
          note: notes[note].note,
          author: notes[note].author,

        });
      }
      this.setState({
        notes: newState
      });
    });
  }
  removeItem(notesID) {
    const itemRef = firebase.database().ref(`/notes/${notesID}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className="notes__list">
        <h3>Notes list</h3>
        <ul>
          {this.state.notes.map((note) => {
             if (note.author === this.props.author){
                 return (
              <li key={note.id}><div>
                <p>Author: <strong>{note.author}</strong></p>
                <p>{note.note}</p>
                <p><DeleteIcon className="delete__icon" onClick={() => this.removeItem(note.id)} /> <EditIcon className="edit__icon" /></p></div></li>
            )
             } else {
                return (
              <li key={note.id}><div>
                <p>Author: <strong>{note.author}</strong></p>
                <p>{note.note}</p>
               </div></li>
            )
             }

          })
          }

        </ul>
      </div>
    )
  }
}

export default NotesList