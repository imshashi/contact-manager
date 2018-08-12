import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/layout/Header';
import Test from './components/test/Test';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ Contacts } />
                <Route exact path="/contacts/new" component={ AddContact } />
                <Route exact path="/contacts/:id/edit" component={ EditContact } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/test" component={ Test } />
                <Route exact path="/not-found" component={ NotFound } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
