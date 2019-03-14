import React, { Component } from 'react';
import Homepage from './components/homepage/Homepage';
import Contactpage from './components/contactpage/Contactpage';
import Bookingpage from './components/bookingpage/Bookingpage';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import ScrollToTop from './Scrolltotop';

let homePage = () => {
  return(
  <Homepage />
  );
};

let BookingPage = () => {
  return(
  <Bookingpage />
  );
};

let contact = () => {
  return(
  <Contactpage />
  );
};


class App extends Component {
  render() {
    return (
      <Router>
      <ScrollToTop>
        <div>      
          <Route exact={true} path="/" component={homePage} />
          <Route path="/Boka" component={BookingPage} />
          <Route path="/Kontakt" component={contact} />
        </div>
      </ScrollToTop>
      </Router>
    );
  }
}

export default App;
