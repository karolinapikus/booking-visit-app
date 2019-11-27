import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import AddClient from '../AddClient/AddClient';
import ClientList from '../ClientList/ClientList';


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
