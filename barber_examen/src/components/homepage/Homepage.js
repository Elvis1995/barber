import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Info from '../info/Info';
import Offers from '../offers/Offers';
import Footer from '../footer/Footer';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Info />
		<Offers />
		<Footer />
      </div>
    );
  }
}