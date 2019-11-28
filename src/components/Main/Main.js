import React, {Component} from 'react';
import './Main.scss';

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
                    
                </div>
                )
        }
        
    }
}

export default Main