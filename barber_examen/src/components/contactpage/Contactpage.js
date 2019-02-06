import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Contact from '../contact/Contact'
import Footer from '../footer/Footer';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Contact />
        <Footer />
      </div>
    );
  }
}