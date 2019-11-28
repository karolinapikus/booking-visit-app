import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import AddClient from '../AddClient/AddClient';
import ClientList from '../ClientList/ClientList';
import AddService from '../AddService/AddService';
import ServiceList from '../ServiceList/ServiceList';


function App() {
  return (
    <>
      <Router>
        <section className="App">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="app__area">
            <Route exact path="/" component={Main} />
            <Route path="/clients/add" component={AddClient} />
            <Route path="/clients/list" component={ClientList} />
            <Route path="/services/add" component={AddService} />
            <Route path="/services/list" component={ServiceList} />
          </div>
          <div className="app__footer">
            {/*Footer*/}
          </div>
        </section>
      </Router>
    </>

  );
}

export default App;
