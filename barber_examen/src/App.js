import React, { Component } from 'react';
import Homepage from './components/homepage/Homepage';
import Contactpage from './components/contactpage/Contactpage';
import Bookingpage from './components/bookingpage/Bookingpage';
import {BrowserRouter as Router , Route} from 'react-router-dom';

let homePage = () => {
  return(
  <Homepage />
  );
}

let BookingPage = () => {
  return(
  <Bookingpage />
  );
}

let contact = () => {
  return(
  <Contactpage />
  );
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>      
          <Route exact path="/" component={homePage} />
          <Route path="/Boka" component={BookingPage} />
          <Route path="/Kontakt" component={contact} />
        </div>
      </Router>
    );
  }
}

export default App;
