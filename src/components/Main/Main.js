import React, {Component} from 'react';
import './Main.scss';
import Notes from "../Notes/Notes"
import NotesList from "../NotesList/NotesList"

class Main extends Component {
    render(){
        if (this.props.user === null) {
            return (
                <div className="main__content">
                <h2>You need to log in to use this app.</h2>
                </div>
            )
        } else {
            return (
                <div className="main__content">
                    <h2>Hello, <img alt="User avatar" src={this.props.user.photoURL}/> {this.props.user.displayName}</h2>
                    <div className="notes__container">
                    <div className="notes__block">
                    <Notes author={this.props.user.displayName}/>
                    </div>
                    <div className="notes__block">
                        <NotesList author={this.props.user.displayName}/>
                    </div>
                    </div>

                    
                </div>
                )
        }
        
    }
}

export default Main