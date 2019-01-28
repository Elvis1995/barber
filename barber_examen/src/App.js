import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/header/Header';
import Info from './components/info/Info';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Nav />
		<Header />
		<Info />
      </div>
    );
  }
}

export default App;
