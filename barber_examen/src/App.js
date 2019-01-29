import React, { Component } from 'react';
import Homepage from './components/homepage/Homepage';
import Contacts from './components/contact/Contact';
import {BrowserRouter as Router , Route} from 'react-router-dom';

let homePage = () => {
  return(
  <Homepage />
  );
}

let contact = () => {
  return(
  <Contacts />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>      
          <Route exact path="/" component={homePage} />
          <Route path="/Kontakt" component={contact} />
        </div>
      </Router>
    );
  }
}

export default App;
