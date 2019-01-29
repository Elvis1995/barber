import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Offers from './components/offers/Offers';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Nav />
		<Header />
		<Info />
		<Offers />
      </div>
    );
  }
}

export default App;
