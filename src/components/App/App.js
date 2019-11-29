import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { auth, provider } from '../../firebase';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import AddClient from '../AddClient/AddClient';
import ClientList from '../ClientList/ClientList';
import AddService from '../AddService/AddService';
import ServiceList from '../ServiceList/ServiceList';
import ServiceCat from '../ServiceCat/ServiceCat';
import Calendar from '../Calendar/Calendar';


class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  state = {
    user: null
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    return (
      <Router>
        <section className="App">
          <div className="navigation">
            <Navigation user={this.state.user} onLogin={this.login} onLogout={this.logout} />
          </div>
          <div className="app__area">
            <Route exact path="/" component={() => <Main user={this.state.user}/>}/>
            <Route path="/clients/add" component={AddClient} />
            <Route path="/clients/list" component={ClientList} />
            <Route path="/services/add" component={AddService} />
            <Route path="/services/list" component={ServiceList} />
            <Route path="/services/categories" component={ServiceCat} />
            <Route path="/calendar" component={Calendar} />
          </div>
          <div className="app__footer">
            {/*Footer*/}
          </div>
        </section>
      </Router>
    )
  }

};


export default App;
